import ProductsCard from "../../components/ProductsCard";

import Voyager from "../../assets/Honeywell/1472G-voyager.jpg";
import Genesis from "../../assets/Honeywell/genesis-7580g_800_600.png";
import HH400 from "../../assets/Honeywell/HH400_01_large3.jpg";
import HH660 from "../../assets/Honeywell/HH660.jpg";
import HW1452G from "../../assets/Honeywell/Honeywell1452g5.jpg";
import PM423 from "../../assets/Honeywell/PM423.png";
import PX6I4 from "../../assets/Honeywell/PX6I4.png";
import Scanner from "../../assets/Honeywell/Scanner-1452G.png";
import Solaris from "../../assets/Honeywell/Solaris-7980.jpg";

export default function honeywell() {
    const productHoneywell = [
        { imageSrc: Voyager.src, altText: "1472G Voyager logo", title: "1472G Voyager", linkURL: "/products/honeywell/1472g-voyager" },
        { imageSrc: Genesis.src, altText: "Genesis 7580G logo", title: "Genesis 7580G", linkURL: "/products/honeywell/genesis-7580g" },
        { imageSrc: HH400.src, altText: "HH400 logo", title: "HH400", linkURL: "/products/honeywell/hh400" },
        { imageSrc: HH660.src, altText: "HH660 logo", title: "HH660", linkURL: "/products/honeywell/hh660" },
        { imageSrc: HW1452G.src, altText: "HW1452G logo", title: "Honeywell 1452G", linkURL: "/products/honeywell/1452g5" },
        { imageSrc: PM423.src, altText: "PM423 logo", title: "PM423", linkURL: "/products/honeywell/pm423" },
        { imageSrc: PX6I4.src, altText: "PX6I4 logo", title: "PX6I4", linkURL: "/products/honeywell/px6I4" },
        { imageSrc: Scanner.src, altText: "Scanner logo", title: "Scanner 1452g", linkURL: "/products/honeywell/scanner-1452g" },
        { imageSrc: Solaris.src, altText: "Solaris 7980 logo", title: "Solaris 7980", linkURL: "/products/honeywell/solaris-7980" },
    ];

    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                    Honeywell
                </h1>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>

                <div className="mt-10 w-[1200px] max-w-full mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {productHoneywell.map((image, index) => (
                        <ProductsCard
                            key={index}
                            imageSrc={image.imageSrc}
                            altText={image.altText}
                            title={image.title}
                            linkURL={image.linkURL}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}