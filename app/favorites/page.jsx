'use client'

import Link from "next/link"
import { useEffect, useState } from 'react';
import { auth } from '@/firebase'; // Your Firebase config
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { featuredData } from "@/utils/constants";
import { FavoritesCard } from "@/components/global/FavoritesCard";

const page = () => {
    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState(['one', 'two', 'three'])
    const router = useRouter()

    // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, [router]);
    
    if (!user) {
        return (
            <main className='mt-20 min-h-[calc(100vh-80px)] grid place-items-center'>
                <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-4xl poppins-bold mb-3 lg:mb-4">
                Please log in to access your favorites!
                </h1>
                <div className="flex items-center gap-x-3 justify-center">
                    <Link href='/login' className="text-lg lg:text-xl text-blue-800 pb-[1px] border-b-[1px] border-b-blue-800 hover:text-blue-500 hover:border-b-blue-500 dark:text-sky-400 dark:hover:text-sky-300 dark:border-b-sky-400 dark:hover:border-b-sky-300">
                        Login
                        </Link>
                        <span className="px-4 text-lg lg:text-xl">&</span>
                    <Link href='/sign-up' className="text-lg lg:text-xl text-blue-800 pb-[1px] border-b-[1px] border-b-blue-800 hover:text-blue-500 hover:border-b-blue-500 dark:text-sky-400 dark:hover:text-sky-300 dark:border-b-sky-400 dark:hover:border-b-sky-300">
                        Sign up
                    </Link>
                </div>
                </div>
            </main>
        )
    }

  return (
      <main className='mt-20 min-h-[calc(100vh-80px)]'>
          <div className="container main-container">
          <div className="pt-8 lg:pt-12 pb-5 lg:pb-7">
                  <h1 className="poppins-semibold text-lg lg:text-xl">
                      Favorites : <span >{favorites && favorites.length > 1 ? `${favorites.length} items` : `${favorites.length} item`}</span>
               </h1>
              </div>
              <div className="mb-8 lg:mb-12 w-full bg-black dark:bg-gray-300 h-[2px]" />
              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5'>
              {featuredData.map((item) => {
              return <FavoritesCard key={item.id} {...item} />
          })}
              </div>
          </div>
    </main>
  )
}

export default page