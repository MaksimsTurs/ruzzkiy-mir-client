import scss from './tagPreview.module.scss'
import '@/scss/global.scss'

import type { TagPreviewProps } from './/tagPreview.type.ts'

export default function TagPreview({ removeTag, tags }: TagPreviewProps) {
  return (
    <ul className={`${scss.tag_list} flex-row-flex-start-normal-small`}>
      {tags.map(tag => {
        const toRender: string = tag.replace(/\-\d*/g, '')
        return toRender.trim() ? <li onClick={() => removeTag(tag)} className={scss.tag_item} key={tag}>{toRender}</li> : null
      })}
    </ul>
  )
} 