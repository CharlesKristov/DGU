function ProductCard({ imageSrc, altText, title, linkURL }) {
    return (
        <a href={linkURL} className="text-decoration-none">
            <div className="flex overflow-hidden flex-col grow justify-center items-center w-full h-auto text-2xl font-bold leading-10 text-center rounded-lg border border-gray-200 border-solid text-primary-blue max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src={imageSrc} alt={altText} className="mt-2 w-[300px] aspect-square max-md:max-w-full" />
                <div className="pb-px">{title}</div>
            </div>
        </a>
    );
}

export default ProductCard;