import React from 'react'

const APIContext = React.createContext({})

export const APIProvider = APIContext.Provider
export const APIConsumer = APIContext.Consumer
export default APIContext
