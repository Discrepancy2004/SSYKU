"use client"

import Link from "next/link"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
interface NavbarProps {
  activePage?: "home" | "about" | "products" | "contact"
}

export function Navbar({ activePage = "home" }: NavbarProps) {
  const scrolled = useScroll()
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element)?.closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  const productLinks = [
    {
      href: "/panel",
      label: "Surgeon Control Panel",
    },
    { href: "/alarm", label: "Smart Medical Gas Area Alarm" },
    { href: "/dewpoint", label: "Dew Point Monitor" },
    { href: "/autochangeover", label: "Auto Change Over Unit" },
    { href: "/products", label: "IAQ" },
    { href: "/massflow", label: "Mass Flow Monitor" },
  ]
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
          <Image
            src='/logo2.jpeg'
            alt='SSYKU Tech Logo'
            width={75}
            height={75}
            className='rounded-lg'
          />
          <span className='inline-block w-2' />

          <h1 className='font-exo2 text-4xl  text-black'>
            SSYKU <span className='text-black'>Tech</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <nav className='ml-auto hidden md:flex gap-4 sm:gap-6'>
          <Link
            href='/'
            className='text-sm font-medium hover:text-blue-600 transition-colors'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-sm font-medium hover:text-blue-600 transition-colors'
          >
            About
          </Link>
          <div className='relative group'>
            <Link
              href='/products'
              className='text-sm font-medium hover:text-blue-600 transition-colors flex items-center'
            >
              Products
              <svg
                className='ml-1 h-3 w-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </Link>
            {/* Desktop Dropdown Menu */}
            <div className='absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
              <div className='py-2'>
                {productLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href='/contact'
            className='text-sm font-medium hover:text-blue-600 transition-colors'
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='ml-auto md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors mobile-menu-container'
          aria-label='Toggle mobile menu'
        >
          {isMobileMenuOpen ? (
            <X className='h-5 w-5' />
          ) : (
            <Menu className='h-5 w-5' />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden mobile-menu-container'>
            <nav className='px-4 py-2 space-y-1'>
              <Link
                href='/'
                className='block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Products Section */}
              <div className='py-1'>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className='flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>

                {/* Mobile Products Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isProductsOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className='pl-4 py-2 space-y-1 bg-gray-50 rounded-md mt-1'>
                    {productLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className='block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors'
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsProductsOpen(false)
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href='/contact'
                className='block py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
