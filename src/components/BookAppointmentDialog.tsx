"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface BookAppointmentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookAppointmentDialog: React.FC<BookAppointmentDialogProps> = ({ isOpen, onOpenChange }) => {
  const [consultationType, setConsultationType] = useState<'online' | 'offline'>('online');
  const [selectedDate, setSelectedDate] = useState<number | null>(25); // Default to 25th as in image
  const [selectedTime, setSelectedTime] = useState<string | null>("10.00 am - 11.00 am"); // Default to 10-11am

  // Mock data for calendar and fees
  const currentMonth = "June 2025";
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // June has 30 days
  const firstDayOfMonth = 1; // Assuming June 1st is a Sunday for layout purposes in the image

  const getDayStatus = (day: number) => {
    if ([1, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31].includes(day)) return 'available';
    if ([14].includes(day)) return 'limited';
    if ([2, 3, 4, 5, 6, 7].includes(day)) return 'not-available'; // Days before 8th
    return 'available';
  };

  const feeConsultation = 35.9;
  const tax = 2.0;
  const total = feeConsultation + tax;

  const handleProceedPayment = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your appointment.");
      return;
    }
    // In a real app, you'd integrate with a payment gateway
    toast.success("Appointment booked!", {
      description: `Your ${consultationType} session on June ${selectedDate}, 2025 at ${selectedTime} is confirmed.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white text-j2k-black p-6 rounded-lg shadow-lg">
        <DialogHeader className="border-b pb-4 mb-4">
          <DialogTitle className="text-2xl font-bold text-center">Book Appointment</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-100 p-1 rounded-full">
            <Button
              variant="ghost"
              className={cn(
                "px-6 py-2 rounded-full text-base",
                consultationType === 'offline' ? "bg-white shadow-sm text-j2k-black" : "text-gray-500 hover:bg-gray-200"
              )}
              onClick={() => setConsultationType('offline')}
            >
              Offline
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "px-6 py-2 rounded-full text-base",
                consultationType === 'online' ? "bg-j2k-red text-white shadow-sm" : "text-gray-500 hover:bg-gray-200"
              )}
              onClick={() => setConsultationType('online')}
            >
              Online
            </Button>
          </div>
        </div>

        <div className="mb-6 text-center text-gray-600">
          {consultationType === 'online' ? (
            <p>Online consultation with a doctor<br />The clinic will send an online consultation link to your number. The doctor will be available at the time you choose.</p>
          ) : (
            <p>Offline consultation at the clinic<br />You will receive a confirmation with the clinic address. Please arrive 15 minutes early.</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Date Selection */}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Date:</Label>
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-medium">{currentMonth}</span>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="font-semibold text-gray-500">{day}</div>
              ))}
              {Array.from({ length: firstDayOfMonth - 1 }).map((_, i) => (
                <div key={`empty-${i}`} className="opacity-0"></div>
              ))}
              {daysInMonth.map(day => {
                const status = getDayStatus(day);
                return (
                  <Button
                    key={day}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 w-8 p-0 rounded-full",
                      status === 'available' && "text-green-600 hover:bg-green-100",
                      status === 'limited' && "text-orange-500 hover:bg-orange-100",
                      status === 'not-available' && "text-gray-400 cursor-not-allowed",
                      selectedDate === day && "bg-j2k-red text-white hover:bg-j2k-red/90",
                      selectedDate !== day && status !== 'not-available' && "hover:bg-gray-100"
                    )}
                    onClick={() => status !== 'not-available' && setSelectedDate(day)}
                    disabled={status === 'not-available'}
                  >
                    {day}
                  </Button>
                );
              })}
            </div>
            <div className="flex justify-center space-x-4 mt-4 text-sm">
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1"></span> Available
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-1"></span> Limited
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-gray-400 mr-1"></span> Not Available
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-j2k-red mr-1"></span> Selected
              </div>
            </div>
          </div>

          {/* Time Selection and Payment Summary */}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Time:</Label>
            <RadioGroup value={selectedTime || ""} onValueChange={setSelectedTime} className="space-y-2 mb-8">
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="10.00 am - 11.00 am" id="r1" className="text-j2k-red" />
                <Label htmlFor="r1" className="font-normal">10.00 am - 11.00 am</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="02.00 pm - 03.00 pm" id="r2" className="text-j2k-red" />
                <Label htmlFor="r2" className="font-normal">02.00 pm - 03.00 pm</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="03.00 pm - 04.00 pm" id="r3" className="text-j2k-red" />
                <Label htmlFor="r3" className="font-normal">03.00 pm - 04.00 pm</Label>
              </div>
            </RadioGroup>

            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Fee Consultation</span>
                <span>${feeConsultation.toFixed(1)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(1)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                <span>Total</span>
                <span>${total.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-8">
          <Button
            className="w-full bg-j2k-red hover:bg-j2k-red/80 text-white text-lg py-3 rounded-full"
            onClick={handleProceedPayment}
          >
            Proceed Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;