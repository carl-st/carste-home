import { useState, useEffect } from 'react'

export default function useFetch(url: RequestInfo, options: RequestInit) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()

        setData(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url])

  return { data, error }
}