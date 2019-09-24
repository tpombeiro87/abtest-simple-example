import React from 'react'

export const initialState = {
  activeAbTests: { a: 123 },
}

const Context = React.createContext(initialState)

export default Context
