"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { MapPin, Phone, Mail } from 'lucide-react'; // Icons for contact info

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
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }
    // In a real application, you would send this data to your backend
    console.log("Contact form submitted:", formData);
    toast.success("Message sent!", {
      description: "We'll get back to you shortly.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agreeToTerms: false,
    });
  };

  const companyAddress = "45 Nouakchott street, University of Ilorin House, Wuse Zone 1 Abuja";
  const companyPhone = "07040008833";
  const companyEmail = "info@j2kstudios.com"; // Placeholder email

  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      {/* Hero/Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Us Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-j2k-black mb-6 uppercase tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg font-sans text-gray-700 mb-8 leading-relaxed">
              Email, call, or complete the form to learn how J2K Studios can help capture your precious moments.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-lg">
                <Mail className="h-5 w-5 text-j2k-red mr-3" />
                <a href={`mailto:${companyEmail}`} className="hover:underline">{companyEmail}</a>
              </div>
              <div className="flex items-center text-lg">
                <Phone className="h-5 w-5 text-j2k-red mr-3" />
                <a href={`tel:${companyPhone}`} className="hover:underline">{companyPhone}</a>
              </div>
              <div className="flex items-start text-lg">
                <MapPin className="h-5 w-5 text-j2k-red mr-3 mt-1 flex-shrink-0" />
                <span>{companyAddress}</span>
              </div>
            </div>

            {/* Support sections - simplified */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-j2k-black mb-2">Customer Support</h3>
                <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
              </div>
              <div>
                <h3 className="font-semibold text-j2k-black mb-2">Feedback and Suggestions</h3>
                <p>We value your feedback and are continuously working to improve J2K Studios. Your input is crucial.</p>
              </div>
              <div>
                <h3 className="font-semibold text-j2k-black mb-2">Media Inquiries</h3>
                <p>For media-related questions or press inquiries, please contact us directly via email.</p>
              </div>
            </div>
          </div>

          {/* Right: Get in Touch Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-j2k-black mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">You can reach us anytime</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="sr-only">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">Your email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="sr-only">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="message" className="sr-only">How can we help?</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: !!checked }))}
                  className="border-gray-300 data-[state=checked]:bg-j2k-red data-[state=checked]:text-white"
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                  By contacting us, you agree to our <a href="#" className="text-j2k-red hover:underline">Terms of service</a> and <a href="#" className="text-j2k-red hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg py-3 rounded-none shadow-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xl font-semibold shadow-md">
            Map Placeholder
          </div>
          {/* Location Details */}
          <div>
            <h2 className="text-3xl font-bold text-j2k-black mb-4">Our Location</h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">Connecting Near and Far</p>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Headquarters</p>
              <p>J2K Studios Inc.</p>
              <p>{companyAddress}</p>
              <a href="https://maps.app.goo.gl/your-location-link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-j2k-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-j2k-black mb-8 text-center">Do you have any questions for us?</h2>
          <p className="text-lg font-sans text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            If you have questions, we're here to help. Below are some common questions, or feel free to reach out directly.
          </p>
          {/* Placeholder for FAQ Accordion */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What services do you offer?</h3>
              <p className="text-gray-700">We offer a wide range of photography services including portraits, events, commercial shoots, and more. Check our 'Services' page for details.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How can I book a session?</h3>
              <p className="text-gray-700">You can book a session directly through our 'Book a Session' button on the homepage or by contacting us via the form above.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What are your pricing options?</h3>
              <p className="text-gray-700">Our detailed price list for various packages can be found on the 'Price List' page.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;