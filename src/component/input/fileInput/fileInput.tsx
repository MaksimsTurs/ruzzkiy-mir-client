import scss from './fileInput.module.scss'
import '@/scss/global.scss'

import type { FileInputProps } from '../input.type'

import { FileImage, Pencil, X } from 'lucide-react'
import { Fragment, type SyntheticEvent, useRef, useState } from 'react'

export default function FileInput({ name, label, asset, value, supportedFormats, className, register }: FileInputProps) {
  const [uploadedAsset, setUploadedAsset] = useState<string | undefined>(value)

  const isVideo = useRef<boolean>(false)

  const supportedExtentions: string[] = supportedFormats || ['image/webp', 'image/jpg', 'image/png', 'image/jpeg']

  const upload = (event: SyntheticEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files![0]

    if(file.type.search('video') > -1) isVideo.current = true
    else isVideo.current = false

    if(!supportedExtentions.includes(file.type)) return

    setUploadedAsset(URL.createObjectURL(file))

    if(asset) asset.current = file
  }

  const removeAsset = (): void => {
    setUploadedAsset(undefined)
    if(asset) asset.current = undefined
  }

  return(
    <Fragment>
      <input accept={supportedExtentions.join(',')} id={name} name={name} type='file' onInput={upload} {...register?.(name)}/>
      {!uploadedAsset ? 
        <label className={`${scss.file_input_label} ${className}`} htmlFor={name}>
          <section className={scss.file_input_text}><FileImage /><p>{label}</p></section>
        </label> :
        <div className={`${scss.file_input_label} ${className}`}>
          {isVideo.current ? <video className={scss.file_input_uploaded_asset} src={uploadedAsset}/> : <img className={scss.file_input_uploaded_asset} src={uploadedAsset} alt="User uploaded avatar" />}
          <section className={`${scss.asset_input_buttons} flex-column-normal-normal-medium`}>
            <button className={`${scss.asset_button} flex-row-center-center-none`} type='button' onClick={removeAsset}><X/></button>
            <label className={`${scss.asset_button} flex-row-center-center-none`} htmlFor={name}><Pencil/></label>
          </section>
        </div>}
    </Fragment>
  )
}