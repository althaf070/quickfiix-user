import { Button } from "@/components/ui/button";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReviewForm from "@/components/ReviewForm";
import { IMG_SERVER_URL } from "@/lib/serverurl";
import { Link } from "react-router-dom";

const UsedServices = () => {
  const [open, setOpen] = useState(false);
  
  const { getUsedServices, services } = useServiceStore();
  useEffect(() => {
    getUsedServices()
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
if(services.length == 0)return <div><h1 className="text-4xl font-semibold text-center">You Haven't used any services</h1></div>
  return (
    <div className="grid md:grid-cols-12 items-center">
      {services.map((service) => {
        const providerPic = service.providerId?.profilepic
          ? `${IMG_SERVER_URL}/uploads/${service.providerId?.profilepic}`
          : "https://img.freepik.com/premium-vector/human-daily-activity-concept-vector-illustration_1287274-44583.jpg?semt=ais_hybrid";
        
        return (
          <div
            key={service._id}
            className="w-[16rem] h-[21rem] col-span-3 m-5 bg-primarydarkgrey p-4 rounded-lg shadow-xl mb-2"
          >
            <div className="h-[60%] w-full">
              <img
                className="rounded-lg shadow-md w-full h-full object-cover"
                src={providerPic}
                alt="Provider"
              />
            </div>
            <h1 className="text-lg font-semibold capitalize">
              Provider: {service.providerId?.username}
            </h1>
            <h2 className="text-sm font-semibold capitalize mb-2">
              {service.servicename} Service
            </h2>
            
            {/* Conditional rendering for edit or new review */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={handleOpen} 
                  size="sm"
                >
                  Review
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-primarygrey">
                <DialogTitle>Review Provider</DialogTitle>
                <DialogDescription></DialogDescription>
                <ReviewForm
                  providerId={service.providerId?._id}
                  serviceId={service._id}
                  handleClose={handleClose}
            
                />
              </DialogContent>
            </Dialog>
         
            <Button className="ml-3" variant="login" size="sm">
              <Link to={`/servicedetails/${service._id}`}>View Details</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default UsedServices;
