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

  // Google Maps embed URL
  // IMPORTANT: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key.
  // It's recommended to load this from an environment variable (e.g., import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
  // and restrict the API key to prevent unauthorized use.
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(companyAddress)}`;

  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      {/* Hero/Intro Section */}
      <section className="py-12 px-4 bg-gray-50"> {/* Reduced py */}
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Reduced gap */}
          {/* Left: Contact Us Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-j2k-black mb-4 uppercase tracking-tight"> {/* Reduced text size and mb */}
              Contact Us
            </h1>
            <p className="text-base font-sans text-gray-700 mb-6 leading-relaxed"> {/* Reduced text size and mb */}
              Email, call, or complete the form to learn how J2K Studios can help capture your precious moments.
            </p>
            <div className="space-y-3 mb-6"> {/* Reduced space-y and mb */}
              <div className="flex items-center text-base"> {/* Reduced text size */}
                <Mail className="h-4 w-4 text-j2k-red mr-2" /> {/* Reduced icon size and mr */}
                <a href={`mailto:${companyEmail}`} className="hover:underline">{companyEmail}</a>
              </div>
              <div className="flex items-center text-base"> {/* Reduced text size */}
                <Phone className="h-4 w-4 text-j2k-red mr-2" /> {/* Reduced icon size and mr */}
                <a href={`tel:${companyPhone}`} className="hover:underline">{companyPhone}</a>
              </div>
              <div className="flex items-start text-base"> {/* Reduced text size */}
                <MapPin className="h-4 w-4 text-j2k-red mr-2 mt-1 flex-shrink-0" /> {/* Reduced icon size and mr */}
                <span>{companyAddress}</span>
              </div>
            </div>

            {/* Removed the support sections */}
          </div>

          {/* Right: Get in Touch Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"> {/* Reduced padding */}
            <h2 className="text-2xl font-bold text-j2k-black mb-3">Get in Touch</h2> {/* Reduced text size and mb */}
            <p className="text-gray-600 mb-4">You can reach us anytime</p> {/* Reduced mb */}
            <form onSubmit={handleSubmit} className="space-y-3"> {/* Reduced space-y */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> {/* Reduced gap */}
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
                  className="rounded-none border-gray-300 focus:border-j2k-red focus:ring-j2k-red min-h-[100px]" {/* Reduced min-h */}
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
                <Label htmlFor="agreeToTerms" className="text-xs text-gray-600"> {/* Reduced text size */}
                  By contacting us, you agree to our <a href="#" className="text-j2k-red hover:underline">Terms of service</a> and <a href="#" className="text-j2k-red hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-base py-2 rounded-none shadow-lg" {/* Reduced text size and py */}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-100"> {/* Reduced py */}
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
          {/* Live Map */}
          <div className="h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="J2K Studios Location"
            ></iframe>
          </div>
          {/* Location Details */}
          <div>
            <h2 className="text-2xl font-bold text-j2k-black mb-3">Our Location</h2> {/* Reduced text size and mb */}
            <p className="text-lg font-semibold text-gray-700 mb-2">Connecting Near and Far</p> {/* Reduced text size */}
            <div className="space-y-2 text-gray-600 text-base"> {/* Reduced text size */}
              <p className="font-semibold">Headquarters</p>
              <p>J2K Studios Inc.</p>
              <p>{companyAddress}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-j2k-white"> {/* Reduced py */}
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-j2k-black mb-6 text-center">Do you have any questions for us?</h2> {/* Reduced text size and mb */}
          <p className="text-base font-sans text-gray-700 mb-6 text-center max-w-2xl mx-auto"> {/* Reduced text size and mb */}
            If you have questions, we're here to help. Below are some common questions, or feel free to reach out directly.
          </p>
          {/* Placeholder for FAQ Accordion */}
          <div className="space-y-3 max-w-3xl mx-auto"> {/* Reduced space-y */}
            <div className="border p-3 rounded-lg shadow-sm"> {/* Reduced padding */}
              <h3 className="font-semibold text-base mb-1">What services do you offer?</h3> {/* Reduced text size and mb */}
              <p className="text-gray-700 text-sm">We offer a wide range of photography services including portraits, events, commercial shoots, and more. Check our 'Services' page for details.</p> {/* Reduced text size */}
            </div>
            <div className="border p-3 rounded-lg shadow-sm"> {/* Reduced padding */}
              <h3 className="font-semibold text-base mb-1">How can I book a session?</h3> {/* Reduced text size and mb */}
              <p className="text-gray-700 text-sm">You can book a session directly through our 'Book a Session' button on the homepage or by contacting us via the form above.</p> {/* Reduced text size */}
            </div>
            <div className="border p-3 rounded-lg shadow-sm"> {/* Reduced padding */}
              <h3 className="font-semibold text-base mb-1">What are your pricing options?</h3> {/* Reduced text size and mb */}
              <p className="text-gray-700 text-sm">Our detailed price list for various packages can be found on the 'Price List' page.</p> {/* Reduced text size */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;