import { Weight, Palette, AlarmClockCheck, Lock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Eutrons from "../../assets/product3.png";
import Image from "next/image";

export default function Eutron() {
    return (
        <div className="min-h-screen bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary-blue mb-2">Eutron</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                <div>
                    <Image
                    src={Eutrons}
                    alt="Eutron"
                    className="rounded-lg w-full h-auto"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-black">What is Eutron?</h2>
                    <p className="text-gray-600">
                    The Eutron Cashier System is a cutting-edge solution designed to streamline retail and business operations. Engineered for speed, efficiency, and ease of use, this advanced cashier system is perfect for businesses of all sizes, from small retail stores to large-scale enterprises.
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
                                <p>• Processor: Dual-core Intel i3/i5</p>
                                <p>• Memory: 8GB DDR4 RAM</p>
                                <p>• Storage: 256GB SSD</p>
                                <p>• Display: 15&quot; Full HD touch screen</p>
                                <p>• Operating System: Windows 10 Pro or Linux</p>
                                <p>• Connectivity: USB, Ethernet, Wi-Fi, Bluetooth</p>
                                <p>• Printer Compatibility: Supports 80mm thermal printers</p>
                                <p>• Power: 65W power supply</p>
                                <p>• Dimensions: 12 x 10 x 7 inches</p>
                                <p>• Weight: 2.5 kg (5.5 lbs)</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="Key Features">
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Quick transaction processing for fast checkouts</p>
                                <p>• Real-time sales reporting and inventory management</p>
                                <p>• User-friendly touch screen interface</p>
                                <p>• Multi-payment integration (cash, card, digital wallets)</p>
                                <p>• Customizable software and reporting</p>
                                <p>• Secure data encryption and user access controls</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="FAQ">
                        <Card>
                            <CardHeader>
                                <CardTitle>FAQ</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Q: Does the Eutron system support multi-store operations?</p>
                                <p>A: Yes, it supports multi-location businesses with centralized data management.</p>
                                <p>• Q: Can I integrate this with my accounting software?</p>
                                <p>A: Yes, it integrates with popular accounting systems like QuickBooks and Xero.</p>
                                <p>• Q: How long does it take to train staff on the system?</p>
                                <p>A: Most staff can be trained in a few hours due to its user-friendly interface.</p>
                                <p>• Q: Does it support third-party payment processors?</p>
                                <p>A: Yes, it integrates with Stripe, PayPal, Square, and others.</p>
                                <p>• Q: Can I customize receipts for my business?</p>
                                <p>A: Yes, receipts can be customized to include your business logo and messages.</p>
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
                                    <Weight className="w-5 h-5 mr-2 text-blue-500" />
                                    Robust Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Eutron&apos;s cashier system is powered by a fast dual-core processor and 8GB RAM, ensuring seamless transactions even during peak hours. This performance is key to keeping operations running smoothly without delays.
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Palette className="w-5 h-5 mr-2 text-red-500" />
                                    Intuitive Design
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                The system features a user-friendly touch screen interface that simplifies tasks for cashiers, reducing the time spent on training and minimizing errors in transactions.
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <AlarmClockCheck className="w-5 h-5 mr-2 text-green-500" />
                                    Real-Time Insights
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Gain valuable insights with real-time sales reporting and inventory management. This helps businesses make data-driven decisions, ensuring you always stay ahead in managing stock and revenue.
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Lock className="w-5 h-5 mr-2 text-yellow-500" />
                                    Secure and Reliable
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                With built-in encryption and user access control, the Eutron Cashier System ensures the security of both your business and customer data, giving you peace of mind with every transaction.
                            </CardContent>
                        </Card>
                    </div>
                </section>


                <div className="text-center text-gray-600">
                    <p>Learn more about our products at www.eutron.com</p>
                </div>
            </div>
        </div>
    )
}