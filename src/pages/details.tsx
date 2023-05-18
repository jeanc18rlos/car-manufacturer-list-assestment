// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, HeadFC } from "gatsby"

import Layout from "@/components/organisms/Layout/Layout"
import Seo from "@/components/atoms/Seo/seo"

import { useManufacturers } from "@/hooks/useManufacturers"
import ManufacturerCard from "@/components/organisms/ManufacturerCard/ManufacturerCard"

const ManufacturerDetailsPage: React.FC<PageProps> = ({ location }) => {
  const { manufacturers, getModels, getManufacturerDetails } =
    useManufacturers()

  React.useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search)
      const manufacturerId = Number(params.get("manufacturerId"))

      if (manufacturerId) {
        getManufacturerDetails(manufacturerId)
        getModels(manufacturerId)
      }
    }
  }, [])
  return (
    <Layout>
      <>
        {manufacturers.selectedManufacturer &&
          manufacturers.modelsBySelectedManufacturer && (
            <ManufacturerCard {...manufacturers} />
          )}
      </>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Details" />

export default ManufacturerDetailsPage
