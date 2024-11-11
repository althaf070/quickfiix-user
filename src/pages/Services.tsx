import ProviderCard from "@/components/ProviderCard"
import ServiceCarousel from "@/components/ServiceCarousel"
import { useServiceStore } from "@/store/serviceStore"
import { useEffect } from "react"

const Services = () => {
  const {getAllServices,services} = useServiceStore()
  useEffect(() => {
  getAllServices()
  }, [])
  return (
    <div className="my-9 w-full flex flex-col justify-center ">
      <h1 className="text-4xl lg:text-6xl text-silver font-semibold text-center ">What Service You Need Today..?</h1>
     <ServiceCarousel/>
     <div className="grid md:grid-cols-5 sm:grid-cols-2 place-items-center gap-4 m-3">
     {services.length > 0 ? services.map((service)=> (
       <ProviderCard service={service} key={service._id}/>
     )):<p>No Service Found</p>}
     
      </div>
    </div>
  )
}

export default Services