"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';
import { toast } from "sonner";

interface BookAppointmentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookAppointmentDialog: React.FC<BookAppointmentDialogProps> = ({ isOpen, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/xjgebrwq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: `New Appointment Booking Request from ${formData.name} for ${formData.date}`
      }),
    });

    if (response.ok) {
      toast.success("Appointment Request Sent!", {
        description: "We'll contact you soon to confirm your session.",
      });
      onOpenChange(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      });
    } else {
      toast.error("Failed to send request. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-j2k-white text-j2k-black border-j2k-red border-2 p-6 md:p-8 max-w-[95vw] sm:max-w-md md:max-w-lg rounded-none overflow-y-auto max-h-[90vh]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-script text-j2k-red mb-2">Book a Session</DialogTitle>
          <DialogDescription className="text-j2k-black text-lg font-sans">
            Schedule your photography session with us
          </DialogDescription>
        </DialogHeader>
        <form 
          onSubmit={handleSubmit} 
          action="https://formspree.io/f/xjgebrwq"
          method="POST"
          className="grid gap-5 py-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-j2k-black font-bold uppercase text-xs tracking-widest">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none h-12"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-j2k-black font-bold uppercase text-xs tracking-widest">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none h-12"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-j2k-black font-bold uppercase text-xs tracking-widest">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone"
                className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none h-12"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-j2k-black font-bold uppercase text-xs tracking-widest">Preferred Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none h-12"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-j2k-black font-bold uppercase text-xs tracking-widest">Session Details</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your session (e.g., location, style, number of people)"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <RippleButton
              type="submit"
              variant="j2kRed"
              className="text-xl px-8 py-6 shadow-lg rounded-none w-full font-bold uppercase tracking-widest"
            >
              Confirm Booking Request
            </RippleButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;