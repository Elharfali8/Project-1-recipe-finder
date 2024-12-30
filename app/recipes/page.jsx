'use client'
import Filters from '@/components/global/Filters'
import GridView from '@/components/global/GridView'
import { SearchInput } from '@/components/global/SearchInput'
import { singleItem } from '@/utils/constants'
import React, { useEffect, useState } from 'react'

const RecipesPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    
    console.log(singleItem.title);
    

    const handleSearch = () => {
        setSearchQuery(searchTerm)
    }
    
    useEffect(() => {
        // Get the search query from the URL
        const query = new URLSearchParams(window.location.search).get('query')
        setSearchTerm(query || '')
    }, [])
    
    console.log(searchTerm);
    

  return (
      <main className='mt-20 min-h-[calc(100vh-80px)]'>
          <div className="container main-container py-8 lg:py-10">
              <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
              <div className='mt-3 lg:mt-5'>
                  <Filters />
              </div>
              <div className='py-4 lg:py-8 '>
                  <GridView />
                  <GridView />
                  <GridView />
                  <div className='mt-4 lg:mt-8 flex items-center justify-end'>
                      <button type='button' className='px-8 py-2 rounded-lg capitalize text-lg poppins-medium tracking-wide bg-gray-200 transition-all ease-in-out duration-150 hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-700'>
                          see more
                    </button>
                  </div>
              </div>
          </div>
    </main>
  )
}

export default RecipesPage