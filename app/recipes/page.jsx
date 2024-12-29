'use client'
import Filters from '@/components/global/Filters'
import { SearchInput } from '@/components/global/SearchInput'
import React, { useEffect, useState } from 'react'

const RecipesPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    

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
          </div>
    </main>
  )
}

export default RecipesPage