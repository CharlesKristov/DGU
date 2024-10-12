import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer class="bg-white-800 border-t h-80 p-5">
        <div class="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex w-full flex-col items-start justify-center md:items-start md:justify-center md:align-center">
                    <div className="flex mb-9">
                        <Image alt="DGU Logo" src={logo}  height={"90"}/>
                    </div>
                    <div className="flex w-full flex-col md:flex-row justify-between mb-6">
                        <div className="flex md:w-1/2 mb-2">
                            <p className="font-small text-justify">
                            PT Globalindo Utama is an authorized dealer of Mettler Toledo, Honeywell, Eutron, and G-LOG, providing top-quality weighing systems, automation, and industrial equipment for various industries across Indonesia.
                            </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                            <Link href={"/#products"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">Products</Link>
                            <Link href={"#"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">Spareparts</Link>
                            <Link href={"#"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">Service & Support</Link>
                            <Link href={"#"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">Activity</Link>
                            <Link href={"#"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">About Us</Link>
                            <Link href={"#"} className="rounded px-3 text-black pb-2  no-underline font-sm text-gray-800 relative pb-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">Contact Us</Link>
                        </div>
                    </div>
                    <div className="font-small pb-9">
                        <p>Copyright © 2024 CC-BA</p>
                    </div>
                    
                </div>
            </div> 
        </div>
      </footer>
    </>
  );
}
