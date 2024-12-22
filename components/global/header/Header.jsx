'use client'

import { useState } from "react"
import Navbar from "./Navbar"
import DropDown from "./DropDown"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

  return (
      <div className="relative">
          <Navbar isOpen={isOpen} handleOpen={handleOpen} />
          {isOpen && <DropDown isOpen={isOpen} />}
      </div>
  )
}

export default Header