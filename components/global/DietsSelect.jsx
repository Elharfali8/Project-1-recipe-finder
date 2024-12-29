'use client'
import { diets } from "@/utils/constants"
import { useState } from "react"
import SelectInput from "./SelectInput"

const DietsSelect = () => {
    const [selectedDiets, setSelectedDiets] = useState('' || {id: 0, text: 'All'})

    const handleDietsChange = (e) => {
        const value = e.target.value
        setSelectedDiets(value)
        console.log(`Selected diets: ${value}`);
    }

  return (
      <>
        <SelectInput data={diets} value={selectedDiets} onChange={handleDietsChange} label='diets'   />
    </>
  )
}

export default DietsSelect