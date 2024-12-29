'use client'
import { cuisines } from "@/utils/constants"
import { useState } from "react"
import SelectInput from "./SelectInput"

const CuisineSelect = () => {
    const [selectedCuisine, setSelectedCuisine] = useState('' || {id: 0, text: 'All'})

    const handleCuisineChange = (e) => {
        const value = e.target.value
        setSelectedCuisine(value)
        console.log(`Selected cuisine: ${value}`);
    }

  return (
      <>
        <SelectInput data={cuisines} value={selectedCuisine} onChange={handleCuisineChange} label='cuisines'   />
    </>
  )
}

export default CuisineSelect