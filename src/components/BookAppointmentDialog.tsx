"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
  const [selectedDate, setSelectedDate] = useState<number | null>(25); // Default to 25th as in image
  const [selectedTime, setSelectedTime] = useState<string | null>("10.00 am - 11.00 am"); // Default to 10-11am

  // Mock data for calendar
  const currentMonth = "June 2025";
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // June has 30 days
  const firstDayOfMonth = 1; // Assuming June 1st is a Sunday for layout purposes in the image

  const getDayStatus = (day: number) => {
    if ([1, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31].includes(day)) return 'available';
    if ([14].includes(day)) return 'limited';
    if ([2, 3, 4, 5, 6, 7].includes(day)) return 'not-available'; // Days before 8th
    return 'available';
  };

  const handleProceedBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your appointment.");
      return;
    }
    // In a real app, you'd send this booking information to your backend
    toast.success("Appointment booked!", {
      description: `Your session on June ${selectedDate}, 2025 at ${selectedTime} is confirmed.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white text-j2k-black p-5 rounded-lg shadow-lg"> {/* Reduced padding, added max-h and overflow */}
        <DialogHeader className="border-b pb-3 mb-3"> {/* Reduced padding/margin */}
          <DialogTitle className="text-2xl font-bold text-center">Book Your Session</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Reduced gap */}
          {/* Date Selection */}
          <div>
            <Label className="text-lg font-semibold mb-3 block">Date:</Label> {/* Reduced margin */}
            <div className="flex items-center justify-between mb-3"> {/* Reduced margin */}
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-medium">{currentMonth}</span>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm text-center"> {/* Reduced gap */}
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
            <div className="flex justify-center space-x-4 mt-3 text-sm"> {/* Reduced margin */}
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

          {/* Time Selection */}
          <div>
            <Label className="text-lg font-semibold mb-3 block">Time:</Label> {/* Reduced margin */}
            <RadioGroup value={selectedTime || ""} onValueChange={setSelectedTime} className="space-y-2">
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="09.00 am - 10.00 am" id="t1" className="text-j2k-red" />
                <Label htmlFor="t1" className="font-normal">09.00 am - 10.00 am</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="10.00 am - 11.00 am" id="t2" className="text-j2k-red" />
                <Label htmlFor="t2" className="font-normal">10.00 am - 11.00 am</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="11.00 am - 12.00 pm" id="t3" className="text-j2k-red" />
                <Label htmlFor="t3" className="font-normal">11.00 am - 12.00 pm</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="01.00 pm - 02.00 pm" id="t4" className="text-j2k-red" />
                <Label htmlFor="t4" className="font-normal">01.00 pm - 02.00 pm</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="02.00 pm - 03.00 pm" id="t5" className="text-j2k-red" />
                <Label htmlFor="t5" className="font-normal">02.00 pm - 03.00 pm</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="03.00 pm - 04.00 pm" id="t6" className="text-j2k-red" />
                <Label htmlFor="t6" className="font-normal">03.00 pm - 04.00 pm</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <RadioGroupItem value="04.00 pm - 05.00 pm" id="t7" className="text-j2k-red" />
                <Label htmlFor="t7" className="font-normal">04.00 pm - 05.00 pm</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <DialogFooter className="mt-6"> {/* Reduced margin */}
          <Button
            className="w-full bg-j2k-red hover:bg-j2k-red/80 text-white text-lg py-3 rounded-full"
            onClick={handleProceedBooking}
          >
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;