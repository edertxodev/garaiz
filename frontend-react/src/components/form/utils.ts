import { FieldErrors } from 'react-hook-form'
import DefaultRequestParams from 'api/DefaultRequestParams'
import axios, { AxiosResponse } from 'axios'

interface FormError {
  key: string
  params?: any
  message?: string
}

export const handleError = (name: string, errors: FieldErrors) => {
  const parsedErrors = JSON.parse(JSON.stringify(errors))
  const parsedFieldName = name.split('.')[1]
  if (parsedErrors['data'] && Object.keys(parsedErrors['data']).length > 0 && parsedErrors['data'][parsedFieldName]) {
    return parseFormErrorMessage(parsedErrors['data'][parsedFieldName]?.message?.toString())
  } else if (parsedErrors[name]) {
    return parseFormErrorMessage(parsedErrors[name]?.message?.toString())
  }

  return undefined
}

// Returns translation key for Form errors
export const parseFormErrorMessage = (message?: string): FormError => {
  const error = { key: message ?? '', params: {} }
  if (message?.includes('required') || message?.includes('must be defined')) {
    error.key = 'required'
  } else if (message?.includes('valid email')) {
    error.key = 'valid.email'
  } else if (message?.includes('must be unique')) {
    error.key = 'unique'
  } else if (message?.includes('must be at least')) {
    const number = message.replace(/\D/g, '')
    error.params = { number }
    error.key = 'minLength'
  }

  return error
}

// Upload files to the API
export const uploadFiles = async (files?: FileList | null): Promise<Promise<AxiosResponse> | undefined> => {
  if (files) {
    const formData = new FormData()
    Array.from(files).forEach((file) => {
      formData.append('files', file)
    })

    return axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formData, await DefaultRequestParams())
  }
}

export type { FormError }
