'use client'


const DropDownLogout = ({ isDropdownOpen, handleLogout }) => {
  return (
    <div
          className={` shadow-lg
        fixed  top-[95px] right-4 w-full max-w-[200px] p-2 rounded-lg 
        dropdown transition-all duration-300 ease-in-out transform 
        ${isDropdownOpen ? 'translate-y-0 opacity-100 z-[90]' : '-translate-y-5 opacity-0 z-[0]'}
      `}
    >
      
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
