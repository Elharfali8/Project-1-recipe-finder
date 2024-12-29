'use client'
import { motion } from "framer-motion";
import { SearchInput } from "../global/SearchInput";
import Image from "next/image";
import heroImg from '@/images/hero-img.jpg'

const Hero = () => {
  return (
      <hero className='min-h-[calc(100vh-80px)] grid place-items-center mt-20 py-8'>
          <div className="container main-container grid lg:grid-cols-2 place-content-center gap-6">
              {/* ----------------- */}
              <div className=' grid place-content-center'>
                  {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold poppins-bold capitalize mb-3 lg:mb-4"
            >
                <span className="inline-block pb-1 lg:pb-[6px]">discover delicious</span> <br /> <span className="inline-block pb-1 lg:pb-[6px]">recipes</span> <br /> at your fingertips
                  </motion.h1>
                  {/* SUBTITLE */}
                  <p className="text-lg lg:text-xl   mb-6">
                        Find recipes tailored to your tastes, diet, and mood. Ready to cook?
                  </p>
                  {/* Search Input */}
                  <SearchInput />
              </div>
              {/* ----------------- */}
              <div className="hidden lg:flex items-center justify-center ">
                  <div className="shadow-lg rounded-lg">
                  <Image src={heroImg}  alt="hero image" width={700} height={300} className="rounded-lg object-cover " />
                  </div>
              </div>
          </div>
    </hero>
  )
}

export default Hero