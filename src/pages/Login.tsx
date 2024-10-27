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


const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, {
      message: "Password must be at least 5 characters",
    })
    .max(15, {
      message: "Maximum length of password is 15 characters",
    }),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginValues> = async (values) => {
    const { email, password } = values;
    try {
      await login(email, password);
      navigate("/services");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <section className="bg-primarydarkgrey flex flex-col justify-center items-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[90%] md:w-[450px] p-9 rounded-lg shadow-2xl bg-primarygrey">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your email"
                    {...field}
                    className="text-darkOlive"
                    type="email"
                  />
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
                  <Input
                    placeholder="Enter Your password"
                    {...field}
                    className="text-darkOlive"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <p className="text-fieryOrange font-semibold mt-2">{error}</p>
          )}
          <Button type="submit" variant={"login"} disabled={isLoading}>
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <p className="text-base text-silver">Don't have account...? <span className="text-accent underline ml-2 text-darkOlive"> <Link to={"/register"}>Register Now</Link></span></p>
     
    </section>
  );
};

export default Login;
