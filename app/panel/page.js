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
  Cable,
  Thermometer,
  Ruler,
  FileText,
  Wrench,
  Headset,
  ArrowLeft,
  Droplet,
} from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export default function SurgeonControlPanelPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar activePage='products' />

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
                Surgeon Control Panel
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
                  <Badge variant='secondary'>Operating Room</Badge>
                  <Badge className='bg-blue-600 hover:bg-blue-700'>
                    Flagship
                  </Badge>
                </div>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl text-gray-900'>
                  Surgeon Control Panel
                </h1>
                <p className='mt-4 text-gray-600 text-lg'>
                  A sterile-ready, medical-grade touchscreen for operating
                  rooms—control lighting and dimming, monitor critical gases in
                  real time, and streamline surgical workflows with precision.
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
                  src='Panel.jpeg'
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
                    <CardTitle>Real-time Control and Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription>
                    Low-latency control of OR subsystems: lights, audio,
                    temperature and access the flow amount of gases in an
                    instant.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='border-2 hover:border-blue-200 transition-colors'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center gap-2'>
                    <Shield className='h-6 w-6 text-blue-600' />
                    <CardTitle>Safety & Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription>
                    Made with Medical Grade Stainless Steel
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
                  Designed in collaboration with surgical teams to deliver
                  intuitive workflows and dependable operation in critical
                  environments.
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      Customizable room presets for lighting, temperature, and
                      device configurations.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      The screen's smooth surface makes it easy to clean and it
                      is designed to withstand the aggressive cleaning agents
                      commonly used in operating theatres.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      All the essential data for supervising the operational
                      status of the theatre can be viewed on a single display.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0' />
                    <span>
                      Seamless integration with existing hospital
                      infrastructure, supporting HL7 and other medical
                      communication standards for unified OR management.
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
                    value={
                      "Wide range of  15”/22”/32” inch Touch Screen HD Display with Password protected interface."
                    }
                  />
                  <SpecItem
                    icon={<Touchpad className='h-4 w-4 text-blue-600' />}
                    label='Touch'
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
                    label='Connectivity'
                    value='Wifi and ModBus options supported'
                  />
                  <SpecItem
                    icon={<Layers className='h-4 w-4 text-blue-600' />}
                    label='Material'
                    value='Medical Grade Stainless Steel'
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
                  <CardTitle>Compliance & Certifications</CardTitle>
                </div>
                <CardDescription>
                  Hospital-grade safety and EMC standards
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> ISO
                    9001:2015-Quality Management Systems
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> CE
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> RoHS
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <Wrench className='h-5 w-5 text-blue-600' />
                  <CardTitle>Environmental Sensors</CardTitle>
                </div>
                <CardDescription>All of our sensors used.</CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Temperature Sensor
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Humidity Sensor
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Differential Pressure Sensor
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Barometric Pressure Sensor
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> Hepa
                    Sensor
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
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> Date
                    Time - Real time clock
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Operation timing - Elapsed time
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' /> HEPA
                    Filter Status Indicator
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='h-3 w-3 text-green-600 mr-2' />{" "}
                    Music Player
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

            <Card className='border-2'>
              <CardHeader>
                <div className='flex items-center gap-2'>
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
                    href='/Surgeon Control Panel Specifications.pdf'
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
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50'>
        <p className='text-xs text-gray-500'>
          © 2025 SSYKU Tech. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            href='/about'
            className='text-xs hover:underline underline-offset-4 text-gray-500'
          >
            About
          </Link>
          <Link
            href='/products'
            className='text-xs hover:underline underline-offset-4 text-gray-500'
          >
            Products
          </Link>
          <Link
            href='/contact'
            className='text-xs hover:underline underline-offset-4 text-gray-500'
          >
            Contact
          </Link>
        </nav>
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
