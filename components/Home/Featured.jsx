import React from 'react'
import SectionTitle from '../global/SectionTitle'
import { MainCarousel } from '../MainCarousel'

const Featured = () => {
  return (
      <section className='py-4 lg:py-6 container main-container'>
          <SectionTitle title='featured recipes' />
          <div className="w-full grid place-items-center">
          <MainCarousel />
          </div>
    </section>
  )
}

export default Featured