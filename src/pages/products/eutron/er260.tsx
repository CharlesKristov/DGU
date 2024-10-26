import {  Package, Shield, BarChart, Sun } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ER260 from "../../../assets/Eutron/ER-260_1.jpg";
import Image from "next/image";

export default function ER260s() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">ER260</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div className = "flex justify-center">
                        <Image
                            src={ER260}
                            alt="ER260"
                            className="rounded-lg w-3/5 h-auto w-auto"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black">What is ER260?</h2>
                        <p className="text-gray-600">
                            Eutron Hunan Information Equipment Co., Ltd., started operation in China in 1998 as a fully owned subsidiary of an Europe-based company. It is managed by a team of managerial professionals and technical experts who owns more than ten years of experience in the industry of retail technology.
                        </p>
                        <p className="text-gray-600">
                            EUTRON designs, produces, and markets cash registers, electronic scales, POS systems and software for the complete automation of sales outlets. Wide range of products and accessories, competitive price.
                        </p>
                        <p className="text-gray-600">
                            EUTRON is especially concentrated on fiscal cash register design and manufacturing for various markets. These products are featured with technologies of state-of-art, high reliability, convenient functions and cost-effectiveness.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="features" className="mb-12">
                    <TabsList className="grid w-full grid-cols-3 bg-primary-blue text-white">
                        <TabsTrigger value="features" className="max-md:text-xs">Features</TabsTrigger>
                        <TabsTrigger value="industries" className="max-md:text-xs">Industries Served</TabsTrigger>
                        <TabsTrigger value="benefits" className="max-md:text-xs">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features">
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Advanced automation and control systems for industrial applications</p>
                                <p>• Cutting-edge cybersecurity solutions to protect critical infrastructure</p>
                                <p>• Energy-efficient products and systems to drive sustainability</p>
                                <p>• Real-time data analytics to optimize performance and safety</p>
                                <p>• Smart building technologies for efficient facility management</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="industries">
                        <Card>
                            <CardHeader>
                                <CardTitle>Industries Served</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Aerospace and Defense</p>
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
                                <p>• Enhanced operational efficiency through automation</p>
                                <p>• Improved sustainability with energy-efficient solutions</p>
                                <p>• Increased safety and security with advanced monitoring systems</p>
                                <p>• Real-time visibility and control over critical infrastructure</p>
                                <p>• Cost reduction and optimized resource allocation</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Eutron?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Package className="w-5 h-5 mr-2 text-blue-500" />
                                    Industry-Leading Automation Solutions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Eutron delivers cutting-edge automation technologies that optimize industrial operations, improve production output, and reduce downtime across a variety of sectors.
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
                                Eutron provides industry-leading security solutions, including physical and cybersecurity services, ensuring the protection of critical infrastructure and assets.
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
                                With Eutron&apos;s advanced analytics, businesses gain real-time insights into their operations, enabling data-driven decision-making and enhanced performance.
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
                                Eutron&apos;s energy-efficient solutions help businesses reduce their environmental footprint, lower energy costs, and meet sustainability goals.
                            </CardContent>
                        </Card>
                    </div>
                </section>


                <div className="text-center text-gray-600">
                    <p>Learn more about our products at www.Eutron.com</p>
                </div>
            </div>
        </div>
    )
}