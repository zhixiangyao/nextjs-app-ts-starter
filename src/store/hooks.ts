import { useEffect, useState } from 'react'

/**
 *  Fix Nextjs Error: `Unhandled Runtime Error Error: Text content does not match server-rendered HTML.`
 */
export function useStoreState<T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F) {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}
