'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaTimes, FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { navLinks } from "@/utils/constants";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase'; // Import Firebase auth
import { useRouter } from 'next/navigation';

const Navbar = ({isOpen, setIsOpen, setIsDropdownOpen, handleOpen}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null); // To store user info
  const router = useRouter();

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user if logged in
      } else {
        setUser(null); // Set user to null if logged out
      }
    });
    
    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  const handleDrop = () => {
    setIsDropdownOpen((prev) => !prev)
    setIsOpen(false)
  }
  
    
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
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl tracking-wide poppins-bold logo ">Recipe Finder</h1>
        </Link>
        
        <ul className="hidden lg:flex items-center gap-x-3">
          {navLinks.map((link) => {
            const { id, title, path } = link;
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

          <div className="grid place-items-center">
              {user && (
              <button onClick={handleDrop} className="rounded-full p-1 bg-orange-400 text-white">
                <FaUser size={20}  />
              </button>
            )}
          </div>
          
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
            {!user && (
              <>
                <Link href='/sign-up' className="px-5 py-2 rounded-2xl border-[2px] dark:border-[#ea580c] border-[#f97316] text-lg xl:text-xl capitalize tracking-wide">
                  sign up
                </Link>
                <Link href='/login' className="text-lg xl:text-xl capitalize tracking-wide">
                  login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
