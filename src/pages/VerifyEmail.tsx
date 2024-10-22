import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
const FormSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters."
  })
});

const VerifyEmail = () => {
    const naviagate = useNavigate()
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        code: ""
      }
    });
  
    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
      naviagate("/services")
    }
  
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md w-full bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primarydarkgrey bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Verify Your Email
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Enter the 6-digit code sent to your email address.
            </p>
  
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Please enter the one-time password sent to your email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant={"login"}>Submit</Button>
              </form>
            </Form>
           <Link to={"/services"}><Button className="mt-3" variant={"destructive"}>Skip Verification</Button></Link>
           <p className="text-silver text-sm font-semibold">You can later verify your email address</p>
          </div>
        </div>
      </div>
    );
 };
  
  

export default VerifyEmail;
