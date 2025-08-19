"use client"
import ScrollStack, {
  ScrollStackItem,
} from "@/components/ScrollStack/ScrollStack"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CheckCircle,
  Shield,
  Cpu,
  Activity,
  Touchpad,
  Layers,
  Power,
  Wifi,
  Mail,
  MapPin,
  Cable,
  Thermometer,
  Ruler,
  FileText,
  Wrench,
  Headset,
  ArrowLeft,
  Droplet,
  Phone,
} from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { WavyBackground } from "@/components/ui/wavy"

export default function MassFlow() {
  const less = "<"
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar activePage='products' />
      <WavyBackground className='max-w-4xl mx-auto pb-40'>
        <p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>
          Mass Flow and Consumption Monitor
        </p>
        <p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>
          Delivers accurate, real-time tracking of gas usage.
        </p>
      </WavyBackground>

      <main className='flex-1'>
        {/* Breadcrumb + Back */}
        <section className='w-full border-b bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl py-4 flex items-center justify-between'>
            <div className='text-sm text-gray-600'>
              <Link href='/' className='hover:text-blue-600'>
                Home
              </Link>
              <span className='mx-2'>{"/"}</span>
              <Link href='/products' className='hover:text-blue-600'>
                Products
              </Link>
              <span className='mx-2'>{"/"}</span>
              <span className='text-gray-900 font-medium'>
                Mass Flow Monitor
              </span>
            </div>
            <Link
              href='/products'
              className='inline-flex items-center text-sm text-blue-600 hover:underline'
            >
              <ArrowLeft className='h-4 w-4 mr-1' />
              Back to Products
            </Link>
          </div>
        </section>
        {/* ScrollStack Demo 
        <section className='w-full py-16 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              Interactive Features Demo
            </h2>
            <ScrollStack
              itemDistance={80}
              itemScale={0.05}
              itemStackDistance={40}
              stackPosition='30%'
              scaleEndPosition='15%'
              baseScale={0.9}
              rotationAmount={0}
              blurAmount={2}
            >
              <ScrollStackItem>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Advanced Touch Interface
                  </h3>
                  <p className='text-gray-600 text-lg'>
                    Experience our medical-grade touchscreen technology designed
                    for sterile environments.
                  </p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Real-time Monitoring
                  </h3>
                  <p className='text-gray-600 text-lg'>
                    Monitor critical operating room parameters with instant
                    updates and alerts.
                  </p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Smart Integration
                  </h3>
                  <p className='text-gray-600 text-lg'>
                    Seamlessly connect with existing hospital systems and
                    medical devices.
                  </p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </section>
        */}

        {/* Hero */}
        <section className='w-full py-10 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center'>
              <div>
                <div className='flex items-center gap-2 mb-4'>
                  <Badge className='bg-blue-600 hover:bg-blue-700'>
                    Highly Recommended
                  </Badge>
                </div>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl text-gray-900'>
                  Mass Flow and Consumption Monitor
                </h1>
                <p className='mt-4 text-gray-600 text-lg'>
                  Our Mass Consumption & Flow Monitor is designed to deliver
                  accurate, real-time tracking of gas usage for industrial and
                  medical applications. It continuously measures gas flow in
                  Liters per Minute (LPM) or Cubic Meters, providing precise
                  consumption rates as well as the cumulative gas consumed in
                  Liters or Cubic Meters.
                </p>
                <div className='mt-6 flex flex-wrap gap-3'>
                  <Link href='/contact'>
                    <Button size='lg' variant='outline'>
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src='mass.PNG'
                  width={720}
                  height={420}
                  alt='SSYKU Tech Surgeon Control Panel in an operating room'
                  className='rounded-xl shadow-sm w-full h-auto object-cover'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className='w-full py-10 md:py-16'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <Card className='border-2 hover:border-blue-200 transition-colors'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center gap-2'>
                    <Touchpad className='h-6 w-6 text-blue-600' />
                    <CardTitle>Sterile Touch Interface</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription>
                    Medical-grade, glove-friendly touchscreen with IP65 front
                    sealing for routine sterilization.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='border-2 hover:border-blue-200 transition-colors'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center gap-2'>
                    <Cpu className='h-6 w-6 text-blue-600' />
                    <CardTitle>Real-time Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription>
                    Low-latency monitoring of Gas Flow and Consumption
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='border-2 hover:border-blue-200 transition-colors'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center gap-2'>
                    <Shield className='h-6 w-6 text-blue-600' />
                    <CardTitle>Certification & Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription>
                    <ul>
                      <li>ISO 9001:2015-Quality Management Systems</li>
                      <li>ROHS and CE</li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview + Technical Data */}
        <section className='w-full py-10 md:py-16 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl grid gap-8 lg:grid-cols-2 lg:gap-12'>
            <Card>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Layers className='h-5 w-5 text-blue-600' />
                  <CardTitle>Product Overview</CardTitle>
                </div>
                <CardDescription>
                  Designed in collaboration with medical teams to deliver
                  intuitive workflows and dependable operation in critical
                  environments.
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      To measure the real time dew point, humidity and
                      temperature in compressed air.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      Continuous Monitoring of Line Pressure in Bar/PSI (0 ~ 10
                      Bar)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      Ideal to measure the gas consumption by Individual
                      Departments and Total Gas Consumption by entire Hospitals
                      / Institutes
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      Device is mainly designed to measure gas consumption, Flow
                      at each Department, Block etc
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Activity className='h-5 w-5 text-blue-600' />
                  <CardTitle>Technical Data</CardTitle>
                </div>
                <CardDescription>
                  Key specifications for planning and procurement
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <SpecItem
                    icon={<Ruler className='h-4 w-4 text-blue-600' />}
                    label='Display Sizes'
                    value='Wide range of  7”/10”/15” inch HMI Touch Screen HD Display '
                  />
                  <SpecItem
                    icon={<Touchpad className='h-4 w-4 text-blue-600' />}
                    label='Resistive Touch'
                    value='PCAP, glove-friendly'
                  />
                  <SpecItem
                    icon={<Shield className='h-4 w-4 text-blue-600' />}
                    label='Ingress Protection'
                    value='Front IP65'
                  />
                  <SpecItem
                    icon={<Power className='h-4 w-4 text-blue-600' />}
                    label='Power'
                    value='120/240V AC, 15W'
                  />
                  <SpecItem
                    icon={<Thermometer className='h-4 w-4 text-blue-600' />}
                    label='Operating Temp'
                    value='32°F to 122°F (0°C to 50°C)
'
                  />
                  <SpecItem
                    icon={<Droplet className='h-4 w-4 text-blue-600' />}
                    label='Humidity'
                    value='90% RH (noncondensing)'
                  />
                  <SpecItem
                    icon={<Wifi className='h-4 w-4 text-blue-600' />}
                    label='Connecitivity'
                    value='4 Choics: Wired without IOT, Wired with IOT-4.0
Point to Point Wireless with IOT-4.0, Point to Point Wireless without IOT
Range – 100 meters
'
                  />
                  <SpecItem
                    icon={<Layers className='h-4 w-4 text-blue-600' />}
                    label='Dimensions'
                    value='204 x 149 x 84 mm'
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Compliance, Included, Options */}
        <section className='w-full py-10 md:py-16'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl grid gap-8 lg:grid-cols-3'>
            <Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Shield className='h-5 w-5 text-blue-600' />
                  <CardTitle>Sensor Specifications</CardTitle>
                </div>
                <CardDescription>
                  Top notch specs for precision and accuracy
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> Gas
                    Type: Oxygen (O2), Nitrous Oxide (N2O), Nitrogen (N2),
                    Medical Air4 (Air4), Medical Air7(Air7)
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />
                    Detection Method: Semiconductor
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Response Time: Less than 3 seconds
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Response Time:Pressure Range: Gas Type Positive (0 to 10
                    bar, 0 to 150 psi)
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Sensitivity: 0100% LEL (Lower Explosive Limit)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Wrench className='h-5 w-5 text-blue-600' />
                  <CardTitle>Flow Ranges</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 5 to
                    500 SLPM
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 10
                    to 1000 SLPM
                  </li>

                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 20
                    to 2000 SLPM
                  </li>

                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 30
                    to 3000 SLPM
                  </li>

                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 60
                    to 6000 SLPM
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 0 to
                    8000 CFM
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Layers className='h-5 w-5 text-blue-600' />
                  <CardTitle>Additional Features</CardTitle>
                </div>
                <CardDescription>Dont worry there's more.</CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />
                    Audio Alert: Voice Alert, Beeper
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    External Alert: Hooter AC 240V
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> IOT
                    Alert: Telegram, E-Mail
                  </li>

                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Company Logo at Power On
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support & Downloads */}
        <section className='w-full py-10 md:py-16'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl grid gap-8 justify-items-center'>
            {/*<Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Headset className='h-5 w-5 text-blue-600' />
                  <CardTitle>Support & Warranty</CardTitle>
                </div>
                <CardDescription>
                  Trusted by hospitals with proven uptime
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> 24/7
                    emergency support
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    2-year standard warranty (extendable)
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    On-site commissioning & staff training
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Remote monitoring & diagnostics
                  </li>
                </ul>
              </CardContent>
            </Card>*/}

            <Card className='border-2 justify-items-center'>
              <CardHeader>
                <div className='flex items-center gap-2 '>
                  <FileText className='h-5 w-5 text-blue-600' />
                  <CardTitle>Documentation</CardTitle>
                </div>
                <CardDescription>
                  Specifications and planning resources
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='grid gap-3 sm:grid-cols-2'>
                  <DocLink
                    title='Product Brochure (PDF)'
                    href='/Dew_Point.pdf'
                  />
                </div>
                <p className='text-xs text-gray-500 mt-3'>
                  Need More Clarity?{" "}
                  <Link
                    href='/contact'
                    className='text-blue-600 hover:underline'
                  >
                    Contact sales
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className='w-full py-12 md:py-20 bg-blue-600'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl text-center'>
            <h2 className='text-3xl font-bold text-white'>
              Ready to configure your OR?
            </h2>
            <p className='text-blue-100 mt-2 max-w-2xl mx-auto'>
              Our engineers will help tailor the Surgeon Control Panel to your
              room layout, devices, and workflows.
            </p>
            <div className='mt-6 flex gap-3 justify-center'>
              <Link href='/contact'>
                <Button size='lg' variant='secondary'>
                  Start a Project
                </Button>
              </Link>
              <Link href='/products'>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-white border-white hover:bg-white hover:text-blue-600 bg-transparent'
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='w-full border-t border-gray-700 bg-black text-gray-100'>
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
              <p className='text-sm text-gray-100'>
                Leading provider of advanced medical technology products for
                modern healthcare facilities worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-white'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
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
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Surgeon Control Panel
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Smart Medical Gas Area Alarm
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Dew Point Monitor
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Auto Change Over Unit
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    IAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-100 hover:text-blue-400 transition-colors'
                  >
                    Mass Flow Monitor
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-white'>Contact Info</h3>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Phone className='h-4 w-4 text-blue-400' />
                  <span className='text-sm text-gray-100'>+91 9740961400</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-4 w-4 text-blue-400' />
                  <span className='text-sm text-gray-100'>
                    sales@ssykutech.in
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <MapPin className='h-4 w-4 text-blue-400' />
                  <span className='text-sm text-gray-100'>
                    Sri Sivam YKU Tech pvt Ltd No.14/20, Arumugam street, 1 st
                    Floor,Puzhuthivakkam, Madipkkam,Chennai -600091
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='border-t border-gray-700 mt-6 pt-6 text-center'>
            <p className='text-xs text-gray-200'>
              © 2025 SSYKU Tech. All rights reserved. Medical solutions for
              modern healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Helper components (JS only) */
function SpecItem({ icon, label, value }) {
  return (
    <div className='rounded-lg border p-3 bg-white'>
      <div className='flex items-center gap-2 text-sm font-medium text-gray-900'>
        {icon}
        <span>{label}</span>
      </div>
      <div className='mt-1 text-sm text-gray-600'>{value}</div>
    </div>
  )
}

function DocLink({ title, href }) {
  return (
    <Link href={href} className='group'>
      <div className='flex items-center justify-between rounded-md border p-3 hover:border-blue-300 transition-colors'>
        <span className='text-sm text-gray-800 group-hover:text-blue-700'>
          {title}
        </span>
        <FileText className='h-4 w-4 text-gray-400 group-hover:text-blue-600' />
      </div>
    </Link>
  )
}
