import React from "react"
import { Provider } from "react-redux"
import store from "@/store"
import Layout from "@/components/organisms/Layout/Layout"

export function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  )
}
