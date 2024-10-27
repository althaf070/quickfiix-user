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
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "@/lib/serverurl";
import { getUserIdFromToken } from "@/lib/getUserToken";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { keralaDistricts } from "@/lib/constants";

const formSchema = z.object({
  address: z.string().min(5),
  district:z.string(),
  phoneNumber: z.string().min(10),
});

const ProfileForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      address:"",
      district:"",
      phoneNumber:"",
    }
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {

  const {address,district,phoneNumber} = values
  const userId = getUserIdFromToken(); 
    try {
      const response = await axios.put(`${SERVER_URL}/auth/complete-profile`,{address,district,phoneNumber,userId})
      console.log(response);
      
      navigate("/services");
    } catch (error) {
      console.error("Form submission error", error);
    }
  }
  return (
    <div className="bg-primarydarkgrey flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-4xl ">Complete Your Profile Setup</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl w-[90%] md:w-[450px] p-9 rounded-lg shadow-2xl bg-primarygrey"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                  required
                    placeholder="Enter your address"
                    className="resize-none text-primarycharacoal"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
         <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your service location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {keralaDistricts.map(item => (
                    <SelectItem value={item} className="capitalize">{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Phone No</FormLabel>
                <FormControl className="w-full">
                  <Input placeholder="Enter your phone number" {...field} className=" text-primarycharacoal" required/>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
