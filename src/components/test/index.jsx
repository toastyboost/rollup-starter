import * as React from 'react'

export const Test = () => {
  const res = {
    a: 1,
    res2: {
      b: 2
    }
  }

  const { res2 } = res

  return <>{JSON.stringify(res2)}</>
}
