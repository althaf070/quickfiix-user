import ProviderCard from "@/components/ProviderCard";
import ServiceCarousel from "@/components/ServiceCarousel";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceProviders = () => {
  const { type } = useParams();
  const { getServicesByName, services, isLoading, error } = useServiceStore();

  useEffect(() => {
    if (type) {
      getServicesByName(type);
    }
  }, [getServicesByName, type]);

  return (
    <>
      <ServiceCarousel type={type} />
      <section id={type} className="m-6 min-h-screen">
        <h1 className="text-center text-3xl font-bold capitalize">
          {type} Service Providers
        </h1>
        {isLoading ? (
          <p className="text-center text-2xl">Loading services...</p>
        ) : error ? (
          <p className="text-center text-2xl text-red-500">{error}</p>
        ) : (
          <div className="grid md:grid-cols-5 sm:grid-cols-2 place-items-center gap-4 m-3">
            {services?.length > 0 ? (
              services.map((service) => (
                <ProviderCard key={service._id} service={service} />
              ))
            ) : (
              <p className="text-center text-3xl font-semibold">
                No Services Currently available for {type}
              </p>
            )}
          </div>
        )}
      </section>
    </>
  );
};
export default ServiceProviders