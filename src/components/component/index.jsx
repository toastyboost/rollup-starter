import * as React from 'react'

export const Ctx = React.createContext({ isOpen: false })

export const Component = ({ children, index }) => {
  const [counter, setActiveIndex] = React.useState(index)
  const context = React.useContext(Ctx)

  return (
    <div onClick={() => setActiveIndex(counter + 1)}>
      {children} {counter}
      {JSON.stringify(context)}
    </div>
  )
}
