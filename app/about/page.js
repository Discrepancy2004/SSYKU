"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Award, Users, Target, Heart, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import DarkVeil from "@/components/DarkVeil/DarkVeil"
import FadeContent from "@/components/FadeContent/FadeContent"
import ChromaGrid from "@/components/ChromaGrid/ChromaGrid"

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
]

export default function AboutPage() {
  return (
    <div className='relative min-h-screen'>
      {/* DarkVeil Background */}
      <div className='fixed inset-0 z-0 w-screen h-screen'>
        <DarkVeil
          hueShift={37}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={2}
          scanlineFrequency={0.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col min-h-screen'>
        <Navbar activePage='about' />

        <main className='flex-1'>
          <FadeContent
            blur={true}
            duration={500}
            easing='ease-out'
            initialOpacity={0}
          >
            {/* Hero Section */}
            <section className='w-full py-12 md:py-24 lg:py-32'>
              <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
                <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
                  <div className='flex flex-col justify-center space-y-4'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg'>
                      About SSYKU Tech
                    </h1>
                    <p className='max-w-[600px] text-gray-200 md:text-xl drop-shadow-lg'>
                      Leading the future of medical technology with innovative
                      solutions that save lives and improve patient care in
                      hospitals worldwide.
                    </p>
                  </div>
                  <Image
                    src='/placeholder.svg?height=400&width=600'
                    width='600'
                    height='400'
                    alt='SSYKU Tech Team'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover bg-white/10'
                  />
                </div>
              </div>
            </section>
          </FadeContent>

          {/* Mission Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
                <Image
                  src='/placeholder.svg?height=400&width=600'
                  width='600'
                  height='400'
                  alt='Our Mission'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover bg-white/10'
                />
                <div className='flex flex-col justify-center space-y-4'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-white drop-shadow-lg'>
                    Our Mission
                  </h2>
                  <p className='text-gray-200 md:text-lg drop-shadow-lg'>
                    At SSYKU Tech, we are dedicated to revolutionizing
                    healthcare through cutting-edge medical technology. Our
                    mission is to provide hospitals with reliable, innovative
                    solutions that enhance patient care, improve operational
                    efficiency, and support medical professionals in their
                    critical work.
                  </p>
                  <p className='text-gray-200 md:text-lg drop-shadow-lg'>
                    We believe that advanced technology should be accessible,
                    intuitive, and most importantly, reliable when lives are at
                    stake. Every product we develop undergoes rigorous testing
                    and meets the highest industry standards for medical
                    equipment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg'>
                  Our Core Values
                </h2>
                <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed drop-shadow-lg'>
                  The principles that guide everything we do at SSYKU Tech.
                </p>
              </div>
              <div className='grid gap-6 lg:grid-cols-4'>
                <Card className='text-center bg-white/10 shadow-lg'>
                  <CardHeader>
                    <Award className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-200'>
                      We strive for excellence in every product, service, and
                      interaction, ensuring the highest quality standards in
                      medical technology.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='text-center bg-white/10 shadow-lg'>
                  <CardHeader>
                    <Users className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-200'>
                      We work closely with healthcare professionals to
                      understand their needs and develop solutions that truly
                      make a difference.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='text-center bg-white/10 shadow-lg'>
                  <CardHeader>
                    <Target className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-200'>
                      We continuously push the boundaries of what's possible in
                      medical technology, always looking for better ways to
                      serve healthcare providers.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='text-center bg-white/10 shadow-lg'>
                  <CardHeader>
                    <Heart className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-gray-200'>
                      At the heart of everything we do is a deep commitment to
                      improving patient care and supporting those who provide
                      it.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg'>
                  Our Journey
                </h2>
                <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed drop-shadow-lg'>
                  From humble beginnings to industry leadership in medical
                  technology.
                </p>
              </div>
              <div className='space-y-12'>
                <div className='grid gap-6 lg:grid-cols-2 items-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-white mb-4 drop-shadow-lg'>
                      Our Beginning
                    </h3>
                    <p className='text-gray-200 mb-4 drop-shadow-lg'>
                      Founded in 2010, SSYKU Tech started with a simple mission:
                      to make medical technology more accessible and reliable
                      for healthcare providers. Our first product was a basic
                      control panel for operating rooms.
                    </p>
                    <p className='text-gray-200 drop-shadow-lg'>
                      From day one, we focused on understanding the real needs
                      of medical professionals and developing solutions that
                      would truly improve patient care outcomes.
                    </p>
                  </div>
                  <Image
                    src='/placeholder.svg?height=300&width=500'
                    width='500'
                    height='300'
                    alt='Our Beginning'
                    className='rounded-xl object-cover bg-white/10'
                  />
                </div>
                <div className='grid gap-6 lg:grid-cols-2 items-center'>
                  <Image
                    src='/placeholder.svg?height=300&width=500'
                    width='500'
                    height='300'
                    alt='Today'
                    className='rounded-xl object-cover lg:order-first bg-white/10'
                  />
                  <div>
                    <h3 className='text-2xl font-bold text-white mb-4 drop-shadow-lg'>
                      Today
                    </h3>
                    <p className='text-gray-200 mb-4 drop-shadow-lg'>
                      Today, SSYKU Tech serves over 500 hospitals across 25
                      countries, providing comprehensive medical technology
                      solutions including surgeon control panels, compressor
                      controllers, and integrated hospital management systems.
                    </p>
                    <p className='text-gray-200 drop-shadow-lg'>
                      Our commitment to innovation and quality has earned us
                      recognition as a trusted partner in the healthcare
                      industry, with a 99.9% customer satisfaction rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='w-full py-12 md:py-24 lg:py-32'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg text-center'>
              Meet The Team
            </h1>
            <p className='max-w-[600px] text-gray-200 md:text-xl drop-shadow-lg text-center mx-auto'>
              We are a team of passionate individuals who are dedicated to
              making a difference in the world.
            </p>

            <div
              style={{
                height: "clamp(300px, 50vw, 700px)",
                position: "relative",
              }}
            >
              <ChromaGrid
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease='power3.out'
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className='w-full py-6 md:py-12 lg:py-18 '>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-white drop-shadow-lg'>
                    Join Our Mission
                  </h2>
                  <p className='max-w-[600px] text-blue-100 md:text-xl/relaxed drop-shadow-lg'>
                    Partner with SSYKU Tech to bring advanced medical technology
                    to your hospital and improve patient care outcomes.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/contact'>
                    <Button size='lg' variant='secondary' className='shadow-lg'>
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link href='/products'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='text-white border-white hover:bg-white hover:text-blue-600 bg-transparent shadow-lg'
                    >
                      View Our Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className='w-full border-t border-gray-600/30 bg-black/20'>
          <div className='max-w-7xl mx-auto px-4 md:px-6 py-8'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {/* Company Info */}
              <div className='space-y-3'>
                <div className='flex items-center'>
                  <div className='h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-sm'>ST</span>
                  </div>
                  <span className='ml-2 text-xl font-bold text-white'>
                    SSYKU Tech
                  </span>
                </div>
                <p className='text-sm text-gray-300'>
                  Leading provider of advanced medical technology solutions for
                  modern healthcare facilities worldwide.
                </p>
                <div className='flex space-x-4'>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                    </svg>
                  </Link>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
                    </svg>
                  </Link>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-blue-400 transition-colors'
                  >
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className='space-y-3'>
                <h3 className='text-sm font-semibold text-white'>
                  Quick Links
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div className='space-y-3'>
                <h3 className='text-sm font-semibold text-white'>Products</h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Surgeon Control Panels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Compressor Controllers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Monitoring Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Safety Control Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Integration Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className='space-y-3'>
                <h3 className='text-sm font-semibold text-white'>
                  Contact Info
                </h3>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Phone className='h-4 w-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>
                      +1 (800) 779-5883
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Mail className='h-4 w-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>
                      info@ssykutech.com
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='h-4 w-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>
                      Healthcare City, HC 12345
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className='border-t border-gray-600/30 mt-6 pt-6 text-center'>
              <p className='text-xs text-gray-400'>
                © 2025 SSYKU Tech. All rights reserved. Medical solutions for
                modern healthcare.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
