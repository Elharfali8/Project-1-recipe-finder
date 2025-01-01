'use client'

import Link from "next/link"
import { FaUserAlt } from "react-icons/fa"


const DropDownLogout = ({ isDropdownOpen, handleLogout }) => {
  return (
    <div
          className={` shadow-lg
        fixed  top-[95px] right-4 w-full max-w-[200px] p-2 rounded-lg 
        dropdown transition-all duration-300 ease-in-out transform 
        ${isDropdownOpen ? 'translate-y-0 opacity-100 z-[90]' : '-translate-y-5 opacity-0 z-[0]'}
      `}
      >
          <div className="mb-2 p-2">
              <Link href={'/profile'} className="text-lg lg:text-xl flex items-center gap-x-1 border-[2px] border-orange-300 p-1 rounded text-orange-600 transition-all ease-in-out duration-150 hover:bg-white dark:text-orange-400 hover:dark:bg-slate-300 hover:dark:text-orange-500">
                <FaUserAlt />  Go to profile
              </Link>
          </div>
      
          <div className="p-2">
          <button
              type='button'
              onClick={handleLogout}
                className="capitalize text-lg md:text-xl transition-all ease-in-out duration-150  hover:bg-white hover:text-black hover:border hover:border-black w-full py-1 rounded poppins-medium tracking-wide bg-gray-600 text-white border dark:bg-gray-800 dark:hover:bg-gray-400"
              >
                LogOut
              </button>
             </div>
    </div>
  )
}

export default DropDownLogout
