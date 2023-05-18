import React from "react"
import "./Layout.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="assignment-layout">
        {
          // Header
        }
        <div className="flex flex-1 flex-col">
          <main className="flex-1">
            <div className="py-6">{children}</div>
          </main>
        </div>
        {
          // Footer
        }
      </div>
    </>
  )
}
