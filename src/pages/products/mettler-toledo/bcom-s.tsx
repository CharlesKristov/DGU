import {  Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import bCom_S from "../../../assets/MT/bCom_S.jpg";
import Image from "next/image";
import Link from "next/link";

export default function BCOMS() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">bCom S</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div className='flex justify-center'>
                        <Image
                            src={bCom_S}
                            alt="bCom_S"
                            className="rounded-lg w-3/5 h-auto"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black">What is bCom S?</h2>
                        <p className="text-gray-600">
                            bCom S is a highly cost effective product designed for supermarket and retail grocery. The easy, solid
                            and smart features help simplifying the process of weighing, selling and achieving safe transactions.
                        </p>
                        <Link href="/MT/bCom_S.pdf" rel="noopener noreferrer" target="_blank">
                            <button className="brochure bg-primary-blue text-white px-4 py-2 rounded-lg mt-3">
                                <span className='flex items-center'>
                                    <Download className="w-4 h-4 mr-2" />
                                    Brochure
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <Tabs defaultValue="features" className="mb-12">
                    <TabsList className="grid w-full grid-cols-1 bg-primary-blue text-white">
                        <TabsTrigger value="features" className="max-md:text-xs">Features</TabsTrigger>
                        {/* <TabsTrigger value="industries" className="max-md:text-xs">Industries Served</TabsTrigger>
                        <TabsTrigger value="benefits" className="max-md:text-xs">Benefits</TabsTrigger> */}
                    </TabsList>
                    <TabsContent value="features">
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className='mb-0'>• Fast, accurate weighing and service. Ergonomic design, solid, reliable and easy operation.</p>
                                <p>• bCom S label printing scale convinces with its superb operability, powerful functions and easy
                                maintenance, which makes retailers more efficient.</p>
                                <p>• Powerful application and solid hardware interface help retailers to professionally manage their business.
                                Open label design and seamless application interaction sets bCom S apart from others. Stronger.</p>
                                
                            </CardContent>
                        </Card>
                    </TabsContent>
                    {/* <TabsContent value="industries">
                        <Card>
                            <CardHeader>
                                <CardTitle>Industries Served</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className='mb-0'>• Aerospace and Defense</p>
                                <p>• Oil and Gas</p>
                                <p>• Manufacturing and Industrial</p>
                                <p>• Healthcare and Pharmaceuticals</p>
                                <p>• Building and Facility Management</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="benefits">
                        <Card>
                            <CardHeader>
                                <CardTitle>Benefits</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className='mb-0'>• Enhanced operational efficiency through automation</p>
                                <p>• Improved sustainability with energy-efficient solutions</p>
                                <p>• Increased safety and security with advanced monitoring systems</p>
                                <p>• Real-time visibility and control over critical infrastructure</p>
                                <p>• Cost reduction and optimized resource allocation</p>
                            </CardContent>
                        </Card>
                    </TabsContent> */}
                </Tabs>

                {/* <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose bCom S?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Package className="w-5 h-5 mr-2 text-blue-500" />
                                    Industry-Leading Automation Solutions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Honeywell delivers cutting-edge automation technologies that optimize industrial operations, improve production output, and reduce downtime across a variety of sectors.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Shield className="w-5 h-5 mr-2 text-red-500" />
                                    Unmatched Security and Cybersecurity
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Honeywell provides industry-leading security solutions, including physical and cybersecurity services, ensuring the protection of critical infrastructure and assets.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BarChart className="w-5 h-5 mr-2 text-green-500" />
                                    Data-Driven Performance Optimization
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                With Honeywell&apos;s advanced analytics, businesses gain real-time insights into their operations, enabling data-driven decision-making and enhanced performance.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                                    Sustainability and Energy Efficiency
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Honeywell&apos;s energy-efficient solutions help businesses reduce their environmental footprint, lower energy costs, and meet sustainability goals.
                            </CardContent>
                        </Card>
                    </div>
                </section> */}
            </div>
        </div>
    )
}