import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";

import DatePicker from "@/components/ui/datepicker"; // Import the new DatePicker component
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  time: z.string(),
  date: z.date(),
  message: z.string(),
  img: z.any().optional(),
  payment: z.string()
});

interface BookingProps {
  closeDialog: () => void;
}

export default function ServiceBookingForm({ closeDialog }: BookingProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate= useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    form.setValue("img", file);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("time", values.time);
      formData.append("date", values.date.toLocaleDateString())
      formData.append("message", values.message);
      formData.append("payment", values.payment);

      if (selectedFile) {
        formData.append("img", selectedFile);
      }

      console.log(values, "values");
      console.log(formData.get("img"));
      console.log("submitted");

      closeDialog();
      navigate('/appointments')
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 mb-5"
      >
        {/* Time Field */}
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Preferred time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time Slot" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Any">Any (9Am- 6 PM)</SelectItem>
                  <SelectItem value="morning">
                    Morning (8 AM - 12 PM)
                  </SelectItem>
                  <SelectItem value="afternoon">
                    Afternoon (12 PM - 4 PM)
                  </SelectItem>
                  <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date Field */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="mr-2">Select Your Preferred Date</FormLabel> */}
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={(date) => field.onChange(date)} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What services are you expecting from us?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter services you need briefly..."
                  className="resize-none text-primarycharacoal"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* File Upload Field */}
        <FormField
          control={form.control}
          name="img"
          render={() => (
            <FormItem>
              <FormLabel>Upload an Image</FormLabel>
              <FormControl>
                <Input type="file" onChange={onFileChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Payment Method Field */}
        <FormField
          control={form.control}
          name="payment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Payment Method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cod">Cash on delivery</SelectItem>
                  <SelectItem value="credit Card">Credit Card</SelectItem>
                  <SelectItem value="paypal">Paypal</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
