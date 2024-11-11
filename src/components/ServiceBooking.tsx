
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
import { useNavigate, useParams } from "react-router-dom";
import { useBookingStore } from "@/store/bookingsStore";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  appointmentDate: z.date(),
  notes: z.string(),
  payment: z.string(),
});

interface BookingProps {
  closeDialog: () => void;
}

export default function ServiceBookingForm({ closeDialog }: BookingProps) {
const {createAppointment,error,isLoading} =useBookingStore()
const {id}=useParams()
  const navigate= useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      appointmentDate: new Date(),
      notes: '',
      payment:''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {appointmentDate,notes,payment}=values
    try {
      if(id){
        await createAppointment(id,appointmentDate,notes,payment)
          closeDialog();
          navigate('/appointments')
      }
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
          name="appointmentDate"
          render={({ field }) => (
            <FormItem>
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
          name="notes"
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
                  <SelectItem value="cash">Cash on delivery</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
{error && <p>{error}</p>}
        <Button type="submit" disabled={isLoading}>{isLoading ? <Loader2 className="animate-spin" size={24}/>:"Submit"}</Button>
      </form>
    </Form>
  );
}
