'use client'
import { sortOptions } from "@/utils/constants"
import { useState } from "react"
import SelectInput from "./SelectInput"

const SortSelect = () => {
    const [selectedSort, setSelectedSort] = useState('' || {id: 0, text: 'All'})

    const handleSortChange = (e) => {
        const value = e.target.value
        setSelectedSort(value)
        console.log(`Selected sort: ${value}`);
    }

  return (
      <>
        <SelectInput data={sortOptions} value={selectedSort} onChange={handleSortChange} label='sort'   />
    </>
  )
}

export default SortSelect