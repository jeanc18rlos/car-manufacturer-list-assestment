import React from "react"
import { render } from "@testing-library/react"
import { Table, TableRow, TableCell } from "./"

describe("Table", () => {
  const headers = ["header1", "header2", "header3"]

  it("renders headers correctly", () => {
    const { getAllByRole } = render(
      <Table headers={headers}>
        <TableRow>
          <TableCell>test</TableCell>
        </TableRow>
      </Table>
    )

    const tableHeaders = getAllByRole("columnheader")
    expect(tableHeaders).toHaveLength(headers.length)

    tableHeaders.forEach((header, index) => {
      expect(header).toHaveTextContent(headers[index])
      expect(header).toHaveClass("assestment-table-heading")
    })
  })
})
