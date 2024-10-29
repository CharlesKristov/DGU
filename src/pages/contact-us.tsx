import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });
    
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
    
        const recipientEmail = 'djony@dutaglobalindo.com'
        const ccEmail = 'ari@dutaglobalindo.com'
        const subject = `${formData.subject}`;
        const body = `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&cc=${encodeURIComponent(ccEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, '_blank');
        
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        });
    };

    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-4xl font-bold leading-10 text-primary-blue text-center">
                    Contact Us
                </h1>
            </div>
            <div className="w-[75%] max-md:w-full mx-auto my-auto">
                <div className="bg-white shadow rounded-lg p-6 mb-10 max-md:mx-3">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Get in Touch</h3>
                            <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-2 h-6 w-6 text-primary-blue flex-shrink-0" />
                                <p>PT Duta Globalindo Utama<br />
                                Marketing & Service Center<br />
                                Superblock Mega Glodok Kemayoran (MGK)<br />
                                Jl. Angkasa Kav B6, Ground Floor, Block B1 No. 2-3<br />
                                Jakarta Pusat 10610 - Indonesia</p>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-2 h-6 w-6 text-primary-blue" />
                                <p>Telp: <br />(+62-21) 65866451</p>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-2 h-6 w-6 text-primary-blue" />
                                <p>Hotline: <br />(+62)812-8706-7575, (+62) 81932797575</p>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2 h-6 w-6 text-primary-blue" />
                                <a href="mailto:ari@dutaglobalindo.com" className="hover:text-primary-blue">ari@dutaglobalindo.com</a>
                            </li>
                            <li className="flex items-center">
                                <a href="mailto:djony@dutaglobalindo.com" className="hover:text-primary-blue ml-8">djony@dutaglobalindo.com</a>
                            </li>
                            <li className="flex items-center">
                                <Globe className="mr-2 h-6 w-6 text-primary-blue" />
                                <a href="https://dgu.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue">dgu.co.id</a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Send Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-primary-blue text-white px-6 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}