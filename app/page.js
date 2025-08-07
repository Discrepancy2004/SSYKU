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

export default function HomePage() {
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
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                <div className='flex flex-col justify-center space-y-4'>
                  <div className='space-y-2'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg'>
                      Advanced Medical Solutions for Modern Hospitals
                    </h1>
                    <p className='max-w-[600px] text-gray-200 md:text-xl drop-shadow-lg'>
                      SSYKU Tech delivers cutting-edge medical technology
                      including surgeon control panels, compressor controllers,
                      and integrated hospital management systems.
                    </p>
                  </div>
                  <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                    <Link href='/products'>
                      <Button
                        size='lg'
                        className='bg-blue-600 hover:bg-blue-700 shadow-lg'
                      >
                        View Our Products
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Button>
                    </Link>
                    <Link href='/contact'>
                      <Button
                        variant='outline'
                        size='lg'
                        className='bg-white/20 text-white border-white hover:bg-white hover:text-gray-900 shadow-lg'
                      >
                        Get Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
                <Image
                  src='/placeholder.svg?height=400&width=600'
                  width='600'
                  height='400'
                  alt='Medical Control Panel'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl bg-white/10'
                />
              </div>
            </div>
          </section>

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
