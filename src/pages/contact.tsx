import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react';

export default function ContactUs() {
    return (
        <>
            <div className="flex flex-col items-center m-3">
                <h1 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                    Contact Us
                </h1>
            </div>
            <div className="w-[900px] max-w-full mx-auto my-auto">
                <form className="bg-white shadow rounded-lg p-6 mb-10 max-md:mx-3">
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="block text-sm font-medium text-black">Name</Label>
                            <Input id="name" placeholder="Your Name" required className="mt-1" />
                        </div>
                        <div>
                            <Label htmlFor="email" className="block text-sm font-medium text-black">Email</Label>
                            <Input id="email" type="email" placeholder="Your Email" required className="mt-1" />
                        </div>
                        <div>
                            <Label htmlFor="message" className="block text-sm font-medium text-black">Message</Label>
                            <Textarea id="message" placeholder="How can we help you?" required className="mt-1" rows={4} />
                        </div>
                        <Button type="submit" className="submitbutton w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-blue">
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}