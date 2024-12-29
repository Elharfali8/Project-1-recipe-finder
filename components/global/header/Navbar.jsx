'use client'

import { navLinks } from "@/utils/constants"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {  FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = ({isOpen, handleOpen}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
    
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    useEffect(() => {
        document.documentElement.setAttribute(
          'data-theme',
          isDarkMode ? 'dark' : 'light'
        );
      }, [isDarkMode]);

  return (
    <nav className='h-20 w-full grid place-items-center shadow-lg fixed top-0 right-0 left-0 z-[99]'>
      <div className="container main-container flex justify-between items-center ">
      <Link href="/" >
            <h1 className="text-2xl lg:text-3xl tracking-wide poppins-bold logo ">Recipe Finder</h1>
        </Link>
        <ul className="hidden lg:flex items-center gap-x-3">
          {navLinks.map((link) => {
            const { id, title, path } = link
            return (
              <li key={id}>
                <Link href={path} className="capitalize tracking-wide text-lg xl:text-xl">
                  {title}
                </Link>
              </li>
            )
            })}
        </ul>
        <div className="flex items-center gap-x-4 ">
        <motion.div
                onClick={toggleTheme}
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            className="theme-toggle cursor-pointer text-xl "
            >
                {isDarkMode ? "🌙" : "☀️"}
          </motion.div>
          <motion.div
        onClick={handleOpen}
        className="theme-toggle cursor-pointer lg:hidden text-[#fb923c] dark:text-[#ea580c]" 
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }} 
        transition={{ duration: 0.5 }}
      >
        {isOpen ? <FaTimes size={26} /> : <FaBarsStaggered size={26} />}
        </motion.div>
          <div className="hidden lg:flex items-center gap-x-3">
            <Link href='/sign-in' className="px-5 py-2 rounded-2xl border-[2px] dark:border-[#ea580c] border-[#f97316] text-lg xl:text-xl capitalize tracking-wide">
                signin
              </Link>
              <Link href='/sign-up' className="text-lg xl:text-xl capitalize tracking-wide">
                login
            </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar