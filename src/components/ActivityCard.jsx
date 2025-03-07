import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ActivityCard = ({ brandName, storeName, imageSrc, href }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="relative w-full min-h-[425px] rounded-xl shadow-lg overflow-hidden cursor-pointer" onClick={openModal}>
                <Image
                    loading="lazy"
                    src={imageSrc}
                    alt={storeName}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
                <div className="absolute inset-0 bg-black opacity-25" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                        <div className="text-xs font-semibold tracking-wider leading-3 uppercase text-neutral-100">
                            {brandName}
                        </div>
                        <h2 className="text-lg font-bold leading-7 text-white mt-2">
                            {storeName}
                        </h2>
                    </div>
                    {href !== "nolink" ? (
                        <Link href={href} className="no-underline text-black self-start px-3.5 py-2 text-xs leading-5 text-center bg-white rounded-lg hover:bg-primary-blue hover:text-white transition-all">
                            See More
                        </Link>
                    ) : null}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <div className="relative p-4 max-w-3xl mx-auto w-full max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-300"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        <Image src={imageSrc} alt={storeName} width={1000} height={1000} className="rounded-lg w-full h-auto max-h-[85vh] object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityCard;