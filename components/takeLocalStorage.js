import { useEffect, useState } from 'react'

const PREFIX = 'Chat-'

export default function useLocalStorage(key) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
   return (jsonValue)

  })

  useEffect(() => {
    localStorage.setItem(prefixedKey,value)
  }, [prefixedKey, value ])



  return [value, setValue]
}