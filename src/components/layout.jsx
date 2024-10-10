import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import NavigationBar from "./navigationbar";
import Footer from "./footer";

import Carousel1 from "../assets/hr3-model-gedung-high-rise-build-768x432.jpg";
import Carousel2 from "../assets/FreshBase_counter.jpg";
import Carousel3 from "../assets/bPlus_T2_Store1rezise.jpg";
import Carousel4 from "../assets/bPlus_T2_Store3.resize.jpg";

import Activities1 from "../assets/activities1.png";
import Activities2 from "../assets/activities2.png";
import Activities3 from "../assets/activities3.png";

import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";

import LotteGrosir from "../assets/Customers/LotteGrosir.png";
import LotteMart from "../assets/Customers/LotteMart.png";
import GrandLucky from "../assets/Customers/GrandLucky.png";
import GrandLuckySuperStore from "../assets/Customers/GrandLuckySuperStore.png";
import TransMart from "../assets/Customers/TransMart.png";
import RanchMarket from "../assets/Customers/RanchMarket.png";
import FarmersMarket from "../assets/Customers/FarmersMarket.png";
import LuLu from "../assets/Customers/LuLu.png";
import SuperIndo from "../assets/Customers/SuperIndo.png";
import HERO from "../assets/Customers/HERO.png";
import Indomaret from "../assets/Customers/Indomaret.png";
import HyperMart from "../assets/Customers/HyperMart.png";
import Papaya from "../assets/Customers/Papaya-260x300.jpg";
import Hokku from "../assets/Customers/Hokku.png";
import Hokky from "../assets/Customers/Hokky.png";
import Jasons from "../assets/Customers/Jasons.png";
import StarMart from "../assets/Customers/StarMart.png";
import MeatPoultry from "../assets/Customers/MeatPoultry.png";
import FoodHall from "../assets/Customers/FoodHall.png";
import FoodMax from "../assets/Customers/FoodMax.png";
import Frestive from "../assets/Customers/Frestive.png";
import Brastagi from "../assets/Customers/Brastagi.png";
import Total from "../assets/Customers/Total.png";
import Capital from "../assets/Customers/Capital.png";
import SuperHiro from "../assets/Customers/SuperHiro.png";
import CKLCargo from "../assets/Customers/CKLCargo.png";
import MirotaKampus from "../assets/Customers/MirotaKampus.png";
import FoodMart from "../assets/Customers/FoodMart.png";
import HyFresh from "../assets/Customers/HyFresh.png";
import GrooceriesCity from "../assets/Customers/GrooceriesCity.png";

import ActivityCard from "./ActivityCard";
import ProductCard from "./ProductCard";
import CustomerImage from "./CustomerImage";

export default function Layout( {children} ){
    const plugin = React.useRef(
        Autoplay({ delay: 2000 })
    );

    const carouselData = [
        { src: Carousel1.src, index: 1, alt: "HR3 Model Gedung High Rise Build" },
        { src: Carousel2.src, index: 2, alt: "FreshBase Counter" },
        { src: Carousel3.src, index: 3, alt: "bPlus T2 Store1" },
        { src: Carousel4.src, index: 4, alt: "bPlus T2 Store3" }
    ];

    const activityData = [
    {
        storeName: "Lion Super Indo Tirtayasa Lampung",
        imageSrc: Activities1.src
    },
    {
        storeName: "Lion Super Indo Kalijaga Cirebon",
        imageSrc: Activities2.src
    },
    {
        storeName: "Superindo - Q Square Sentul",
        imageSrc: Activities3.src
    }
    ];

    const productData1 = [
        { imageSrc: Product1.src, altText: "Mettler Toledo logo", title: "Mettler Toledo" },
        { imageSrc: Product2.src, altText: "Honeywell logo", title: "Honeywell" }
    ];

    const productData2 = [
        { imageSrc: Product3.src, alt: "Eutron logo", title: "Eutron" },
        { imageSrc: Product4.src, alt: "G-LOG logo", title: "G-LOG" }
    ];

    const imageData1 = [
        { src: LotteGrosir.src, alt: "LotteGrosir" },
        { src: LotteMart.src, alt: "LotteMart" },
        { src: TransMart.src, alt: "TransMart" },
        { src: GrandLucky.src, alt: "GrandLucky" },
        { src: GrandLuckySuperStore.src, alt: "GrandLuckySuperStore" },
        { src: RanchMarket.src, alt: "RanchMarket" },
    ];

    const imageData2 = [
        { src: FarmersMarket.src, alt: "FarmersMarket" },
        { src: LuLu.src, alt: "LuLu" },
        { src: SuperIndo.src, alt: "SuperIndo" },
        { src: HERO.src, alt: "HERO" },
        { src: Indomaret.src, alt: "Indomaret" },
        { src: HyperMart.src, alt: "HyperMart" },
    ];

    const imageData3 = [
        { src: Papaya.src , alt: "Papaya" },
        { src: Hokku.src, alt: "Hokku" },
        { src: Hokky.src, alt: "Hokky" },
        { src: Jasons.src, alt: "Jasons" },
        { src: StarMart.src, alt: "StarMart" },
        { src: MeatPoultry.src, alt: "MeatPoultry" },
    ];

    const imageData4 = [
        { src: FoodHall.src, alt: "FoodHall" },
        { src: FoodMax.src, alt: "FoodMax" },
        { src: Frestive.src, alt: "Frestive" },
        { src: Brastagi.src, alt: "Brastagi" },
        { src: Total.src, alt: "Total" },
        { src: Capital.src, alt: "Capital" },
    ];


    const imageData5 = [
        { src: SuperHiro.src, alt: "SuperHiro" },
        { src: CKLCargo.src, alt: "CKLCargo" },
        { src: MirotaKampus.src, alt: "MirotaKampus" },
        { src: FoodMart.src, alt: "FoodMart" },
        { src: HyFresh.src, alt: "HyFresh" },
        { src: GrooceriesCity.src, alt: "GrooceriesCity" },
    ];

    const imageDataArray = [imageData1, imageData2, imageData3, imageData4, imageData5];
    const allImageData = imageDataArray.flat();

    return(
        <>
            <NavigationBar/>
            <main className="flex flex-col items-center m-3">
                    {/* Carousel Section */}
                    <Carousel plugins={[plugin.current]} className="w-3/5 aspect-video max-md:w-full">
                        <CarouselContent>
                            {carouselData.map((item) => (
                            <CarouselItem key={item.index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                                            <img 
                                                src={item.src} 
                                                alt={item.alt} 
                                                className="w-full h-full object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Activities Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                            Our Activities
                        </h2>
                    </div>
                    <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                        We are actively providing goods all over Indonesia.
                    </div>
                    <button className="buttons px-3.5 py-1.5 mt-3 text-xs font-semibold tracking-wider leading-5 text-center uppercase rounded-lg bg-zinc-100 text-primary-blue">
                        See All
                    </button>
                    <section className="mx-auto my-12 max-w-full w-[900px] max-md:mx-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-items-center place-content-center">
                            {activityData.map((store, index) => (
                            <ActivityCard
                                key={index}
                                storeName={store.storeName}
                                imageSrc={store.imageSrc}
                            />
                            ))}
                        </div>
                    </section>

                    {/* Video Youtube */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                            Mettler Toledo Freshbase With AI
                        </h2>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className="relative w-3/5 h-auto aspect-video max-md:w-full">
                            <iframe
                            className="mt-10 absolute top-0 left-0 w-full h-full max-md:mx-0"
                            src="https://www.youtube.com/embed/oCKHQvCqFSw"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Products */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                            Our Products
                        </h2>
                    </div>
                    <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                        We are the official authorized Dealer
                    </div>
                    <section className="max-w-full w-[1099px] max-md:mt-10">
                        <div className="mt-10 flex gap-5 max-md:flex-col max-md:mt-0">
                            {productData1.map((image, index) => (
                            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <ProductCard
                                imageSrc={image.imageSrc}
                                altText={image.altText}
                                title={image.title}
                                />
                            </div>
                            ))}
                        </div>
                        <div className="mt-10 flex gap-5 max-md:flex-col">
                            {productData2.map((image, index) => (
                            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <ProductCard
                                imageSrc={image.imageSrc}
                                altText={image.altText}
                                title={image.title}
                                />
                            </div>
                            ))}
                        </div>
                    </section>

                    {/* Customers */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                            Our Customers
                        </h2>
                    </div>
                    <section className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-12">
                        {allImageData.map((image, index) => (
                            <CustomerImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </section>

                    {/* News */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                            News
                        </h2>
                    </div>
                    <Carousel className="w-3/5 mt-12">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                {children}
            </main>
            <Footer/>
        </>
    )
}