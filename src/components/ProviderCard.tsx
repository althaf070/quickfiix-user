import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"


const ProviderCard = () => {
  return (
    <>
    <Card className="w-[16rem] bg-primarygrey text-offwhite">
   <div>
   <img src="https://e7.pngegg.com/pngimages/60/583/png-clipart-man-holding-gray-laptop-car-kia-motors-auto-mechanic-automobile-repair-shop-motor-vehicle-service-mechanic-engineer-expert.png" alt="" className="w-full rounded-lg" />
   </div>
  <CardContent>
    <h3 className="text-lg font-semibold mt-1">Title</h3>
    <h4>Service Type</h4>
    <p>Price</p>
  </CardContent>
  <CardFooter>
   <Link to={'/servicedetails/2'}>
   <Button className="bg-darkOlive">View Details</Button>
   </Link>
  </CardFooter>
</Card>

    </>
  )
}

export default ProviderCard