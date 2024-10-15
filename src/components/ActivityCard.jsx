import Image from "next/image";
import Link from "next/link";


const ActivityCard = ({ brandName, storeName, imageSrc, href }) => {


    return (
        <div className="flex flex-col w-full h-full">
            <div className="relative w-full min-h-[355px] rounded-xl shadow-lg overflow-hidden">
                <Image
                    loading="lazy"
                    src={imageSrc}
                    alt={`${storeName}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                    width={"100"}
                    height={"100"}
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
                    {href != "nolink" ? ( // Conditional rendering based on href
                        <Link href={href} className="no-underline text-black self-start px-3.5 py-2 text-xs leading-5 text-center text-black bg-white rounded-lg hover:bg-primary-blue hover:text-white transition-all">
                                See More
                        </Link>
                    ) : (
                        <div className=""></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;