import scss from './page.module.scss'

import type { Content, CustomInputsRef, ServerResponseError } from '@/global.type'
import type { AppDispatch, RootState } from '@/store/store'
import type { PostCommentsData } from '../post/page.type'
import type { CreatorState, ContentDraft } from '@/store/creator/creator.type'
import type { FormFieldsValidation } from '@/custom-hook/use-form/useForm.type'

import FormWrapper from "@/component/form-wrapper/formWrapper"
import TextInput from "@/component/input/textInput/textInput"
import TextArea from '@/component/input/textArea/textArea'
import MutatingLoader from '@/component/loader/mutatig-loader/mutatingLoader'
import TextTagInput from '@/component/input/text-tag-input/textTagInput'
import Button from '@/component/buttons/button/button'
import CheckBoxInput from '@/component/input/checkbox-input/checkBoxInput'
import LocalError from '@/component/errors/local-error/localError'
import WriteNewLoader from './loader'

import { Fragment, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

import { editOrinsertContentDraft, removeContentDraft } from '@/store/creator/creator'

import useForm from '@/custom-hook/use-form/useForm'
import useAuth from '@/custom-hook/use-auth/useAuth'
import useSearchParams from '@/custom-hook/use-search-params/useSearchParams'
import usePermitor from '@/custom-hook/use-permitor/useHavePermission'
import useMetadata from '@/custom-hook/use-metadata/useMetadata'
import useMutate from '@/custom-hook/use-request/useMutate'

import localStorage from '@/lib/local-storage/localStorage'
import fetcher from '@/lib/fetcher/fetcher'

import { AUTHORIZATION_OBJECT } from '@/conts'

const USE_FORM_VALIDATION: FormFieldsValidation<Content> = { title: { isMin: { message: 'Title is to short!', value: 4 }}}

//Create content || Update content || Save draft || Update draft || Remove draft
export default function WriteNewPost() {
  const dispatch = useDispatch<AppDispatch>()
  const redirect = useNavigate()
  const creator = useSelector<RootState, CreatorState>(state => state.creator)
  const postTagsRef = useRef<CustomInputsRef<string[]> | undefined>()
  const postContentRef = useRef<CustomInputsRef<string> | undefined>()

  const searchParams = useSearchParams()
  const auth = useAuth()
  const permitor = usePermitor()
  
  const contentID: string | null = searchParams.get('content-id')
  const draftID: string | null = searchParams.get('draft-id')

  if(!permitor.role(['Admin', 'Creator']).permited()) return <Navigate to='/'/>

  const currContent: ContentDraft | undefined = 
    //Get content to edit
    contentID ? 
    localStorage.get<ContentDraft>(contentID, 'null') :
    //Get content draft to edit
    draftID ?
    creator.contentDraft.find(content => content._id === draftID) :
    undefined

  const isPost: boolean = currContent?.contentType === 'post'

  useMetadata({ 
    title: 
      currContent?.isEdit && currContent ? `${isPost ? currContent.title : 'Comment'} ändern` :
      draftID && currContent ? `${isPost ? currContent.title : 'Entwurf'} ändern` :
      'Neue post schreiben',
    description: 'Hier kannst neue post oder entwurfe schreiben oder ändern.'
  })

  const key: string = currContent?.isFromAdmin ? '' : currContent?.contentType === 'comment' ? `post-${currContent.onPost}-comments-${currContent.onPage}` : 'all-posts'
  
  const { mutate, isMutating, error } = useMutate<PostCommentsData | Content[]>(key)
  const { submit, reset, register, formState: { errors }} = useForm<Content>(
    USE_FORM_VALIDATION, 
    { title: currContent?.title, isHidden: currContent?.isHidden },
    () => {
      postTagsRef.current?.clear()
      postContentRef.current?.clear()
    }
  )

  const passError: ServerResponseError | undefined = error ? error : currContent?.isEdit && !currContent ? { code: 404, message: 'Content not found!' } : undefined
    
  const createNew = async(data: any): Promise<void> => {
    delete data.alt
    delete data.uploadImg
    delete data.url

    mutate(async function(option) {
      if(currContent?.isEdit) {
        const updated = await fetcher.post<Content>(`/admin/${currContent?.contentType}/update`, {...data, content: postContentRef.current?.value, tags: postTagsRef.current?.value, id: draftID || contentID }, AUTHORIZATION_OBJECT)

        localStorage.remove(updated._id!)

        //Edit post
        if(currContent?.contentType === 'post') {
          const state = option.state as Content[] || []

          option.removeCache(`post-${updated._id}`)

          if(!currContent.isFromAdmin) redirect(`/post/${updated._id}`)
          else redirect(`/admin/${currContent.contentType}`)

          return state.map(post => post._id === updated._id ? updated : post)
        }
        
        //Edit comment
        if(currContent?.contentType === 'comment') {
          const state = option.state as PostCommentsData || { pagesCount: 0, comments: [] }

          if(!currContent.isFromAdmin) {
            redirect(`/post/${currContent?.onPost}?page=${currContent?.onPage}`)
            return {...state, comments: state.comments.map(comment => comment._id === updated._id ? updated : comment) }
          }

          redirect('/admin/comment')
          return undefined
        }
      }

      //Insert post
      const post = await fetcher.post<Content>(`/insert/post`, {...data, content: postContentRef.current?.value, tags: postTagsRef.current?.value }, AUTHORIZATION_OBJECT)
      const state = option.state as Content[] || []

      redirect(`/post/${post._id}`)
      return [...state || [], post]
    })

    reset()
  }

  const saveDraft = (): void => {
    const newDraftID: string = draftID || contentID || window.crypto.randomUUID()
      
    dispatch(editOrinsertContentDraft({...currContent, _id: newDraftID!, content: postContentRef.current?.value || '' }))
      
    searchParams.set({ 'draft-id': newDraftID })
    searchParams.remove(['content-id'])

    localStorage.remove(contentID!)
  }

  const deleteDraft = (): void => {
    dispatch(removeContentDraft(draftID || contentID!))

    searchParams.remove(['draft-id'])
    reset()
  }

  return(
    <Fragment>
      {isMutating && <MutatingLoader/>}
      {auth.isAuthPending ?
        <WriteNewLoader/> :
        <div className={`${scss.create_new_post_container} flex-row-normal-center-big`}>
          <FormWrapper className={scss.create_new_post_form} onSubmit={submit(createNew)} isPending={false}>
              {currContent?.contentType !== 'comment' ?
              <Fragment>
                <TextInput register={register} name='title' errors={errors} placeholder='Post title'/>
                <CheckBoxInput register={register} name='isHidden' label='Hidde post'/>
                <TextTagInput ref={postTagsRef} placeholder='Post tags' value={currContent?.tags}/>
              </Fragment> : null}
            <TextArea ref={postContentRef} defaultValue={currContent?.content} placeholder='Write content body here...'/>
            <div className={scss.create_new_buttons_container}>
              <Button label={currContent?.isEdit ? `Edit ${currContent?.contentType}` : `Create post`} type='submit'/>
              <Button label={currContent && !contentID ? "Save draft changes" : 'Save as draft'} onClick={saveDraft}/>
              <Button label="Delete draft" onClick={deleteDraft}/>
            </div>
            {passError && <LocalError error={passError.message}/>}
          </FormWrapper>
      </div>}
    </Fragment>
  )
}