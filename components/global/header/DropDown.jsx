'use client'

import { navLinks } from "@/utils/constants"
import Link from "next/link"

const DropDown = ({ isOpen }) => {
  return (
    <div
      className={`
        fixed lg:hidden top-[95px] right-4 w-full max-w-[200px] p-2 rounded-lg 
        dropdown transition-all duration-300 ease-in-out transform 
        ${isOpen ? 'translate-y-0 opacity-100 z-[90]' : '-translate-y-5 opacity-0 z-[0]'}
      `}
    >
      <ul className="grid gap-y-2">
        {navLinks.map((link) => {
          const { id, title, path } = link
          return (
            <li key={id}>
              <Link
                href={path}
                className="capitalize tracking-wide text-lg md:text-xl transition-all ease-in-out duration-150 hover:pl-2"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="my-4 grid place-items-center gap-y-2">
        <Link
          href="/sign-in"
          className="grid place-items-center py-1 w-full rounded-lg button capitalize tracking-wide text-lg"
        >
          signin
        </Link>
        <Link
          href="/sign-up"
          className="grid place-items-center secondary-button py-1 w-full rounded-lg capitalize tracking-wide text-lg"
        >
          login
        </Link>
      </div>
    </div>
  )
}

export default DropDown
