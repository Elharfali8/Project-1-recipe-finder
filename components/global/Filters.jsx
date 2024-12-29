import React from 'react'
import SelectInput from './SelectInput'
import CategoriesSelect from './CategoriesSelect'
import CuisineSelect from './CuisineSelect'
import DietsSelect from './DietsSelect'
import SortSelect from './SortSelect'

const Filters = () => {


  return (
      <div className='p-3 rounded-lg border shadow grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Categories */}
          <CategoriesSelect />
          {/* Cuisine */}
      <CuisineSelect />
      {/* Diets */}
      <DietsSelect />
      {/* Sort */}
      <SortSelect />
      {/* Search */}
      <div className='flex items-end '>
        <button type="button" className='bg-green-500 text-white transition-all ease-in-out duration-150 hover:bg-green-600 capitalize text-lg poppins-medium tracking-wide h-[43px] w-full rounded'>search</button>
      </div>
      {/* Reset */}
      <div className='flex items-end '>
        <button type="button" className='bg-red-500 text-white transition-all ease-in-out duration-150 hover:bg-red-600 capitalize text-lg poppins-medium tracking-wide h-[43px] w-full rounded'>reset</button>
      </div>
    </div>
  )
}

export default Filters