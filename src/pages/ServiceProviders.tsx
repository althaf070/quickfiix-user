
import ProviderCard from "@/components/ProviderCard"
import ServiceCarousel from "@/components/ServiceCarousel"
import { useParams } from "react-router-dom"


const ServiceProviders = () => {
  const {type} = useParams()
  
  return (
    <>
  <ServiceCarousel type={type}/>
    <section id={`#${type}`} className="m-6">
      <h1 className="text-center text-3xl font-bold capitalize">{type} Service Providers</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 place-items-center gap-4 m-3">
      <ProviderCard/>
      <ProviderCard/>
      <ProviderCard/>
      <ProviderCard/>
      <ProviderCard/>
      <ProviderCard/>
      </div>
    </section>
    </>
  )
}

export default ServiceProviders