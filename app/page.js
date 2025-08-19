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
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import DarkVeil from "@/components/DarkVeil/DarkVeil"
import { useState, useEffect } from "react"
import { Carousel } from "@/components/ui/gallery"

export default function HomePage() {
  const galleryItems = [
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Operating Room Control Panel",
      title: "Precision Control in Surgery",
      description:
        "Our surgeon control panels provide intuitive, sterile operation of OR lighting, HVAC, and imaging systems, allowing medical teams to focus entirely on patient care.",
      link: "/panel",
    },
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Medical Air Compressor System",
      title: "Reliable Medical Air Systems",
      description:
        "Advanced compressor controllers ensure consistent pressure levels and energy-efficient operation for critical medical air and vacuum systems throughout your facility.",
      link: "/products",
    },
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Hospital Monitoring Dashboard",
      title: "Real-Time System Monitoring",
      description:
        "Comprehensive monitoring solutions provide 24/7 oversight of all medical systems with predictive maintenance alerts and automated reporting capabilities.",
      link: "/products",
    },
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Medical Equipment Integration",
      title: "Seamless System Integration",
      description:
        "Our integration services connect all your medical equipment into unified control systems, improving workflow efficiency and reducing operational complexity.",
      link: "/contact",
    },
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Operating Room Control Panel",
      title: "Precision Control in Surgery",
      description:
        "Our surgeon control panels provide intuitive, sterile operation of OR lighting, HVAC, and imaging systems, allowing medical teams to focus entirely on patient care.",
      link: "/contact",
    },
    {
      image:
        "/placeholder.svg?height=400&width=600&text=Operating Room Control Panel",
      title: "Precision Control in Surgery",
      description:
        "Our surgeon control panels provide intuitive, sterile operation of OR lighting, HVAC, and imaging systems, allowing medical teams to focus entirely on patient care.",
      link: "/contact",
    },
  ]
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate gallery every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [galleryItems.length, isPaused])

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
        <Navbar activePage='home' />

        <main className='flex-1'>
          {/* Hero Section */}
          <section className='w-full py-8 md:py-12 lg:py-16'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='text-center space-y-6 mb-8'>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-xl max-w-5xl mx-auto leading-tight'>
                  Advanced Medical Solutions for Modern Hospitals
                </h1>
                <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
                  <Card
                    className='overflow-hidden border-2 shadow-xl bg-white/90 backdrop-blur-sm'
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className='grid gap-0 lg:grid-cols-2'>
                      <div className='relative h-48 md:h-64 lg:h-80'>
                        <div className='relative w-full h-full'>
                          {galleryItems.map((item, index) => (
                            <Image
                              key={index}
                              src={item.image || "/placeholder.svg"}
                              width='600'
                              height='400'
                              alt={item.title}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                index === currentSlide
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            />
                          ))}
                        </div>
                        {/* Slide indicators */}
                        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                          {galleryItems.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentSlide
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className='p-6 md:p-8 lg:p-12 flex flex-col justify-center'>
                        <div className='space-y-4'>
                          <h3 className='text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-700 ease-in-out'>
                            {galleryItems[currentSlide].title}
                          </h3>
                          <p className='text-gray-600 md:text-lg leading-relaxed transition-all duration-700 ease-in-out'>
                            {galleryItems[currentSlide].description}
                          </p>

                          <div className='flex flex-wrap gap-3 pt-4 justify-center'>
                            <Link href={galleryItems[currentSlide].link}>
                              <Button className='bg-blue-600 hover:bg-blue-700'>
                                Learn More
                                <ArrowRight className='ml-2 h-4 w-4' />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
                  <Link href='/products'>
                    <Button
                      size='lg'
                      className='bg-blue-600 hover:bg-blue-700 shadow-lg text-lg px-8 py-6 w-full sm:w-auto'
                    >
                      View All Our Products
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </Button>
                  </Link>
                  <Link href='/contact'>
                    <Button
                      variant='outline'
                      size='lg'
                      className='bg-white/60 text-gray-800 border-gray-300 hover:bg-white hover:text-gray-900 shadow-lg text-lg px-8 py-6 w-full sm:w-auto'
                    >
                      Get Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className='relative overflow-hidden w-full h-full py-20'>
            <Carousel slides={slideData} />
          </div>

          {/* Features Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg'>
                    Why Choose SSYKU Tech?
                  </h2>
                  <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-lg'>
                    We specialize in delivering reliable, innovative medical
                    technology solutions that enhance patient care and
                    streamline hospital operations.
                  </p>
                </div>
              </div>
              <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
                <Card className='border-2 hover:border-blue-200 transition-colors bg-white/10 shadow-lg'>
                  <CardHeader className='text-center'>
                    <Shield className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>
                      Medical Grade Reliability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-center text-gray-200'>
                      All our systems meet strict medical industry standards
                      with 99.9% uptime guarantee for critical hospital
                      operations.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='border-2 hover:border-blue-200 transition-colors bg-white/10 shadow-lg'>
                  <CardHeader className='text-center'>
                    <Zap className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>
                      Advanced Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-center text-gray-200'>
                      Cutting-edge control systems with intuitive interfaces
                      designed specifically for medical professionals and
                      hospital environments.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className='border-2 hover:border-blue-200 transition-colors bg-white/10 shadow-lg'>
                  <CardHeader className='text-center'>
                    <Users className='h-12 w-12 mx-auto text-blue-400 mb-4' />
                    <CardTitle className='text-white'>Expert Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-center text-gray-200'>
                      24/7 technical support from our team of medical technology
                      specialists with rapid response times for critical issues.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Products Preview */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg'>
                  Our Medical Solutions
                </h2>
                <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed drop-shadow-lg'>
                  Comprehensive medical technology solutions designed for modern
                  healthcare facilities.
                </p>
              </div>
              <div className='grid gap-6 lg:grid-cols-2'>
                <Card className='bg-white/10 shadow-lg'>
                  <CardHeader>
                    <CardTitle className='text-xl text-white'>
                      Surgeon Control Panels
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Advanced control systems for operating rooms with
                      intuitive touch interfaces.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src='/placeholder.svg?height=200&width=400'
                      width='400'
                      height='200'
                      alt='Surgeon Control Panel'
                      className='w-full h-48 object-cover rounded-lg mb-4 shadow-md bg-white/10'
                    />
                    <ul className='space-y-2'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Sterile operation capability
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Real-time monitoring
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Emergency protocols
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className='bg-white/10 shadow-lg'>
                  <CardHeader>
                    <CardTitle className='text-xl text-white'>
                      Compressor Controllers
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Intelligent medical air and vacuum system controllers for
                      hospitals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src='/placeholder.svg?height=200&width=400'
                      width='400'
                      height='200'
                      alt='Compressor Controller'
                      className='w-full h-48 object-cover rounded-lg mb-4 shadow-md bg-white/10'
                    />
                    <ul className='space-y-2'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Automated pressure control
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Energy efficient operation
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                        <span className='text-sm text-gray-200'>
                          Remote monitoring
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className='flex justify-center mt-8'>
                <Link href='/products'>
                  <Button
                    size='lg'
                    className='bg-blue-600 hover:bg-blue-700 shadow-lg'
                  >
                    View All Products
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-white drop-shadow-lg'>
                    Ready to Upgrade Your Hospital Technology?
                  </h2>
                  <p className='max-w-[600px] text-blue-100 md:text-xl/relaxed drop-shadow-lg'>
                    Contact our team today to discuss how SSYKU Tech can enhance
                    your medical facility with our advanced control systems and
                    medical solutions.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/contact'>
                    <Button size='lg' variant='secondary' className='shadow-lg'>
                      Get Free Consultation
                    </Button>
                  </Link>
                  <Link href='/about'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='text-white border-white hover:bg-white hover:text-blue-600 bg-transparent shadow-lg'
                    >
                      Learn About Us
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
                  <div className='h-8 w-8  rounded-lg flex items-center justify-center'>
                    <Image
                      src='/logo2.jpeg'
                      alt='SSYKU Tech Logo'
                      width={35}
                      height={50}
                      className='rounded-lg'
                    />
                  </div>
                  <span className='ml-2 text-xl font-bold text-white'>
                    SSYKU Tech
                  </span>
                </div>
                <p className='text-sm text-gray-300'>
                  Leading provider of advanced medical technology products for
                  modern healthcare facilities worldwide.
                </p>
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
                      Surgeon Control Panel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Smart Medical Gas Area Alarm
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Dew Point Monitor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Auto Change Over Unit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      IAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='text-sm text-gray-300 hover:text-blue-400 transition-colors'
                    >
                      Mass Flow Monitor
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
                      +91 9740961400
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Mail className='h-4 w-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>
                      sales@ssykutech.in
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='h-4 w-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>
                      Sri Sivam YKU Tech pvt Ltd No.14/20, Arumugam street, 1 st
                      Floor,Puzhuthivakkam, Madipkkam,Chennai -600091
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
