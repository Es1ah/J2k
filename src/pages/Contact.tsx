"use client";

import React, { useState } from 'react';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { MapPin, Phone, Mail } from 'lucide-react';
import MapComponent from '@/components/MapComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    const response = await fetch("https://formspree.io/f/xjgebrwq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`
      }),
    });

    if (response.ok) {
      toast.success("Message sent!", {
        description: "We'll get back to you shortly.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      });
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const companyAddress = "Cluster 3. Myles & Deens Light Shopping Complex, River Park Estate, Lugbe, Abuja.";
  const companyPhone = "08113304473";
  const companyEmail = "info@j2kstudios.com";

  const mapCoordinates: [number, number] = [8.9785, 7.3855];

  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-j2k-black mb-4 uppercase tracking-tight">
              Contact Us
            </h1>
            <p className="text-base font-sans text-gray-700 mb-6 leading-relaxed">
              Email, call, or complete the form to learn how J2K Studios can help capture your precious moments.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-base group">
                <div className="p-2 bg-j2k-red/10 rounded-full mr-3 group-hover:bg-j2k-red group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <a href={`mailto:${companyEmail}`} className="hover:text-j2k-red transition-colors">{companyEmail}</a>
              </div>
              <div className="flex items-center text-base group">
                <div className="p-2 bg-j2k-red/10 rounded-full mr-3 group-hover:bg-j2k-red group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <a href={`tel:${companyPhone}`} className="hover:text-j2k-red transition-colors">{companyPhone}</a>
              </div>
              <div className="flex items-start text-base group">
                <div className="p-2 bg-j2k-red/10 rounded-full mr-3 group-hover:bg-j2k-red group-hover:text-white transition-colors mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="max-w-xs">{companyAddress}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none shadow-2xl border-t-4 border-j2k-red animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold text-j2k-black mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'll respond within 24 hours</p>
            <form 
              onSubmit={handleSubmit} 
              action="https://formspree.io/f/xjgebrwq"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-xs uppercase tracking-widest font-bold mb-1 block">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-xs uppercase tracking-widest font-bold mb-1 block">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold mb-1 block">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold mb-1 block">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 ..."
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold mb-1 block">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center space-x-2 py-2">
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: !!checked }))}
                  className="border-gray-300 data-[state=checked]:bg-j2k-red data-[state=checked]:text-white rounded-none"
                />
                <Label htmlFor="agreeToTerms" className="text-xs text-gray-600 leading-tight">
                  I agree to the <a href="#" className="text-j2k-red hover:underline">Terms of service</a> and <a href="#" className="text-j2k-red hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <RippleButton
                type="submit"
                variant="j2kRed"
                className="w-full text-base py-6 rounded-none shadow-lg font-bold uppercase tracking-widest"
              >
                Send Message
              </RippleButton>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 h-[400px] shadow-2xl">
              <MapComponent position={mapCoordinates} popupText="J2K Studios" />
            </div>
            <div className="bg-j2k-black text-j2k-white p-8 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Visit Our Studio</h2>
              <p className="text-gray-400 mb-6">Experience the magic in person at our Abuja headquarters.</p>
              <div className="space-y-4">
                <div>
                  <p className="text-j2k-red font-bold uppercase text-xs tracking-widest mb-1">Address</p>
                  <p className="text-sm">{companyAddress}</p>
                </div>
                <div>
                  <p className="text-j2k-red font-bold uppercase text-xs tracking-widest mb-1">Hours</p>
                  <p className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm">Sun: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;