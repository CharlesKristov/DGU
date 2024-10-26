import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function RequestForm() {
    const [ticketNumber, setTicketNumber] = useState('')
    const [formData, setFormData] = useState({
        createdBy: '',
        store: '',
        contact: '',
        description: '',
        documentation: '',
    })
    const [, setFile] = useState<File | null>(null)

    useEffect(() => {
        const randomTicket = Math.random().toString(36).substring(2, 7).toUpperCase()
        setTicketNumber(randomTicket)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const recipientEmail = 'djony@dutaglobalindo.com'
        const ccEmail = 'ari@dutaglobalindo.com'
        const subject = `Request form - #${ticketNumber}`
        const body = `
Dibuat oleh: ${formData.createdBy}

Store: ${formData.store}

No. HP/Email: ${formData.contact}

Deskripsi: ${formData.description}

Dokumentasi: 
${formData.documentation}
`.trim()

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&cc=${encodeURIComponent(ccEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, '_blank')

        // Reset form
        setFormData({
            createdBy: '',
            store: '',
            contact: '',
            description: '',
            documentation: '',
        })
        setFile(null)
    }

    return (
        <div className="items-center m-3">
            <h2 className="text-3xl font-bold leading-10 text-primary-blue text-center">
                Request Order Service Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow">
                <div>
                    <Label htmlFor="ticketNumber">Nomor tiket</Label>
                    <Input id="ticketNumber" value={ticketNumber} readOnly />
                </div>
                <div>
                    <Label htmlFor="createdBy">Dibuat oleh *</Label>
                    <Input 
                    id="createdBy" 
                    name="createdBy" 
                    value={formData.createdBy} 
                    onChange={handleInputChange} 
                    required 
                    />
                </div>
                <div>
                    <Label htmlFor="store">Store *</Label>
                    <Input 
                    id="store" 
                    name="store" 
                    value={formData.store} 
                    onChange={handleInputChange} 
                    required 
                    />
                </div>
                <div>
                    <Label htmlFor="contact">No. HP/Email *</Label>
                    <Input 
                    id="contact" 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleInputChange} 
                    required 
                    />
                </div>
                <div>
                    <Label htmlFor="description">Deskripsi *</Label>
                    <Textarea 
                    id="description" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleInputChange} 
                    required 
                    />
                </div>
                <div>
                    <Label htmlFor="documentation">Dokumentasi (Opsional)</Label><br />
                    <Label htmlFor="documentation" className="text-sm text-muted-foreground">* Upload File from Google Drive</Label>
                    <Input
                    id="documentation" 
                    name="documentation" 
                    value={formData.documentation} 
                    onChange={handleInputChange}
                    />
                </div>
                <Button type="submit" className="w-full bg-primary-blue">Submit Request</Button>
            </form>
        </div>
    )
}