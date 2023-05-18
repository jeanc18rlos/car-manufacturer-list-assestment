import * as React from "react"
import { navigate } from "gatsby"
import Pagination from "@/components/molecules/Pagination"
import Table from "@/components/molecules/Table/Table"
import Button from "@/components/atoms/Button/Button"
import Manufacturer from "@/interfaces/Manufacturer"

const ManufacturerTable = ({
  manufacturers,
  getManufacturers,
  headers,
}: {
  manufacturers: any
  headers: string[]
  getManufacturers: any
}) => {
  const loadMore = (page: number) => {
    getManufacturers(page)
  }

  React.useEffect(() => {
    getManufacturers(manufacturers.currentPage)
  }, [])
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="py-4">
        <div>
          <Table headers={headers}>
            {manufacturers.manufacturers.map((row: Manufacturer) => (
              <tr key={row.id}>
                <td className="assestment-table-cell">{row.id}</td>
                <td className="assestment-table-cell">{row.name}</td>
                <td className="assestment-table-cell">{row.country}</td>
                <td className="assestment-table-cell">
                  <Button
                    onClick={() => {
                      navigate(`/details?manufacturerId=${row.id}`)
                    }}
                    disabled={false}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </Table>
          <br/>
          <Pagination
            currentPage={manufacturers.currentPage}
            loadMore={loadMore}
          />
        </div>
      </div>
    </div>
  )
}

export default ManufacturerTable
