'use client'
import { categories } from "@/utils/constants"
import { useState } from "react"
import SelectInput from "./SelectInput"

const CategoriesSelect = () => {
    const [selectedCategory, setSelectedCategory] = useState('' || {id: 0, text: 'All'})

    const handleCategoryChange = (e) => {
        const value = e.target.value
        setSelectedCategory(value)
        console.log(`Selected category: ${value}`);
    }

  return (
      <>
        <SelectInput data={categories} value={selectedCategory} onChange={handleCategoryChange} label='categories'   />
    </>
  )
}

export default CategoriesSelect