import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { Services } from "@/store/serviceStore"
import { IMG_SERVER_URL } from "@/lib/serverurl"

const ProviderCard = ({service}:{service:Services}) => {
  return (
    <>
    <Card className="w-[16rem] h-[25rem] bg-primarygrey text-offwhite">
   <div className="h-[60%]">
   <img 
  src={`${IMG_SERVER_URL}/uploads/${service.providerId?.profilepic}`}
  alt={`${service.providerId?.username || "Default"}'s profile picture`} 
  className="w-full rounded-lg h-full object-cover"
    onError={(e) => {
      const target = e.target as HTMLImageElement
      target.src = "https://img.freepik.com/free-vector/flat-design-locksmith-character_23-2147728354.jpg"; //backup image
  }}
/>
   </div>
  <CardContent>
    <h3 className="text-lg font-semibold mt-1 capitalize antialiased">{service.providerId?.username}</h3>
    <h4 className="capitalize">Type:{service.servicename}</h4>
    <p>Price/hr ₹{service.price}</p>
  </CardContent>
  <CardFooter>
   <Link to={`/servicedetails/${service._id}`}>
   <Button className="bg-darkOlive">View Details</Button>
   </Link>
  </CardFooter>
</Card>

    </>
  )
}

export default ProviderCard