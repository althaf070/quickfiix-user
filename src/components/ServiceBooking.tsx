
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

import DatePicker from "@/components/ui/datepicker"; 
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  date: z.date(),
  message: z.string(),
  payment: z.string()
});

interface BookingProps {
  closeDialog: () => void;
}

export default function ServiceBookingForm({ closeDialog }: BookingProps) {

  const navigate= useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });



  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("date", values.date.toLocaleDateString())
      formData.append("message", values.message);
      formData.append("payment", values.payment);


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
