import type { RefObject } from "react"

export default function reset(inputsMap: Map<string, RefObject<HTMLInputElement>>) {
  const inputsEntries = inputsMap.entries()

  for(let [_, input] of inputsEntries) {
    if(!input) continue

    input.current!.checked = false
    input.current!.value = ''
  }
}