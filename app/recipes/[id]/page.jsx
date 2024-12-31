'use client';

import BreadCrumb from '@/components/global/BreadCrumb';
import { singleItem } from '@/utils/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const SingleRecipePage = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const sanitizeSummary = (summary) => {
        // Replace <b> with <strong>, <a> with styled links, and remove <br>
        return summary
          .replace(/<b>/g, '<strong>')
          .replace(/<\/b>/g, '</strong>')
          .replace(/<a href="(.*?)">(.*?)<\/a>/g, '<a href="$1" class="text-blue-500 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">$2</a>')
          .replace(/<br\s*\/?>/g, '');
      };

  const {
    id,
    image,
    title,
    sourceName,
    summary,
    servings,
    readyInMinutes,
    healthScore,
    dishTypes,
    extendedIngredients,
  } = singleItem;

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <main className="mt-20 min-h-[calc(100vh-80px)]">
      <div className="container main-container py-8 lg:py-12">
        <BreadCrumb />
        <div className="mt-8 lg:mt-12 grid lg:grid-cols-2 gap-6 place-content-center">
          {/* Image Section */}
          <div className="grid place-items-center">
            <Image
              src={image}
              alt={title}
              width={400}
              height={800}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="place-content-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl poppins-semibold mb-2">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 poppins-medium dark:text-gray-300 mb-3 lg:mb-4">
              {sourceName}
            </p>
            

            {/* Favorite and Details */}
            <div className="flex items-center gap-4 mb-6 ">
              <button
                onClick={toggleFavorite}
                className="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 border rounded px-2 border-yellow-500 "
              >
                {isFavorite ? (
                  <FaStar size={22} className="text-yellow-500" />
                ) : (
                  <FaRegStar size={22} />
                )}
                <span className='text-lg'>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
              </button>
            </div>

            {/* Recipe Details */}
            <div className="space-y-2">
              <p>
                <strong>Servings:</strong> {servings}
              </p>
              <p>
                <strong>Ready in:</strong> {readyInMinutes} minutes
              </p>
              <p>
                <strong>Health Score:</strong> {healthScore}
              </p>
              <p>
                <strong>Dish Types:</strong> {dishTypes.join(', ') || 'N/A'}
              </p>
            </div>
          </div>
        </div>

              <div className='my-12 w-full h-[2px] bg-black dark:bg-white' />
              
              {/* Ingredients Section */}
              <div className='grid md:grid-cols-2  gap-6'>
                  <div className=''>
          <h2 className="text-2xl lg:text-3xl poppins-semibold mb-4">Summary</h2>
                      
              <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: sanitizeSummary(summary) }}
            />
                  </div>
        <div className="">
          <h2 className="text-2xl lg:text-3xl poppins-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {extendedIngredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} {ingredient.unit} {ingredient.name}
                {ingredient.meta.length > 0 && ` (${ingredient.meta.join(', ')})`}
              </li>
            ))}
          </ul>
              </div>
             </div>
              
      </div>
    </main>
  );
};

export default SingleRecipePage;
