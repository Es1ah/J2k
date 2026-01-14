"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false); // To ensure it only shows once per session

  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 8000); // Trigger after 8 seconds

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollDepth = scrollY / (documentHeight - windowHeight);

      if (scrollDepth > 0.5 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        clearTimeout(timer); // Clear timer if scroll depth triggers it first
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleSubscribe = () => {
    if (email) {
      // In a real application, you would send this email to your backend
      console.log("Subscribed email:", email);
      toast.success("Thank you for subscribing!", {
        description: "You'll receive exclusive updates and 10% off your first session.",
      });
      setIsOpen(false);
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-j2k-black text-j2k-white border-j2k-white border-2 p-6 max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-script text-j2k-red mb-2">Join the J2K Inner Circle</DialogTitle>
          <DialogDescription className="text-j2k-white text-base font-sans">
            Receive exclusive updates and 10% off your first session.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            className="col-span-3 bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <DialogFooter className="flex justify-center">
          <Button
            type="submit"
            className="bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg px-8 py-2 rounded-full shadow-lg"
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCapturePopup;