/* eslint-disable @next/next/no-img-element */
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from 'embla-carousel'

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Carousel1 from "../assets/hr3-model-gedung-high-rise-build-768x432.jpg";
import Carousel2 from "../assets/FreshBase_counter.jpg";
import Carousel3 from "../assets/bPlus_T2_Store1rezise.jpg";
import Carousel4 from "../assets/bPlus_T2_Store3.resize.jpg";

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

import ActivityCard from "../components/ActivityCard";
import ProductCard from "../components/ProductCard";
import CustomerImage from "../components/CustomerImage";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
    const carouselData = [
        { src: Carousel1.src, index: 1, alt: "HR3 Model Gedung High Rise Build" },
        { src: Carousel2.src, index: 2, alt: "FreshBase Counter" },
        { src: Carousel3.src, index: 3, alt: "bPlus T2 Store1" },
        { src: Carousel4.src, index: 4, alt: "bPlus T2 Store3" }
    ];

    type Activity = {
        activity_id: string;
        brand_name: string;
        store_name: string;
        photo_url: string;
    };

    const [activityData, setActivityData] = useState<Activity[]>([]);

    useEffect(() => {
        // Fetch data from the API
        async function fetchActivities() {
            const response = await fetch('/api/activities');
            const data = await response.json();
            setActivityData(data.slice(0, 3));
        }
    
        fetchActivities();
    }, []); 

    const productData1 = [
        { imageSrc: Product1.src, altText: "Mettler Toledo logo", title: "Mettler Toledo", linkURL: "/products/mettler-toledo" },
        { imageSrc: Product2.src, altText: "Honeywell logo", title: "Honeywell", linkURL: "/products/honeywell" }
    ];

    const productData2 = [
        { imageSrc: Product3.src, alt: "Eutron logo", title: "Eutron", linkURL: "/products/eutron" },
        { imageSrc: Product4.src, alt: "G-LOG logo", title: "G-LOG", linkURL: "/products/g-log" }
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

    const FAQ = [
        {
            question: "Do you provide warranty?",
            answer: "Yes, we have warranty for every product that we sell to our customer at least 1 year.",
            item: "item-1"
        },
        {
            question: "Do you have stock for sparepart?",
            answer: "Yes, do not worry. Our spare part are ready in case something happend.",
            item: "item-2"
        },
        {
            question: "Do you have service center?",
            answer: "Yes, We have service center in most city in Indonesia.",
            item: "item-3"
        },
        {
            question: "Do you provide delivery?",
            answer: "Yes, we provide delivery to every cities in Indonesia.",
            item: "item-4"
        },
        {
            question: "Do you provide wholesale?",
            answer: "Yes, we provide both retail and whosale as we are the official authorized dealer in Indonesia.",
            item: "item-5"
        }
    ];

    const News = [
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Presentation-Mettler-Toledo-FreshBase-Plus-AI-with-Lion-Super-Indo-team-scaled.jpg",
            alt: "Presentation Mettler Toledo FreshBase Plus AI with Lion Super Indo team",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Conduct-coordination-with-Lotte-team-for-information-technologi-in-the-store-scaled.jpg",
            alt: "Conduct coordination with Lotte team for information technologi in the store",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Training-New-Product-FreshBase-Plus-with-Artificial-intelligence-2-scaled.jpg",
            alt: "Training New Product FreshBase Plus With Artificial Intelligence",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Colaboration-with-Mettler-Toledo-China-Malaysia-3.jpg",
            alt: "Colaboration with Mettler Toledo China & Malaysia 3",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Colaboration-with-Mettler-Toledo-China-Malaysia-1.jpg",
            alt: "Colaboration with Mettler Toledo China & Malaysia 1",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/The-first-priority-is-to-minimize-equipment-downtime-in-the-shop-scaled.jpg",
            alt: "The first priority is to minimize equipment downtime in the shop",
        },
        {
            src: "https://dgu.co.id/wp-content/uploads/2024/04/Training-in-Lotte-Bintaro--scaled.jpg",
            alt: "Training in Lotte Bintaro",
        }
    ];

    const imageDataArray = [imageData1, imageData2, imageData3, imageData4, imageData5];
    const allImageData = imageDataArray.flat();
    
    const plugin = React.useRef(
        Autoplay({ delay: 2000 })
    );

    const OPTIONS: EmblaOptionsType = { loop: true };

    return (
        <>
            <div className="flex flex-col items-center m-3">
                {/* Carousel Section */}
                <Carousel plugins={[plugin.current]} className="w-[75%] aspect-video max-md:w-full">
                    <CarouselContent>
                        {carouselData.map((item) => (
                            <CarouselItem key={item.index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden">
                                            <Image
                                                src={item.src} 
                                                alt={item.alt} 
                                                layout="fill" 
                                                objectFit="cover"
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
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        Our Activities
                    </h2>
                </div>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    We are actively providing goods all over Indonesia.
                </div>
                <Link href={"/activities"} className="text-decoration-none">
                    <button className="buttons px-3.5 py-1.5 mt-3 text-2xs font-semibold tracking-wider leading-5 text-center uppercase rounded-lg bg-zinc-100 text-primary-blue hover:text-white transition-all">
                        See All
                    </button>
                </Link> 
                <section className="mx-auto my-12 w-[75%] max-md:mx-5 max-md:w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-items-center place-content-center">
                        {activityData.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            brandName={activity.brand_name}
                            storeName={activity.store_name}
                            imageSrc={activity.photo_url}
                            href={"/activities/"+activity.activity_id}
                        />
                        ))}
                    </div>
                </section>

                {/* Video Youtube */}
                <div className="mt-10">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        Mettler Toledo Freshbase With AI
                    </h2>
                </div>
                <div className="flex justify-center w-full">
                    <div className="relative w-[75%] h-auto aspect-video max-md:w-full">
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
                <div id="products" className="mt-24">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        Our Products
                    </h2>
                </div>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    We are the official authorized Dealer
                </div>
                <section className="max-w-full w-[75%] max-md:mt-10 max-md:w-full">
                    <div className="mt-10 flex gap-5 max-md:flex-col max-md:mt-0">
                        {productData1.map((image, index) => (
                        <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <ProductCard
                            imageSrc={image.imageSrc}
                            altText={image.altText}
                            title={image.title}
                            linkURL={image.linkURL}
                            />
                        </div>
                        ))}
                    </div>
                    <div className="mt-10 flex gap-5 max-md:flex-col">
                        {productData2.map((image, index) => (
                            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <ProductCard
                                    imageSrc={image.imageSrc}
                                    altText={image.alt}
                                    title={image.title}
                                    linkURL={image.linkURL}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Customers */}
                <div className="mt-24">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        Our Customers
                    </h2>
                </div>
                <section className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-12 w-[75%] max-md:w-full">
                    {allImageData.map((image, index) => (
                        <CustomerImage key={index} src={image.src} alt={image.alt} />
                    ))}
                </section>

                {/* News */}
                <div className="mt-24">
                    <h2 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                        News
                    </h2>
                </div>
                <Carousel className="w-[75%] mt-12 max-md:w-full" opts={OPTIONS}>
                    <CarouselContent>
                        {News.map((news, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="relative flex aspect-[16/9] items-center justify-center p-0">
                                        <Image
                                                src={news.src} 
                                                alt={news.alt} 
                                                layout="fill" 
                                                objectFit="cover"
                                            />
                                        </CardContent>
                                        <CardDescription className="p-2 text-center font-medium text-lg lg:text-xl">
                                            {news.alt}
                                        </CardDescription>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="max-md:hidden" />
                    <CarouselNext className="max-md:hidden" />
                </Carousel>
            </div>

            {/* FAQ */}
            <section className="flex flex-col justify-center items-center self-stretch px-20 py-20 mt-20 bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[1100px]">
                    <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col w-full">
                                    <h2 className="pr-36 text-4xl font-semibold leading-[49.5px] text-stone-950 max-md:pr-5 max-md:text-2xl">
                                        Frequently Asked Questions
                                    </h2>
                                    <div className="flex items-center self-start mt-2 text-lg font-light leading-6">
                                        <p className="self-stretch my-auto text-stone-500">
                                            Haven&apos;t found what you&apos;re looking for?
                                            <Link href={"/contact-us"} className="self-stretch my-auto text-sky-600 ml-1">
                                                Contact Us
                                            </Link>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                                <Accordion type="single" collapsible>
                                    {FAQ.map((faq) => (
                                        <AccordionItem key={faq.item} value={faq.item}>
                                            <AccordionTrigger className="text-2xl max-md:text-xl">{faq.question}</AccordionTrigger>
                                            <AccordionContent className="text-sm">{faq.answer}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Whatsapp Floating Button */}
            <a href="https://api.whatsapp.com/send/?phone=6281287067575&text&type=phone_number&app_absent=0" target="_blank" className="wa text-decoration-none fixed bottom-8 right-8 z-50 bg-emerald-500 border-emerald-500 border-[10px] align-center text-3xl rounded-full">
                <img alt="whatsapp logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf46f2c5ca1959c117314473aa3d3413ef7facec08211e2313034ae214b0ccc?placeholderIfAbsent=true&apiKey=c0d3c16742ae4f458a4da43a0d02c813" />
                {/* <Image alt="whatsapp logo" width={"300"} height={"300"} src={"https://cdn.builder.io/api/v1/image/assets/TEMP/6bf46f2c5ca1959c117314473aa3d3413ef7facec08211e2313034ae214b0ccc?placeholderIfAbsent=true&apiKey=c0d3c16742ae4f458a4da43a0d02c813"}/> */}
            </a>
        </>
    );
}
