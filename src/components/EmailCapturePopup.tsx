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
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { toast } from "sonner";

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 8000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollDepth = scrollY / (documentHeight - windowHeight);

      if (scrollDepth > 0.5 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (email) {
      const response = await fetch("https://formspree.io/f/xjgebrwq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Newsletter Subscription"
        }),
      });

      if (response.ok) {
        toast.success("Thank you for subscribing!", {
          description: "You'll receive exclusive updates and 10% off your first session.",
        });
        setIsOpen(false);
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-j2k-black text-j2k-white border-j2k-white border-2 p-6 max-md rounded-none">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-script text-j2k-red mb-2">Join the J2K Inner Circle</DialogTitle>
          <DialogDescription className="text-j2k-white text-base font-sans">
            Receive exclusive updates and 10% off your first session.
          </DialogDescription>
        </DialogHeader>
        <form 
          onSubmit={handleSubscribe}
          action="https://formspree.io/f/xjgebrwq"
          method="POST"
          className="grid gap-4 py-4"
        >
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            className="col-span-3 bg-j2k-white text-j2k-black border-j2k-red focus:ring-j2k-red rounded-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-center mt-2">
            <RippleButton
              type="submit"
              variant="j2kRed"
              className="text-lg px-8 py-2 shadow-lg rounded-none w-full"
            >
              Subscribe
            </RippleButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCapturePopup;