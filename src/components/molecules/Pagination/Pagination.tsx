import React from "react"
import Button from "@/components/atoms/Button"
import { PaginationProps } from "./Pagination.d"


const Pagination: React.FC<PaginationProps> = ({ currentPage, loadMore }) => (
  <div>
    <Button onClick={() => loadMore(currentPage)}>Load More</Button>
  </div>
)

export default Pagination
