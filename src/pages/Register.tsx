import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Loader } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { keralaDistricts } from "@/lib/constants";

const registerSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  address: z.string().min(1, { message: "Address is required." }),
  district: z.string().min(1, { message: "District is required." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(15, { message: "Maximum length of password is 15 characters" }),
});

type RegisterValues = z.infer<typeof registerSchema>;

const Register = () => {
  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      district: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterValues> = async (values) => {
    const { username, email, address, district, phoneNumber, password } = values;
    try {
      await signup(username, email, address, district, phoneNumber, password);
      navigate("/login");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <section className="bg-primarydarkgrey flex flex-col justify-center items-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[90%] md:w-[450px] p-1 px-5 rounded-lg shadow-2xl bg-primarygrey">
          
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your User Name" {...field} className="text-darkOlive" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your email" {...field} className="text-darkOlive" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Address" {...field} className="text-darkOlive" />
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
                <FormLabel>District</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your service location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {keralaDistricts.map(item => (
                    <SelectItem key={item} value={item} className="capitalize">{item}</SelectItem>
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
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Phone Number" {...field} className="text-darkOlive" type="tel" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Password" {...field} className="text-darkOlive" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <p className="text-fieryOrange font-semibold mt-2">{error}</p>}

          <Button type="submit" variant={"login"} disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Register"}
          </Button>
        </form>
      </Form>
      <p className="text-base text-silver">Already have an account...? <span className="text-accentgreen underline ml-2"><Link to="/login">Login Now</Link></span></p>
    </section>
  );
};

export default Register;
