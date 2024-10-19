import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // Import useSession and signOut

import logo from "../assets/logo.png";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession(); // Use useSession to get session data

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white-800 border-b h-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={handleMobileMenuToggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center md:items-end md:justify-center md:align-center">
              <div className="flex flex-shrink-0 items-center mt-2">
                <Link href={"/"}>
                  <Image alt="DGU Logo" src={logo} height={"50"} />
                </Link>
              </div>

              <div className="hidden md:ml-6 md:flex md:align-center md:items-center">
                <div className="flex space-x-4 justify-center text-center">
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"/#products"}
                  >
                    Products
                  </Link>
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"#"}
                  >
                    Spareparts
                  </Link>
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"/service-support"}
                  >
                    Service & Support
                  </Link>
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"/activities"}
                  >
                    Activity
                  </Link>
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"#"}
                  >
                    About
                  </Link>
                  <Link
                    className="relative px-1 text-sm font-medium text-gray-800 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300"
                    href={"/contact-us"}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="flex space-x-4 justify-center text-center pl-3">
                  <Link href={"#"} className="relative rounded-md bg-gray-700 px-2 py-2 text-white text-sm font-small text-gray-600 no-underline before:absolute before:bottom-0 before:left-0 before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition before:duration-300 hover:bg-gray-600 active:bg-gray-800">
                    Request Form
                  </Link>
                </div>

                {/* User details if logged in */}
                {session && session.user && session.user.role === "admin" && (
                  
                  <div className="flex items-center space-x-4 pl-4">
                    <Image
                      src={session.user.image || "/default-profile.png"}
                      alt="Profile Picture"
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-800 mb-0">{session.user.name}</p>
                      <Link href="/admin" className="text-sm text-blue-500 mb-0">Admin Page</Link>
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                )}

                
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="absolute w-100 z-50 md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-800">
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                Products
              </Link>
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                Spareparts
              </Link>
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                Service & Support
              </Link>
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                Activity
              </Link>
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block rounded px-3 text-white pb-3 text-base font-medium text-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
