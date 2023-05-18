import React from "react"
import "./index.css"
import { TableProps } from "./"


export const Table: React.FC<TableProps> = ({ headers, children }) => (
  <table className="assestment-table">
    <thead className="assestment-table-head">
      <tr>
        {headers.map((header, i) => (
          <th scope="col" className="assestment-table-heading" key={i}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="assestment-table-body">{children}</tbody>
  </table>
)

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="assestment-table-row">{children}</tr>
)

export const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="assestment-table-cell">{children}</td>
)

export default Table
