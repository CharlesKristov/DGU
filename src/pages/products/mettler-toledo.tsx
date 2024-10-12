import {  Scale, Settings, Activity, Thermometer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MettlerToledo from "../../assets/product1.png";
import Image from "next/image";

export default function Mettler() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">Mettler Toredo</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div>
                        <Image
                            src={MettlerToledo}
                            alt="Mettler Toledo"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black">What is Mettler Toledo?</h2>
                        <p className="text-gray-600">
                            Mettler Toledo is a global manufacturer specializing in precision instruments for use in laboratories, industrial, and food retailing environments. Their products range from balances, scales, and analyzers to advanced automated systems, ensuring accuracy and efficiency in measurement.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="features" className="mb-12">
                    <TabsList className="grid w-full grid-cols-3 bg-primary-blue text-white">
                        <TabsTrigger value="features" className="max-md:text-xs">Features</TabsTrigger>
                        <TabsTrigger value="applications" className="max-md:text-xs">Applications</TabsTrigger>
                        <TabsTrigger value="benefits" className="max-md:text-xs">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features">
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• High precision weighing instruments for laboratory and industrial use</p>
                                <p>• Advanced analytical instruments for chemical, pharmaceutical, and food industries</p>
                                <p>• Automated systems for optimizing production processes</p>
                                <p>• User-friendly software for data management and traceability</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="applications">
                        <Card>
                            <CardHeader>
                                <CardTitle>Applications</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Quality control in manufacturing industries</p>
                                <p>• Precision measurements in research and development labs</p>
                                <p>• Automated weighing systems in food retailing</p>
                                <p>• Chemical analysis in pharmaceuticals and environmental testing</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="benefits">
                        <Card>
                            <CardHeader>
                                <CardTitle>Benefits</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Ensures accuracy and precision in critical measurements</p>
                                <p>• Improves operational efficiency with automated solutions</p>
                                <p>• Increases productivity and reduces human error</p>
                                <p>• Provides real-time data and insights for better decision-making</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Mettler Toledo?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Scale className="w-5 h-5 mr-2 text-blue-500" />
                                    Precision and Accuracy
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Mettler Toledo&apos;s instruments are known for their high precision, ensuring that even the smallest variations in measurements are accurately detected, which is critical in industries such as pharmaceuticals and research.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Settings className="w-5 h-5 mr-2 text-red-500" />
                                    Advanced Automation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                The company offers advanced automation systems that help streamline operations in manufacturing, reducing human error and increasing productivity.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Activity className="w-5 h-5 mr-2 text-green-500" />
                                    Data Management and Traceability
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                With integrated software for data management, Mettler Toledo ensures that measurements are traceable, providing businesses with reliable data for compliance and quality control.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Thermometer className="w-5 h-5 mr-2 text-yellow-500" />
                                    Versatility in Applications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                From laboratory environments to industrial and food retail settings, Mettler Toledo’s products offer versatile solutions that can be adapted to a wide range of applications.
                            </CardContent>
                        </Card>
                    </div>
                </section>


                <div className="text-center text-gray-600">
                    <p>Learn more about our products at www.mt.com</p>
                </div>
            </div>
        </div>
    )
}