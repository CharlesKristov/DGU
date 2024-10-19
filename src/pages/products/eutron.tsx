import ProductsCard from "../../components/ProductsCard";

import CD from "../../assets/Eutron/CD-1.jpg";
import CustomerDisplay from "../../assets/Eutron/Customer-Display.jpg";
import ECR100 from "../../assets/Eutron/ECR-100.png";
import ER220 from "../../assets/Eutron/electronic-cash-register_ER-220.jpg";
import ER260 from "../../assets/Eutron/ER-260_1.jpg";
import NewCashDraw from "../../assets/Eutron/New-cash-draw(2021).jpg";
import WISE158 from "../../assets/Eutron/WISE_158.jpg";

export default function Eutron() {
    const productEutron = [
        { imageSrc: CD.src, altText: "CD logo", title: "CD", linkURL: "/products/eutron/cd" },
        { imageSrc: CustomerDisplay.src, altText: "Customer Display logo", title: "Customer Display", linkURL: "/products/eutron/customer-display" },
        { imageSrc: ECR100.src, altText: "ECR100 logo", title: "ECR100", linkURL: "/products/eutron/ecr100" },
        { imageSrc: ER220.src, altText: "ER220 logo", title: "ER220", linkURL: "/products/eutron/er220" },
        { imageSrc: ER260.src, altText: "ER260 logo", title: "ER260", linkURL: "/products/eutron/er260" },
        { imageSrc: NewCashDraw.src, altText: "New Cash Draw logo", title: "New Cash Draw", linkURL: "/products/eutron/new-cash-draw" },
        { imageSrc: WISE158.src, altText: "WISE158 logo", title: "WISE158", linkURL: "/products/eutron/wise158" },
    ];

    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                    Eutron
                </h1>
                <div className="mt-1.5 text-base leading-6 text-secondary-black text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>

                <div className="mt-10 w-[1200px] max-w-full mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {productEutron.map((image, index) => (
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