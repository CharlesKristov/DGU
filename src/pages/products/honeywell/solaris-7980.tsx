import {  Package, Shield, BarChart, Sun } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Solaris from "../../../assets/Honeywell/Solaris-7980.jpg";
import Image from "next/image";

export default function Solaris7980s() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">Solaris 7980</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div className = "flex justify-center">
                        <Image
                            src={Solaris}
                            alt="Solaris"
                            className="rounded-lg w-3/5 h-auto w-auto"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black">What is Solaris 7980?</h2>
                        <p className="text-gray-600">
                            Honeywell is a global leader in technology and manufacturing, offering solutions in areas such as automation, energy efficiency, safety, and security. Their innovative technologies empower businesses across industries to enhance operational efficiency and sustainability.
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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Honeywell?</h2>
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
                </section>
            </div>
        </div>
    )
}