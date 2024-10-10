// Step 1: Define the type for each service
interface Service {
    title: string;
    description: string;
    type: string;
    icon: React.ComponentType;
  }
  
  // Step 2: Define the type for the services object
  export interface Services {
    electricalServices: Service;
    plumbingServices: Service;
    carpentryServices: Service;
    paintingServices: Service;
    handymanServices: Service;
    applianceRepairServices: Service;
    roofingServices: Service;
    cleaningServices: Service;
  }
  