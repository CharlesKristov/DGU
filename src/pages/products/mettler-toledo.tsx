import ProductsCard from "../../components/ProductsCard";

import bCom_S from "../../assets/MT/bCom_S.jpg";
import bPlus_T2 from "../../assets/MT/bPlus_T2.png";
import bPlus_C2 from "../../assets/MT/bPlus_C2.jpeg";
import bPlus_U2 from "../../assets/MT/bPlus_U2.jpg";
import bPlus_Hanging from "../../assets/MT/bPlus_Hanging.jpg";
import FreshBase_U2 from "../../assets/MT/FreshBase_U2.png";
import FreshBase_C2 from "../../assets/MT/FreshBase_C2.png";
import FreshBase_AI from "../../assets/MT/FreshBase_AI.jpg";
import bRite_Standard from "../../assets/MT/bRite_Standard.jpg";
import BBA231 from "../../assets/MT/BBA231.jpg";
import FloorScale from "../../assets/MT/FloorScale(PFA220 - ES).jpg";

export default function Mettler() {
    const productMettler = [
        { imageSrc: bCom_S.src, altText: "bCom_S logo", title: "bCom S", linkURL: "/products/mettler-toledo/bcom-s" },
        { imageSrc: bPlus_T2.src, altText: "bPlus_T2 logo", title: "bPlus T2", linkURL: "/products/mettler-toledo/bplus-T2" },
        { imageSrc: bPlus_C2.src, altText: "bPlus_C2 logo", title: "bPlus C2", linkURL: "/products/mettler-toledo/bplus-C2" },
        { imageSrc: bPlus_U2.src, altText: "bPlus_U2 logo", title: "bPlus U2", linkURL: "/products/mettler-toledo/bplus-U2" },
        { imageSrc: bPlus_Hanging.src, altText: "bPlus_Hanging logo", title: "bPlus H2 Hanging", linkURL: "/products/mettler-toledo/bplus-H2-Hanging" },
        { imageSrc: FreshBase_U2.src, altText: "FreshBase_U2 logo", title: "FreshBase U2", linkURL: "/products/mettler-toledo/freshbase-U2" },
        { imageSrc: FreshBase_C2.src, altText: "FreshBase_C2 logo", title: "FreshBase C2", linkURL: "/products/mettler-toledo/freshbase-C2" },
        { imageSrc: FreshBase_AI.src, altText: "FreshBase_AI logo", title: "FreshBase AI", linkURL: "/products/mettler-toledo/freshbase-AI" },
        { imageSrc: bRite_Standard.src, altText: "bRite_Standard logo", title: "bRite Standard", linkURL: "/products/mettler-toledo/brite-Standard" },
        { imageSrc: BBA231.src, altText: "BBA231 logo", title: "BBA231", linkURL: "/products/mettler-toledo/bba231" },
        { imageSrc: FloorScale.src, altText: "FloorScale(PFA220 - ES) logo", title: "Floor Scale (PFA220 - ES)", linkURL: "/products/mettler-toledo/floor-scale-PFA220" },
    ];

    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                    Mettler Toledo
                </h1>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    Mettler Toledo is a multinational leader in precision instruments and services. 
                </div>

                <div className="mt-10 w-[75%] max-md:w-full mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {productMettler.map((image, index) => (
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