import { featuredData } from '@/utils/constants'
import React from 'react'
import { MainCard } from './MainCard'

const GridView = () => {
  return (
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5'>
          {featuredData.map((item) => {
              return <MainCard key={item.id} {...item} />
          })}
    </div>
  )
}

export default GridView