'use client'

import { useState } from "react"
import Navbar from "./Navbar"
import DropDown from "./DropDown"
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase'; 
import DropDownLogout from "../DropDownLogout";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const handleOpen = () => {
        setIsOpen((prev) => !prev)
        setIsDropdownOpen(false)
    }
    

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out the user from Firebase
            setIsDropdownOpen(false)
          router.push('/'); // 
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      };

  return (
      <div className="z-[98] ">
          <Navbar isOpen={isOpen} setIsDropdownOpen={setIsDropdownOpen} setIsOpen={setIsOpen} handleOpen={handleOpen} />
          {isOpen && <DropDown isOpen={isOpen} />}
          {isDropdownOpen && (
              <DropDownLogout isDropdownOpen={isDropdownOpen} handleLogout={handleLogout} />
          )}
      </div>
  )
}

export default Header