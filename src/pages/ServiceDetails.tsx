import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ServiceBookingForm from "@/components/ServiceBooking";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
const {id} = useParams()
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="grid ml-4 md:grid-cols-12 my-10">
      <div className="col-span-2">
        <h1 className="text-6xl">{id}</h1>
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
                className="bg-primarygrey px-4  py-2 rounded-lg cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
              >
                Book
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
        </div>
        <h1 className="text-4xl">Ratings & Reviews</h1>
        <h1 className="text-lg">Total Ratings</h1>
        <p>comments</p>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ServiceDetails;
