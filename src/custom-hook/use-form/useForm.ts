import type { FormFieldsRegisterReturn, FormFieldsValidation, FormFieldsValues, FormState } from "./useForm.type";
import type { LegacyRef, RefObject, SyntheticEvent } from "react";
import type { KeyValueObject } from "@/global.type";

import { createRef, useRef, useState } from "react";

import formValidator from "./tool/formValidator";
import form from "./form";

export default function useForm<T, R = any>(validation?: FormFieldsValidation<T>, defaultValue?: FormFieldsValues<T, R>) {
  let isSubmited = useRef<boolean>(false)
  let isResetButtonPressed = useRef<boolean>(false)
  
  const inputsRefs = useRef<Map<string, RefObject<HTMLInputElement>>>(new Map())

  const [formState, setFormState] = useState<FormState>({ errors: undefined })

  const formValues = useRef<KeyValueObject<any>>(defaultValue || {})

  function reset(): void {
    isResetButtonPressed.current = true
    setFormState({})
    form.reset(inputsRefs.current)
    formValues.current = {}
  }

  function setError(name: string, message?: string) {
    setFormState(prev => ({...prev, errors: {...prev.errors, [name]: message }}))
  }

  function register(name: string): FormFieldsRegisterReturn {
    if(!inputsRefs.current.has(name)) inputsRefs.current.set(name, createRef())
    
    return { 
      name, 
      ref: inputsRefs.current.get(name) as LegacyRef<HTMLInputElement>,
      onChange: (event: any) => {
        const type = event.target.type

        if(type === 'checkbox') formValues.current[name] = event.target.checked || false
        else if(type === 'file') formValues.current[name] = event.target.files
        else formValues.current[name] = event.target.value
      }
    }
  }

  function submit(target: (data: T) => any): any {
    return new Proxy(target, {
      apply: function(target, _, argArray) {
        isSubmited.current = true
        const event = argArray[0] as SyntheticEvent<HTMLFormElement>

        let validationResult: KeyValueObject | undefined

        event.preventDefault()

        validationResult = formValidator<T>(formValues.current, validation)
        
        if(!validationResult) return target(formValues.current as T)

        setFormState(prev => ({...prev, errors: validationResult }))

        if(Object.values(validationResult).filter(Boolean).length === 0) {
          new Promise((resolve) => resolve(target(formValues.current as T)))
            .finally(() => {
              isResetButtonPressed.current = false
              isSubmited.current = false
            })
        }
      }
    })
  }

  return { submit, reset, setError, register, formState }
}