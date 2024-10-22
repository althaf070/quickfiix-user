import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ServiceBookingForm from "@/components/ServiceBooking";
// import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import Message from "@/components/Message";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ProviderCard from "@/components/ProviderCard";
import { GiSelfLove } from "react-icons/gi";

const ServiceDetails = () => {
// const {id} = useParams()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviewFeild, setReviewFeild] = useState(false)

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>    <div className="grid ml-4 md:grid-cols-12 my-10">
      <div className="col-span-2">
      </div>
      <div className="col-span-4">
        <Card className="w-[22rem] bg-primarydarkgrey text-white">
          <div>
            <img
              src="https://e7.pngegg.com/pngimages/60/583/png-clipart-man-holding-gray-laptop-car-kia-motors-auto-mechanic-automobile-repair-shop-motor-vehicle-service-mechanic-engineer-expert.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <CardContent>
            <h3 className="text-lg font-semibold mt-1">Title</h3>
            <h4>Service Type</h4>
            <p>Price</p>
          </CardContent>
          <CardFooter>
            {/* Step 2: Control the dialog's open state */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger
                className="bg-foreground px-4  py-2 rounded-lg cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
              >
                Book Now
              </DialogTrigger>
              <DialogContent className="bg-primarygrey ">
                <DialogHeader>
                  <DialogTitle>Book your service now</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                {/* Step 3: Pass the closeDialog function to the form */}
                <ServiceBookingForm closeDialog={closeDialog} />
              </DialogContent>
            </Dialog>
            <Button className="ml-4 bg-destructive hover:bg-darkOlive" size={"icon"} cl><GiSelfLove/></Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-4">
        <div className="m-5">
          <h1 className="text-4xl">About Services</h1>
          <p>
            desc: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
            laborum?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Autem saepe quaerat molestias quis consectetur facilis asperiores
            nesciunt natus ut temporibus?
          </p>
          <div className="flex gap-3 my-4">
          <div className="p-6 bg-primarygrey rounded-xl shadow-lg">
            <h1 className="text-4xl text-center font-bold">1000</h1>
            <p>Total services Completed</p>
          </div>
          <div className="p-6 bg-primarygrey rounded-xl shadow-lg">
            <h1 className="text-4xl text-center font-bold">10</h1>
            <p>Customers Favourted</p>
          </div>
          <div className="p-6 bg-primarygrey rounded-xl shadow-lg">
            <h1 className="text-4xl lg:text-5xl text-center font-bold">49%</h1>
            <p>Customer Satatisfication</p>
          </div>
         
          </div>
          <Dialog>
              <DialogTrigger
                className="bg-chart-1 px-4  py-2 rounded-lg cursor-pointer"
              >
               Message Now
              </DialogTrigger>
              <DialogContent className="bg-primarygrey ">
                <DialogHeader>
                  <DialogTitle>Chat With Your provider</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <Message/>
              </DialogContent>
            </Dialog>
        </div>
        <h1 className="text-4xl">Ratings & Reviews</h1>
        <h1 className="text-lg">Total Ratings</h1>
        <h1 className="text-lg">Average Ratings</h1>
        <h3>Reviews</h3>
      </div>
      <div className="col-span-2"></div>
    </div>

    <h1 className="text-2xl lg:text-4xl font-semibold text-center">Testimonials</h1>

    <div className="grid md:grid-cols-8 gap-4 mx-4">
      <div className="col-span-1"></div>
          <Card className="bg-primarygrey col-span-2">
            <CardHeader className="text-xl font-semibold text-silver">Commenter name</CardHeader>
            <CardDescription className="text-[16px] font-semibold text-offwhite ml-3 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?</CardDescription>
            <CardContent className="flex gap-1" >
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
            </CardContent>
          </Card>
          <Card className="bg-primarygrey col-span-2">
            <CardHeader className="text-xl font-semibold text-silver">Commenter name</CardHeader>
            <CardDescription className="text-[16px] font-semibold text-offwhite ml-3 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?</CardDescription>
            <CardContent className="flex gap-1">
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
            </CardContent>
          </Card>
          <Card className="bg-primarygrey col-span-2">
            <CardHeader className="text-xl font-semibold text-silver">Commenter name</CardHeader>
            <CardDescription className="text-[16px] font-semibold text-offwhite ml-3 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?</CardDescription>
            <CardContent className="flex gap-1">
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
              <MdStarRate className="text-[#F0A500]" size={18}/>
            </CardContent>
          </Card>
          <div className="col-span-1"></div>
        </div>

        {/* section for more reviews */}
        <div className="text-center mt-3">
  <Button onClick={() => setReviewFeild(!reviewFeild)}>
    View More Reviews
  </Button>
  {reviewFeild && (
    <div className="mt-4 h-72 bg-primarygrey w-[40%] rounded-lg shadow-lg mx-auto flex flex-col transform transition-all duration-900 ease-in-out translate-y-0 opacity-100 animate-slideDown">
   <Reviews/>
    </div>
  )}
</div>
{/* other similiar provider  */}
<h1 className="text-3xl font-semibold text-center mt-4">Other Simialer Service Providers</h1>
<Carousel className="m-5 place-items-center">
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/5">
    <ProviderCard/>
    </CarouselItem>
  </CarouselContent>
</Carousel>


    </>

  );
};

export default ServiceDetails;
