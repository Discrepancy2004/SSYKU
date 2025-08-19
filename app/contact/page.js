"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/ui/navbar"
import DarkVeil from "@/components/DarkVeil/DarkVeil"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    department: "",
    interest: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const router = useRouter()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/mnnzolzk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form submitted:", formData)
        setShowSuccessModal(true)

        // Redirect after 2 seconds using Next.js router
        setTimeout(() => {
          router.push("/") // or router.push('/home')
        }, 2000)
      } else {
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting the form. Please try again.")
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
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
      <Navbar activePage='contact' />

      <main className='relative z-10 flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 '>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-xl font-semibold'>
                  Contact SSYKU Tech
                </h1>
                <p className='max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white drop-shadow-xl font-semibold'>
                  Ready to transform your hospital with advanced medical
                  technology? Get in touch with our team of experts for a
                  consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
              {/* Contact Form */}
              <Card className='border-2'>
                <CardHeader>
                  <CardTitle className='text-2xl'>
                    Get a Free Consultation
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and our medical technology experts
                    will contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pb-6'>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>Full Name *</Label>
                        <Input
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder='Dr. John Smith'
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email'>Email Address *</Label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder='john.smith@hospital.com'
                          required
                        />
                      </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div className='space-y-2'>
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input
                          id='phone'
                          name='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder='+1 (555) 123-4567'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='hospital'>
                          Hospital/Organization *
                        </Label>
                        <Input
                          id='hospital'
                          name='hospital'
                          value={formData.hospital}
                          onChange={handleInputChange}
                          placeholder='General Hospital'
                          required
                        />
                      </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div className='space-y-2'>
                        <Label htmlFor='department'>Department</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("department", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select department' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='surgery'>Surgery</SelectItem>
                            <SelectItem value='icu'>ICU</SelectItem>
                            <SelectItem value='emergency'>Emergency</SelectItem>
                            <SelectItem value='facilities'>
                              Facilities Management
                            </SelectItem>
                            <SelectItem value='it'>IT Department</SelectItem>
                            <SelectItem value='administration'>
                              Administration
                            </SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='interest'>Product Interest</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("interest", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select product' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='surgeon-panels'>
                              Surgeon Control Panels
                            </SelectItem>
                            <SelectItem value='compressor-controllers'>
                              Compressor Controllers
                            </SelectItem>
                            <SelectItem value='monitoring-systems'>
                              Monitoring Systems
                            </SelectItem>
                            <SelectItem value='integration'>
                              System Integration
                            </SelectItem>
                            <SelectItem value='consultation'>
                              General Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>Message *</Label>
                      <Textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder='Please describe your needs, current challenges, or any specific requirements...'
                        className='min-h-[120px]'
                        required
                      />
                    </div>

                    <Button
                      type='submit'
                      size='lg'
                      className='w-full bg-blue-600 hover:bg-blue-700'
                    >
                      <Send className='mr-2 h-4 w-4' />
                      Send Message
                    </Button>
                  </form>
                  <div>
                    {showSuccessModal && (
                      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                        <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4'>
                          <div className='mb-4'>
                            <svg
                              className='w-16 h-16 text-green-500 mx-auto'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 13l4 4L19 7'
                              ></path>
                            </svg>
                          </div>
                          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            Form Successfully Submitted!
                          </h2>
                          <p className='text-gray-600 mb-4'>
                            Thank you for your inquiry! We will contact you
                            within 24 hours.
                          </p>
                          <p className='text-sm text-gray-500'>
                            Redirecting to home page...
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <Phone className='mr-2 h-5 w-5 text-blue-600' />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <p className='font-semibold'>24/7 Emergency Support</p>
                      <p className='text-lg font-mono'>+1 (800) SSYKU-TECH</p>
                      <p className='text-lg font-mono'>+1 (800) 779-5883</p>
                      <p className='text-sm text-gray-600'>
                        For urgent technical issues and emergencies
                      </p>
                    </div>
                    <div className='mt-4 space-y-2'>
                      <p className='font-semibold'>Sales & Consultation</p>
                      <p className='text-lg font-mono'>+1 (555) 123-4567</p>
                      <p className='text-sm text-gray-600'>
                        Monday - Friday, 8:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <Mail className='mr-2 h-5 w-5 text-blue-600' />
                      Email Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <div>
                        <p className='font-semibold'>General Inquiries</p>
                        <p className='text-blue-600'>info@ssykutech.com</p>
                      </div>
                      <div>
                        <p className='font-semibold'>Sales Team</p>
                        <p className='text-blue-600'>sales@ssykutech.com</p>
                      </div>
                      <div>
                        <p className='font-semibold'>Technical Support</p>
                        <p className='text-blue-600'>support@ssykutech.com</p>
                      </div>
                      <div>
                        <p className='font-semibold'>Emergency Support</p>
                        <p className='text-blue-600'>emergency@ssykutech.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <MapPin className='mr-2 h-5 w-5 text-blue-600' />
                      Office Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold'>Headquarters</p>
                        <p className='text-sm text-gray-600'>
                          123 Medical Technology Drive
                          <br />
                          Healthcare City, HC 12345
                          <br />
                          United States
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold'>Regional Office</p>
                        <p className='text-sm text-gray-600'>
                          456 Innovation Boulevard
                          <br />
                          Tech Valley, TV 67890
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <Clock className='mr-2 h-5 w-5 text-blue-600' />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <div className='flex justify-between'>
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Sunday:</span>
                        <span>Emergency Support Only</span>
                      </div>
                      <div className='mt-3 p-3 bg-blue-50 rounded-lg'>
                        <p className='text-sm text-blue-800'>
                          <strong>24/7 Emergency Support</strong> available for
                          critical medical equipment issues
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 '>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-xl font-semibold'>
                Frequently Asked Questions
              </h2>
              <p className='max-w-[900px] text-white md:text-xl/relaxed  drop-shadow-xl font-semibold'>
                Common questions about our medical technology solutions and
                services.
              </p>
            </div>
            <div className='grid gap-6 lg:grid-cols-2'>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    How quickly can you respond to emergencies?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    We provide 24/7 emergency support with response times under
                    2 hours for critical issues. Our technical team is always on
                    standby to ensure your medical equipment operates without
                    interruption.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Do you provide training for hospital staff?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Yes, comprehensive training is included with every
                    installation. We provide both initial training and ongoing
                    education to ensure your staff can effectively use all
                    system features.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Are your systems FDA approved?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    All SSYKU Tech products meet or exceed FDA requirements and
                    medical industry standards. We maintain all necessary
                    certifications and regularly update our compliance
                    protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className='bg-white'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    What is the typical installation timeline?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Installation timelines vary based on system complexity, but
                    most projects are completed within 2-4 weeks. We work
                    closely with your facility to minimize disruption to
                    hospital operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 '>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-white'>
                  Ready to Get Started?
                </h2>
                <p className='max-w-[600px] text-blue-100 md:text-xl/relaxed'>
                  Our medical technology experts are standing by to help you
                  find the perfect solution for your healthcare facility.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button
                  size='lg'
                  variant='secondary'
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Contact Us Now
                </Button>
                <Link href='/products'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='text-white border-white hover:bg-white hover:text-blue-600 bg-transparent'
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
      <footer className='w-full border-t bg-gray-50 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-8'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {/* Company Info */}
            <div className='space-y-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>ST</span>
                </div>
                <span className='ml-2 text-xl font-bold text-gray-900'>
                  SSYKU Tech
                </span>
              </div>
              <p className='text-sm text-gray-600'>
                Leading provider of advanced medical technology solutions for
                modern healthcare facilities worldwide.
              </p>
              <div className='flex space-x-4'>
                <Link
                  href='#'
                  className='text-gray-400 hover:text-blue-600 transition-colors'
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
                  className='text-gray-400 hover:text-blue-600 transition-colors'
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
                  className='text-gray-400 hover:text-blue-600 transition-colors'
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
              <h3 className='text-sm font-semibold text-gray-900'>
                Quick Links
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-gray-900'>Products</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Surgeon Control Panels
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Compressor Controllers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Monitoring Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Safety Control Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Integration Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-gray-900'>
                Contact Info
              </h3>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Phone className='h-4 w-4 text-blue-600' />
                  <span className='text-sm text-gray-600'>
                    +1 (800) 779-5883
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-4 w-4 text-blue-600' />
                  <span className='text-sm text-gray-600'>
                    info@ssykutech.com
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <MapPin className='h-4 w-4 text-blue-600' />
                  <span className='text-sm text-gray-600'>
                    Healthcare City, HC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='border-t border-gray-200 mt-6 pt-6 text-center'>
            <p className='text-xs text-gray-500'>
              © 2025 SSYKU Tech. All rights reserved. Medical solutions for
              modern healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
