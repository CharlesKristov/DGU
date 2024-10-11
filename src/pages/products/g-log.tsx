import { Weight, Apple, LeafyGreen, Egg } from 'lucide-react'
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

                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum sodales diam ac nisl auctor, nec cursus massa condimentum.
                    Fusce vel gravida mauris. In vitae justo dui. Curabitur et fringilla mauris. 
                    Nulla convallis, nibh quis bibendum vulputate, lectus tellus malesuada mauris, 
                    quis interdum enim leo pretium purus. Mauris congue a ligula sit amet gravida. 
                    In hac habitasse platea dictumst. Vestibulum ante dolor, lacinia eget urna scelerisque, feugiat bibendum lorem.
                    </p>
                </div>
                </div>

                <Tabs defaultValue="lorem" className="mb-12">
                    <TabsList className="grid w-full grid-cols-3 bg-primary-blue text-white">
                        <TabsTrigger value="lorem" className="max-md:text-xs">Lorem</TabsTrigger>
                        <TabsTrigger value="ipsum" className="max-md:text-xs">Ipsum</TabsTrigger>
                        <TabsTrigger value="dolor" className="max-md:text-xs">Dolor</TabsTrigger>
                    </TabsList>
                    <TabsContent value="lorem">
                        <Card>
                            <CardHeader>
                                <CardTitle>Lorem</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="ipsum">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ipsum</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="dolor">
                        <Card>
                            <CardHeader>
                                <CardTitle>Dolor</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                                    <Weight className="w-5 h-5 mr-2 text-blue-500" />
                                    Lorem Ipsum
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales diam ac nisl auctor, nec cursus massa condimentum.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Apple className="w-5 h-5 mr-2 text-red-500" />
                                    Lorem Ipsum
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales diam ac nisl auctor, nec cursus massa condimentum.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <LeafyGreen className="w-5 h-5 mr-2 text-green-500" />
                                    Lorem Ipsum
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales diam ac nisl auctor, nec cursus massa condimentum.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Egg className="w-5 h-5 mr-2 text-yellow-500" />
                                    Lorem Ipsum
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales diam ac nisl auctor, nec cursus massa condimentum.
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