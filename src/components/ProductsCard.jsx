import React from 'react';
import Image from 'next/image';

const ProductCard = ({ imageSrc, altText, title, linkURL }) => {
    return (
        <a href={linkURL} className="block text-decoration-none text-primary-blue">
        <div className="flex flex-col items-center w-full border border-gray-200 rounded-lg">
            <div className="relative w-[300px] h-[300px]">
            <Image
                src={imageSrc}
                alt={altText}
                fill
                sizes="300px"
                className="object-contain mt-2"
                priority={false}
            />
            </div>
            <div className="py-4 text-2xl font-bold text-center">
            {title}
            </div>
        </div>
        </a>
    );
};

export default ProductCard;