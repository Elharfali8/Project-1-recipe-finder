import React from 'react'
import SectionTitle from '../global/SectionTitle'
import Link from 'next/link';

const CategoriesSection = () => {

    const categories = [
        { id: 1, name: 'Vegetarian', query: 'vegetarian' },
        { id: 2, name: 'Vegan', query: 'vegan' },
        { id: 3, name: 'Desserts', query: 'desserts' },
        { id: 4, name: 'Gluten-Free', query: 'gluten free' },
        { id: 5, name: 'Keto', query: 'keto' },
        { id: 6, name: 'Paleo', query: 'paleo' },
        { id: 7, name: 'Breakfast', query: 'breakfast' },
        { id: 8, name: 'Lunch', query: 'lunch' },
        { id: 9, name: 'Dinner', query: 'dinner' },
        { id: 10, name: 'Snacks', query: 'snacks' }
      ];

  return (
      <section className='py-8 lg:py-10 container main-container'>
          <SectionTitle title='brows by category' />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link href={`/recipes/${category.query}`}
              key={category.id}
              className="relative  rounded-lg overflow-hidden hover:scale-105 shadow-lg"
            >
              <div
                className="w-full h-[100px] bg-cover bg-center group-hover:scale-105 transition-transform"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold  group-hover:opacity-100 transition-opacity">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
    </section>
  )
}

export default CategoriesSection