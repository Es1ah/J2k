"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/xojnawjw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: `New Appointment Booking Request from ${formData.name}`
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
        message: '',
      });
    } else {
      toast.error("Failed to send request. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-j2k-white text-j2k-black border-j2k-red border-2 p-6 max-w-sm rounded-none">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-script text-j2k-red mb-2">Book a Session</DialogTitle>
          <DialogDescription className="text-j2k-black text-base font-sans">
            Schedule your photography session with us
          </DialogDescription>
        </DialogHeader>
        <form 
          onSubmit={handleSubmit} 
          action="https://formspree.io/f/xojnawjw"
          method="POST"
          className="grid gap-4 py-4"
        >
          <div>
            <Label htmlFor="name" className="text-j2k-black">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-j2k-black">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-j2k-black">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-j2k-black">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your session"
              className="bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none min-h-[100px]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <RippleButton
              type="submit"
              variant="j2kRed"
              className="text-lg px-8 py-2 shadow-lg rounded-none w-full"
            >
              Book Session
            </RippleButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;