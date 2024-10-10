
import Register from "@/components/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <div className="flex justify-center items-center w-full mt-12 md:m-10">
      <Tabs defaultValue="login" className="md:w-[400px] ">
        <TabsList>
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
       <Register isRegister/>
       <p className="text-md text-silver mt-4 mb-2">Already have account...?</p>
      <TabsList className="bg-accentgreen text-primarycharacoal font-semibold">
      <TabsTrigger value="login" >
      Login
      </TabsTrigger>
      </TabsList>
        </TabsContent>
        <TabsContent value="login">
          <Register/>
          <p className="text-md text-silver mt-4 mb-2">Don't have account...?</p>
      <TabsList className="bg-accentgreen text-primarycharacoal font-semibold">
      <TabsTrigger value="register" >
     Register
      </TabsTrigger>
      </TabsList>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
