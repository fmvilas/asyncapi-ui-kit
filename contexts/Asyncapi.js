import { createContext, useContext } from 'react'

export const AsyncapiContext = createContext()

export function useAsyncAPI() {
  return useContext(AsyncapiContext)
}