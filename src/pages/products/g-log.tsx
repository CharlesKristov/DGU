import { Package, BarChart, Link, Brain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import GLogs from "../../assets/product4.png";
import Image from "next/image";

export default function GLog() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">G-Log</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div>
                        <Image
                        src={GLogs}
                        alt="G-Log"
                        className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black">What is G-Log?</h2>
                        <p className="text-gray-600">
                            G-Log is a comprehensive logistics management system designed to streamline operations for businesses that require efficient tracking, managing, and optimizing of their supply chain. It provides real-time insights and tools to improve performance, reduce costs, and ensure smooth operations across multiple locations and transportation modes.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="Specification" className="mb-12">
                    <TabsList className="grid w-full grid-cols-3 bg-primary-blue text-white">
                        <TabsTrigger value="Specification" className="max-md:text-xs">Specification</TabsTrigger>
                        <TabsTrigger value="Key Features" className="max-md:text-xs">Key Features</TabsTrigger>
                        <TabsTrigger value="FAQ" className="max-md:text-xs">FAQ</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="Specification">
                        <Card>
                            <CardHeader>
                                <CardTitle>Specification</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Cloud-based platform for real-time updates and scalability</p>
                                <p>• Supports multi-modal transport management (air, sea, road, rail)</p>
                                <p>• Integration with ERP, CRM, and other third-party systems</p>
                                <p>• Multi-language and multi-currency support</p>
                                <p>• Advanced reporting and analytics dashboard</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="Key Features">
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Real-time shipment tracking across multiple locations</p>
                                <p>• Automated route optimization to reduce delivery times and costs</p>
                                <p>• Integration with multiple payment gateways and invoicing systems</p>
                                <p>• AI-powered demand forecasting to ensure stock availability</p>
                                <p>• Customizable workflows to adapt to unique business needs</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="FAQ">
                        <Card>
                            <CardHeader>
                                <CardTitle>FAQ</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Q: Does G-Log support multi-country operations?</p>
                                <p>A: Yes, G-Log supports logistics operations across different countries with multi-language and multi-currency capabilities.</p>
                                <p>• Q: Can G-Log be integrated with our existing ERP system?</p>
                                <p>A: Yes, G-Log can integrate with most ERP systems such as SAP, Oracle, and Microsoft Dynamics.</p>
                                <p>• Q: How does G-Log handle real-time tracking?</p>
                                <p>A: G-Log uses GPS integration and partner networks to provide real-time updates on shipments.</p>
                                <p>• Q: Is there customer support available for G-Log?</p>
                                <p>A: Yes, 24/7 customer support is available with a dedicated technical team to assist with any issues.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose G-Log?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Package className="w-5 h-5 mr-2 text-blue-500" />
                                    Comprehensive Logistics Management
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                G-Log offers a full suite of tools for managing logistics operations, from tracking shipments to optimizing routes. This allows businesses to efficiently manage their supply chains and reduce operational bottlenecks.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BarChart className="w-5 h-5 mr-2 text-red-500" />
                                    Real-Time Data and Analytics
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                With G-Log’s real-time data, businesses can make informed decisions quickly, ensuring that logistics operations are always optimized for the best performance.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Link className="w-5 h-5 mr-2 text-green-500" />
                                    Seamless Integration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                G-Log integrates with ERP, CRM, and other third-party systems, ensuring that your logistics operations work seamlessly with the rest of your business software.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Brain className="w-5 h-5 mr-2 text-yellow-500" />
                                    AI-Powered Optimization
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                G-Log uses AI to forecast demand, optimize delivery routes, and streamline logistics, helping you reduce costs and improve customer satisfaction.
                            </CardContent>
                        </Card>
                    </div>
                </section>


                <div className="text-center text-gray-600">
                    <p>Learn more about our products at www.glog.com</p>
                </div>
            </div>
        </div>
    )
}