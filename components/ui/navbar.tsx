"use client"

import Link from "next/link"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

interface NavbarProps {
  activePage?: "home" | "about" | "products" | "contact"
}

export function Navbar({ activePage = "home" }: NavbarProps) {
  const scrolled = useScroll()

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/80 border-b border-gray-200/60 shadow-lg"
          : "bg-white border-b"
      )}
    >
      <div className='px-4 lg:px-6 h-16 flex items-center max-w-7xl mx-auto w-full'>
        <Link href='/' className='flex items-center justify-center'>
          <div className='h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>ST</span>
          </div>
          <span className='ml-2 text-xl font-bold text-gray-900'>
            SSYKU Tech
          </span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            href='/'
            className={cn(
              "text-sm font-medium transition-colors",
              activePage === "home"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={cn(
              "text-sm font-medium transition-colors",
              activePage === "about"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            About
          </Link>
          <Link
            href='/products'
            className={cn(
              "text-sm font-medium transition-colors",
              activePage === "products"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            Products
          </Link>
          <Link
            href='/contact'
            className={cn(
              "text-sm font-medium transition-colors",
              activePage === "contact"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
