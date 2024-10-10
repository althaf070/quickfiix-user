import { services } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface ServiceCarouselProps {
    type?:string | undefined
}

const ServiceCarousel = ({type}:ServiceCarouselProps) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center mt-7">
      <TooltipProvider>
        {Object.entries(services).map(([key, service]) => (
          <Tooltip key={key}>
            <Link to={`/services/${service.type}`} >
              <TooltipTrigger>
                <Badge
                  variant="default"
                  className={`p-2 hover:bg-silver hover:text-primarycharacoal ${type == service.type && "bg-silver"}`}
                >
                  {service.title}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to select your service</p>
              </TooltipContent>
            </Link>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default ServiceCarousel;
