import Image from "next/image"
import MGK from "../assets/MGK.jpg"
import OrgChart from "../assets/OrgChart.png"

export default function About() {
    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="mt-10 text-4xl font-bold leading-10 text-primary-blue text-center">
                    Company Profile
                </h1>
                <div className="mt-3 text-lg leading-6 text-black text-justify mx-auto w-[68%] max-md:w-full">
                    PT Duta Globalindo Utama as a Authorized for Mettler Toledo Retail products since 2010, which head
                    quarter in SWITZERLAND, as speciality in Food Retail Scale, We are not just sell equipment but as a
                    service center, provide spare part, and continuing maintenance for Indonesian Market.
                </div>
                <div className="mt-5 max-w-full">
                    <Image src={MGK} alt="MGK" />
                </div>
                <div className="mt-1.5 text-lg leading-6 text-black text-center mx-auto w-[68%] max-md:w-full italic">
                    Marketing & Service Center in MGK Kemayoran Jakarta
                </div>
                <div className="mt-14 text-lg leading-6 text-black text-justify mx-auto w-[68%] max-md:w-full">
                    METTLER TOLEDO is a global manufacturer and marketer of precision instruments for use in retail,
                    laboratory, industrial and food retailing applications. The Company has strong worldwide leadership
                    positions. A significant majority of instrument sales are in segments in which are the global leader. In
                    addition to a broad product offering, and have one of the largest global sales & service organizations
                    among precision instrument companies.
                </div>
                <div className="mt-5 text-lg leading-6 text-black text-justify mx-auto w-[68%] max-md:w-full">
                    We are focus on the high value-added segments of our markets by providing innovative instruments
                    that often integrate various technologies including application-specific solutions for customers. We
                    design our instruments not only to gather valuable data but also to facilitate the processing and transfer
                    of this data into customers&#39; management information systems.
                </div>
                <div className="mt-5 text-lg leading-6 text-black text-justify mx-auto w-[68%] max-md:w-full">
                    Since our customer based in Retail, mostly in Supermarket, to develop our retail market, we are provide
                    product for Hypermarket, Supermarket, Meat shop, Fresh shop, Restaurant, Department Store, Book
                    store, Hardware store, and any shop that need product for selling. That way we provided Digital Scale,
                    POS, Cash Register, Printer, Customer display, Cash drawer, Scanner, PDA, PDT, etc.
                </div>
                <div className="mt-5 text-center text-3xl font-semibold mb-4 text-primary-blue mx-auto w-[68%] max-md:w-full">
                    Our Group of Companies
                    <Image src={OrgChart} alt="OrgChart" className="mt-5"/>
                </div>
                <div className="mt-10 w-[68%] max-md:w-full mx-auto">
                    <div>
                        <h3 className="text-center text-3xl font-semibold mb-4 text-primary-blue">Our Report</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-4 rounded-lg text-center border-gray-300 border-2">
                                <p className="text-3xl font-bold text-primary-blue">2,000,000+</p>
                                <p className="text-sm text-secondary-black">Customers</p>
                            </div>
                            <div className="p-4 rounded-lg text-center border-gray-300 border-2">
                                <p className="text-3xl font-bold text-primary-blue">$50M</p>
                                <p className="text-sm text-secondary-black">Annual Sales</p>
                            </div>
                            <div className="p-4 rounded-lg text-center border-gray-300 border-2">
                                <p className="text-3xl font-bold text-primary-blue">30</p>
                                <p className="text-sm text-secondary-black">Branches</p>
                            </div>
                            <div className="p-4 rounded-lg text-center border-gray-300 border-2">
                                <p className="text-3xl font-bold text-primary-blue">200</p>
                                <p className="text-sm text-secondary-black">Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}