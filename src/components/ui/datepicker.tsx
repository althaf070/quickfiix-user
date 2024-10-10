import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, isBefore, startOfToday } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  const today = startOfToday();  // Start of today, to disable past dates

  const handleDateChange = (date: Date | undefined) => {
    // Prevent selecting past dates
    if (date && isBefore(date, today)) {
      return;
    }
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    // Confirm the selected date and close the popover
    onChange(selectedDate);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal text-primarygrey",
            !selectedDate && "text-primarycharacoal"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            fromDate={today} // Disable previous dates
            initialFocus
          />
          <div className="mt-2 flex justify-end">
            <Button onClick={handleConfirm} className="ml-2">
              Confirm
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
