import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import ServiceBookingForm from "@/components/ServiceBooking";
// import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Reviews";
import { Link, useParams } from "react-router-dom";
import { Services, useServiceStore } from "@/store/serviceStore";
import { IMG_SERVER_URL } from "@/lib/serverurl";
import { ArrowLeftCircle } from "lucide-react";
import { useReviewStore } from "@/store/reviewStore";

const ServiceDetails = () => {
  const { id } = useParams();
  const { getServicesById } = useServiceStore();
  const {reviews,topRatedReviews} =useReviewStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviewFeild, setReviewFeild] = useState(false);
  const [service, setService] = useState<Services | null>(null);
  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  const getService = async () => {
    try {
      if (id) {
        const response = await getServicesById(id);
        setService(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getService();
  }, [id]);

  useEffect(() => {
    if (service?.providerId?._id) {
      topRatedReviews(service.providerId._id); 
    }
  }, [service]);
  return (
    <>
      <Link to={'..'} className="ml-6 mt-2"><Button size={"icon"}><ArrowLeftCircle/></Button></Link>
      <div className="grid grid-cols-1 ml-4 md:grid-cols-12 my-10 overflow-hidden">
        <div className="col-span-2"></div>
        <div className="md:col-span-4">
          <Card className="w-[22rem] bg-primarydarkgrey text-white">
            <div>
              <img
                src={`${IMG_SERVER_URL}/uploads/${service?.providerId?.profilepic}`}
                alt={`${
                  service?.providerId?.username || "Default"
                }'s profile picture`}
                className="w-full rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://img.freepik.com/free-vector/flat-design-locksmith-character_23-2147728354.jpg"; //backup image
                }}
              />
            </div>
            <CardContent>
              <h3 className="text-lg font-semibold mt-1 capitalize">
                Provider Name:{service?.providerId?.username}
              </h3>
              <h4>Service Type: {service?.servicename}</h4>
              <p>Price/hr ₹:{service?.price}</p>
            </CardContent>
            <CardFooter>
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

                  <ServiceBookingForm closeDialog={closeDialog}/>
                </DialogContent>
              </Dialog>
              <Button
                className="ml-4 bg-destructive hover:bg-darkOlive"
                size={"icon"}
              >
                
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4">
          <div className="m-5">
            <h1 className="text-4xl">About Service</h1>
            <p className="text-pretty">Service Description:<br/>{service?.description}</p>
            <div className="flex gap-3 my-4">
              <div className="md:p-6 p-2 bg-primarygrey rounded-xl shadow-lg">
                <h1 className="text-2xl lg:text-5xl text-center font-bold">
                  1000
                </h1>
                <p>Total services Completed</p>
              </div>
              <div className="md:p-6 p-2 bg-primarygrey rounded-xl shadow-lg">
                <h1 className="text-2xl lg:text-5xl text-center font-bold">
                  10
                </h1>
                <p>Customers Favourted</p>
              </div>
              <div className="md:p-6 p-2 bg-primarygrey rounded-xl shadow-lg">
                <h1 className="text-2xl lg:text-5xl text-center font-bold">
                  49%
                </h1>
                <p>Customer Satatisfication</p>
              </div>
            </div>
            {/* Message section */}
            {/* <Dialog>
              <DialogTrigger className="bg-chart-1 px-4  py-2 rounded-lg cursor-pointer">
                Message Now
              </DialogTrigger>
              <DialogContent className="bg-primarygrey ">
                <DialogHeader>
                  <DialogTitle>Chat With Your provider</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <Message providerId={id ?? ''}/>
              </DialogContent>
            </Dialog> */}
          </div>
          <h1 className="text-4xl">Ratings & Reviews</h1>
          <h1 className="text-lg">Total Ratings</h1>
          <h1 className="text-lg">Average Ratings</h1>
        </div>
        <div className="col-span-2"></div>
      </div>

      <h1 className="text-2xl lg:text-4xl font-semibold text-center">
        Testimonials
      </h1>
    {/* review section  */}
     <div className="flex justify-center gap-4 mx-4">
  {reviews.length > 0 ? (
    reviews.map((review) => (
      <Card className="bg-primarygrey col-span-2" key={review._id}>
        <CardHeader className="text-xl font-semibold text-silver capitalize">
        Commented By: {review.userId.username}
        </CardHeader>
        <CardDescription className="text-[20px] font-semibold text-offwhite ml-3 mb-2">
          {review.feedback}
        </CardDescription>
        <CardContent className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <MdStarRate className="text-[#F0A500]" size={18} key={i} />
          ))}
        </CardContent>
      </Card>
    ))
  ) : (
    <p className=" text-center">No Reviews Available</p>
  )}
</div>

      {/* section for more reviews */}
      <div className="text-center mt-3">
        <Button onClick={() => setReviewFeild(!reviewFeild)}>
          View More Reviews
        </Button>
        {reviewFeild && (
          <div className="mt-4 h-72 bg-primarygrey md:w-[40%] rounded-lg shadow-lg  flex flex-col transform transition-all duration-900 ease-in-out translate-y-0 opacity-100 animate-slideDown mx-auto">
          {service?.providerId?._id && (
  <Reviews providerId={service.providerId._id} />
)}

          </div>
        )}
      </div>
      {/* other similiar provider  */}
      <h1 className="text-3xl font-semibold text-center mt-4">
        Other Simialer Service Providers section
      </h1>
    </>
  );
};

export default ServiceDetails;
