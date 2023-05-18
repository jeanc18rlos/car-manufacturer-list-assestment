import React from "react"
import "./src/styles/index.css"
import { AppContainer } from "./src/containers/appContainer"

export const wrapRootElement = ({ element }) => {
    return <AppContainer> {element}</AppContainer>
  }
  