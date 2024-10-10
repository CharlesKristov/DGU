

function CustomerImage({ src, alt }) {
    return (
        <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain shrink-0 max-w-full aspect-[2] w-[158px]"
        />
    );
}

export default CustomerImage;