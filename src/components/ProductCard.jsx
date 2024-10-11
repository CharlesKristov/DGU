
function ProductCard({ imageSrc, altText, title, linkURL }) {
    return (
        <a href={linkURL} className="text-decoration-none">
            <div className="flex overflow-hidden flex-col grow justify-center items-center w-full text-2xl font-bold leading-10 text-center rounded-lg border border-gray-200 border-solid text-primary-blue max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src={imageSrc} alt={altText} className="top-0 w-full aspect-[1.62] max-md:max-w-full" />
                <div className="pb-px">{title}</div>
            </div>
        </a>
    );
}

export default ProductCard;