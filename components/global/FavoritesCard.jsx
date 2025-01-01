'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { FaTrash } from "react-icons/fa6"

export function FavoritesCard({id, title, desc, img}) {
    
    return (
      <Link href={`/recipes/${id}`} className="relative">
        <Card
          className="h-[300px] relative overflow-hidden shadow-md rounded-lg group"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60"></div>

          {/* Content */}
          <CardContent className="absolute bottom-0 right-0 left-0 bg-[rgba(1,1,1,0.5)]  z-10 p-4 text-white">
                    <CardTitle className="text-lg lg:text-xl font-bold">{title}</CardTitle>
                <CardDescription className="text-sm mt-2 text-slate-300">
                {desc}
                </CardDescription>
          </CardContent>
        </Card>
        <button type="button" className="absolute top-2 right-2 p-1 flex items-center gap-x-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg poppins-medium">
        Delete <FaTrash /> 
        </button>
      </Link>
    )
}