import React from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"

export const wrapRootElement = ({ element }) => {
  return (
    <IdentityContextProvider url="https://gastby-fauna-stripe.netlify.app">
      {element}
    </IdentityContextProvider>
  )
}
