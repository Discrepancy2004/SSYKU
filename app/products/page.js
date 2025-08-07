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
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Monitor,
  Settings,
  Gauge,
  Wifi,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import LightRays from "@/components/LightRays/LightRays"
import RollingGallery from "@/components/RollingGallery/RollingGallery"

export default function ProductsPage() {
  return (
    <div className='relative min-h-screen'>
      {/* LightRays Background */}
      <div className='fixed inset-0 z-0 w-screen h-screen'>
        <LightRays
          raysOrigin='top-center'
          raysColor='#FFFFFF'
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={1.5}
          pulsating={true}
          fadeDistance={0.8}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0.02}
          distortion={0.1}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col min-h-screen'>
        <Navbar activePage='products' />

        <main className='flex-1'>
          {/* Hero Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black drop-shadow-xl'>
                    Medical Technology Products
                  </h1>
                  <p className='max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium'>
                    Comprehensive medical solutions designed to enhance hospital
                    operations, improve patient care, and support medical
                    professionals with cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='grid gap-8 lg:gap-12'>
                {/* Surgeon Control Panels */}
                <Card className='overflow-hidden border-2 bg-black/80 shadow-lg'>
                  <div className='grid gap-6 lg:grid-cols-2'>
                    <div className='p-6 lg:p-8'>
                      <div className='flex items-center gap-2 mb-4'>
                        <Monitor className='h-6 w-6 text-blue-400' />
                        <Badge
                          variant='secondary'
                          className='bg-blue-600/20 text-blue-200 border-blue-400/30'
                        >
                          Featured Product
                        </Badge>
                      </div>
                      <CardHeader className='p-0'>
                        <CardTitle className='text-2xl lg:text-3xl text-white'>
                          Surgeon Control Panels
                        </CardTitle>
                        <CardDescription className='text-lg text-gray-200'>
                          Advanced touchscreen control systems designed
                          specifically for operating rooms with sterile
                          operation capabilities and intuitive interfaces.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='p-0 mt-6'>
                        <div className='grid gap-4 sm:grid-cols-2'>
                          <div className='space-y-3'>
                            <h4 className='font-semibold text-white'>
                              Key Features:
                            </h4>
                            <ul className='space-y-2'>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Sterile touchscreen operation
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Real-time vital monitoring
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Emergency protocol integration
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Customizable interface layouts
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='space-y-3'>
                            <h4 className='font-semibold text-white'>
                              Specifications:
                            </h4>
                            <ul className='space-y-2 text-sm text-gray-300'>
                              <li>• 15" - 24" display options</li>
                              <li>• IP65 waterproof rating</li>
                              <li>• 24/7 operation capability</li>
                              <li>• Multi-language support</li>
                              <li>• FDA approved components</li>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-6'>
                          <Link href='/contact'>
                            <Button className='bg-blue-600 hover:bg-blue-700 shadow-lg'>
                              Request Quote
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                    <div className='relative h-full'>
                      <Image
                        src='/placeholder.svg?height=400&width=600'
                        width='600'
                        height='400'
                        alt='Surgeon Control Panel'
                        className='w-full h-full object-cover bg-white/10'
                      />
                    </div>
                  </div>
                </Card>

                {/* Compressor Controllers */}
                <Card className='overflow-hidden border-2 bg-black/80 shadow-lg'>
                  <div className='grid gap-6 lg:grid-cols-2'>
                    <div className='relative lg:order-first h-full'>
                      <Image
                        src='/placeholder.svg?height=400&width=600'
                        width='600'
                        height='400'
                        alt='Compressor Controller'
                        className='w-full h-full object-cover bg-white/10'
                      />
                    </div>
                    <div className='p-6 lg:p-8'>
                      <div className='flex items-center gap-2 mb-4'>
                        <Settings className='h-6 w-6 text-blue-400' />
                        <Badge
                          variant='secondary'
                          className='bg-blue-600/20 text-blue-200 border-blue-400/30'
                        >
                          Popular Choice
                        </Badge>
                      </div>
                      <CardHeader className='p-0'>
                        <CardTitle className='text-2xl lg:text-3xl text-white'>
                          Compressor Controllers
                        </CardTitle>
                        <CardDescription className='text-lg text-gray-200'>
                          Intelligent medical air and vacuum system controllers
                          that ensure optimal pressure levels and
                          energy-efficient operation throughout your facility.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='p-0 mt-6'>
                        <div className='grid gap-4 sm:grid-cols-2'>
                          <div className='space-y-3'>
                            <h4 className='font-semibold text-white'>
                              Key Features:
                            </h4>
                            <ul className='space-y-2'>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Automated pressure control
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Energy optimization algorithms
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Remote monitoring capability
                                </span>
                              </li>
                              <li className='flex items-center'>
                                <CheckCircle className='h-4 w-4 text-green-400 mr-2 flex-shrink-0' />
                                <span className='text-sm text-gray-200'>
                                  Predictive maintenance alerts
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='space-y-3'>
                            <h4 className='font-semibold text-white'>
                              Applications:
                            </h4>
                            <ul className='space-y-2 text-sm text-gray-300'>
                              <li>• Medical air systems</li>
                              <li>• Vacuum systems</li>
                              <li>• Nitrogen generators</li>
                              <li>• Oxygen concentrators</li>
                              <li>• Waste anesthetic gas disposal</li>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-6'>
                          <Link href='/contact'>
                            <Button className='bg-blue-600 hover:bg-blue-700 shadow-lg'>
                              Get Information
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Additional Products Grid */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-black '>
                  Complete Medical Solutions
                </h2>
                <p className='max-w-[900px] text-black md:text-xl/relaxed font-medium'>
                  Explore our full range of medical technology products designed
                  for modern healthcare facilities.
                </p>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Gauge className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Pressure Monitoring Systems
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Real-time monitoring of medical gas pressures with
                      automated alerts and reporting.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Continuous monitoring
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Alarm management</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Data logging</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Wifi className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Wireless Control Networks
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Secure wireless networks for connecting medical devices
                      and control systems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Hospital-grade security
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Redundant connections
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Easy integration</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Shield className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Safety Control Systems
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Advanced safety systems with fail-safe mechanisms and
                      emergency protocols.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Emergency shutoffs
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Backup systems</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Compliance monitoring
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Monitor className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Display Solutions
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      High-resolution medical displays for critical information
                      and system status.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Medical-grade displays
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Touch capabilities
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Easy cleaning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Zap className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Power Management
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Uninterruptible power supplies and backup systems for
                      critical medical equipment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Battery backup</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>
                          Power conditioning
                        </span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Remote monitoring</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className='bg-black/80 shadow-lg'>
                  <CardHeader>
                    <Settings className='h-8 w-8 text-blue-400 mb-2' />
                    <CardTitle className='text-white'>
                      Integration Services
                    </CardTitle>
                    <CardDescription className='text-gray-200'>
                      Complete system integration and customization services for
                      your facility.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Custom solutions</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Training included</span>
                      </li>
                      <li className='flex items-center'>
                        <CheckCircle className='h-3 w-3 text-green-400 mr-2' />
                        <span className='text-gray-200'>Ongoing support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-black drop-shadow-xl'>
                    Ready to Upgrade Your Medical Technology?
                  </h2>
                  <p className='max-w-[600px] text-black md:text-xl/relaxed drop-shadow-xl font-medium'>
                    Contact our team to discuss your specific needs and get a
                    customized solution for your healthcare facility.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/contact'>
                    <Button size='lg' variant='secondary' className='shadow-lg'>
                      Get Custom Quote
                    </Button>
                  </Link>
                  <Link href='/about'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='text-black border-black hover:bg-black hover:text-white bg-transparent shadow-lg'
                    >
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className='w-full border-t border-gray-600/30 bg-black'>
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
