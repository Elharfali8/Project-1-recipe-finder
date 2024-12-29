import { Input } from "@/components/ui/input"
import Link from "next/link"

export function SearchInput() {
    return <div className="flex items-center gap-x-1
  ">
        <input
          type="text"
          placeholder="Search for a recipe, ingredient, or cuisine..."
          className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-darkText dark:text-lightText bg-lightBg dark:bg-darkBg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Link href={'#'} className=" px-4 h-[40px] button text-lg poppins-medium tracking-wide grid place-items-center rounded">
            Search
        </Link>
  </div>
}
