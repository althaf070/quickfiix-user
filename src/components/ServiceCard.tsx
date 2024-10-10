import { services } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// ServiceCard component
const ServiceCard = () => {
  return (
    <div className="grid place-items-center md:grid-cols-4 gap-5 mt-3">
      {Object.entries(services).map(([key, service]) => (
        <Card
          key={key}
          className="md:h-[170px] w-[300px] bg-primarygrey hover:scale-105 transition-all ease-out rounded-lg"
        >
          <Link to={`/services/${service.type}`}>
            <CardHeader className="flex items-center gap-3">
              {<service.icon className="text-offwhite text-2xl" />}
              <div>
                <CardTitle className="text-offwhite text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-wrap text-silver text-md">
                  {service.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCard;
