import React from 'react'

const SectionTitle = ({title}) => {
  return (
      <div className='grid place-items-center mb-8 lg:mb-10'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl poppins-semibold tracking-wide  
            capitalize'>
              {title}
          </h1>
    </div>
  )
}

export default SectionTitle