import ProductsCard from "../../components/ProductsCard";

import GL01 from "../../assets/G-Log/GL01.png";
import GL01Wifi from "../../assets/G-Log/GL01W.png";
import GL02 from "../../assets/G-Log/GL02.png";
import GL02Wifi from "../../assets/G-Log/GL02W.png";
import GLOG8 from "../../assets/G-Log/GLOG8.jpg";

export default function Glog() {
    const productGlog = [
        { imageSrc: GL01.src, altText: "GL01 logo", title: "GL01", linkURL: "/products/glog/gl01" },
        { imageSrc: GL01Wifi.src, altText: "GL01W logo", title: "GL01 Wifi", linkURL: "/products/glog/gl01w" },
        { imageSrc: GL02.src, altText: "GL02 logo", title: "GL02", linkURL: "/products/glog/gl02" },
        { imageSrc: GL02Wifi.src, altText: "GL02W logo", title: "GL02 Wifi", linkURL: "/products/glog/gl02w" },
        { imageSrc: GLOG8.src, altText: "GLOG8 logo", title: "GLOG8", linkURL: "/products/glog/glog8" },
    ];

    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                    G-Log
                </h1>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>

                <div className="mt-10 w-[75%] max-md:w-full mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {productGlog.map((image, index) => (
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