import Image from "next/image";
import NavigationBar from "./navigationbar";
import Footer from "./footer";
import Activities1 from "../assets/activities1.png";
import Activities2 from "../assets/activities2.png";
import Activities3 from "../assets/activities3.png";

import ActivityCard from "./ActivityCard";
import ProductCard from "./ProductCard";

export default function Layout( {children} ){
    const activityData = [
    {
        storeName: "Lion Super Indo Tirtayasa Lampung",
        imageSrc: "https://i.ibb.co.com/ZXsP4kP/activities1.png"
    },
    {
        storeName: "Lion Super Indo Kalijaga Cirebon",
        imageSrc: "https://i.ibb.co.com/9HRLkFX/activities2.png"
    },
    {
        storeName: "Superindo - Q Square Sentul",
        imageSrc: "https://i.ibb.co.com/rtcbg1x/activities3.png"
    }
    ];

    const productData = [
        { imageSrc: "https://i.ibb.co.com/xSr6ZHh/product1.png", altText: "Mettler Toledo logo", title: "Mettler Toledo" },
        { imageSrc: "https://i.ibb.co.com/vwbmM9B/product2.png", altText: "Honeywell logo", title: "Honeywell" }
    ];

    const productData2 = [
        { imageSrc: "https://i.ibb.co.com/61fR4Gt/product3.png", alt: "Eutron logo", title: "Eutron" },
        { imageSrc: "https://i.ibb.co.com/QN6nW5c/product4.png", alt: "G-LOG logo", title: "G-LOG" }
    ];

    return(
        <>
            <NavigationBar/>
            <main className="flex flex-col items-center m-3">
                    {/* Activities Section */}
                    <div className="mt-3.5">
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
                        <div className="relative w-3/5" style={{ paddingBottom: '33.75%' }}>
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
                            {productData.map((image, index) => (
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

                {children}
            </main>
            <Footer/>
        </>
    )
}