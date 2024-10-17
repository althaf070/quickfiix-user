import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(5,{
    message: "Password must be at least 5 characters"
  }).max(15, {
    message: "Maximum length of password is 15 characters"
  })
});

type FormValues = z.infer<typeof formSchema>;
interface RegisterProps {
  isRegister?:boolean;
}
const Register = ({isRegister}:RegisterProps) => {
const navigate = useNavigate()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email:"",
      username:"",
      password:""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
    navigate('/profile-form')
  };

  return (
    <section className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         {isRegister && (
           <FormField
           control={form.control}
           name="username"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Username</FormLabel>
               <FormControl>
                 <Input placeholder="Enter Your User Name" {...field} className="text-darkOlive"/>
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
           )}
         />
         )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your email"  {...field} className="text-darkOlive" type="email"/>
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
                  <Input placeholder="Enter Your password" {...field} className="text-darkOlive" type="password"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
       
          <Button type="submit" variant={"login"}>{isRegister ? "Register":"Login"}</Button>
        </form>
      </Form>
    </section>
  );
};

export default Register;
