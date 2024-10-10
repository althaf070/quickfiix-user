import { AspectRatio } from "@/components/ui/aspect-ratio";
import banner from "../assets/wall.webp";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
  return (
    <>
      <section>
        <div className="relative overflow-hidden mb-3">
          <AspectRatio ratio={16 / 9}>
            <img
              src={banner}
              alt="banner"
              className="w-full h-full object-cover overflow-hidden"
            />
          </AspectRatio>
          <div className="absolute top-[20%] md:left-[5%] left-2  w-full h-full">
            <div>
              <p className="text-4xl font-bold tracking-tight lg:text-8xl text-primarygrey">
                quickFix
              </p>
              <p className=" font-bold text-[#3A3A3A] ml-2">
                Your Trusted Partner <br /> in Home Maintenance
              </p>
            </div>

            <div className="mt-3 ml-5">
              <Link to={"/auth"}>
                {" "}
                <Button
                  size={"lg"}
                  variant={"login"}
                  className="text-md font-semibold"
                >
                  SignIn <FaLongArrowAltRight className="ml-2 text-xl" />
                </Button>
              </Link>

              <Button className="ml-3 mt-4 p-4 font-semibold">
                <a href="#services">Explore Our Services</a>{" "}
                <FaLongArrowAltDown />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="m-5">
        <div>
          <h2 className="text-silver font-semibold m-4 text-4xl text-center">
            Our Services
          </h2>
       <ServiceCard/>
        </div>
      </section>
    <div className="flex justify-center items-center">
     <Link to={"/services"}>
     <Button size={"lg"} variant={"secondary"} className="p-5 font-semibold">Browse All Services  <FaLongArrowAltRight className="ml-2 text-xl"/></Button>
     </Link>
    </div>
    </>
  );
};

export default Home;
