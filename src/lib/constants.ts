import { Services } from "./types";

import { MdCarpenter, MdCleaningServices, MdElectricalServices, MdElectricBolt, MdHandyman, MdPlumbing, MdRoofing } from "react-icons/md";
import { GiLargePaintBrush } from "react-icons/gi"
  // Step 3: Create the services object
  export const services: Services = {
    electricalServices: {
      title: "Electrical Services",
      type:"electrical",
      description: "Wiring, lighting installation, circuit breaker repair, and more.",
     icon:MdElectricBolt
    },
    plumbingServices: {
      title: "Plumbing Services",
      type:"plumbing",
      icon:MdPlumbing ,
      description: "Leak detection, drain cleaning, faucet and toilet repairs."
    },
    carpentryServices: {
      title: "Carpentry Services",
      type:"carpentry",
      icon:MdCarpenter,
      description: "Door, window installation, custom shelving, and furniture repair."
    },
    paintingServices: {
      title: "Painting Services",
      type:"painting",
      icon:GiLargePaintBrush,
      description: "Interior and exterior painting, including wall touch-ups."
    },
    handymanServices: {
      title: "Handyman Services",
      type:"handyman",
      icon:MdHandyman,
      description: "General home repairs, TV mounting, gutter cleaning, and more."
    },
    applianceRepairServices: {
      title: "Appliance Repair Services",
      type:"appliancerepair",
      icon:MdElectricalServices,
      description: "Repair services for refrigerators, washing machines, and water purifiers."
    },
    roofingServices: {
      title: "Roofing Services",
      type:"roofing",
      icon:MdRoofing,
      description: "Roof leak repair and gutter maintenance."
    },

    cleaningServices: {
      title: "Cleaning Services",
      type:"cleaning",
      icon:MdCleaningServices,
      description: "Deep home cleaning and post-renovation cleaning services."
    }
  };
  

  export const keralaDistricts = [
    "alappuzha",
    "ernakulam",
    "idukki",
    "kannur",
    "kasaragod",
    "kollam",
    "kottayam",
    "kozhikode",
    "malappuram",
    "palakkad",
    "pathanamthitta",
    "thiruvananthapuram",
    "thrissur",
    "wayanad"
  ];