// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC } from "gatsby"

import Layout from "@/components/organisms/Layout/Layout"
import Seo from "@/components/atoms/Seo/seo"

import { useManufacturers } from "@/hooks/useManufacturers"
import ManufacturerTable from "@/components/organisms/ManufacturerTable"


const data = {
  headers: ["id", "name", "country", "details"],
}

const ManufacturingListPage: React.FC<PageProps> = () => {
  const { manufacturers, getManufacturers } = useManufacturers()

  React.useEffect(() => {
    getManufacturers(0)
  }, [])
  return (
    <Layout>
      <>
        <ManufacturerTable
          manufacturers={manufacturers}
          getManufacturers={getManufacturers}
          headers={data.headers}
        />
      </>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Manufacturing List" />

export default ManufacturingListPage
