import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
import { create } from "zustand";

export interface Provider {
  _id: string;
  username: string;
  email: string;
  address: string;
  district: string;
  phoneNumber: string;
  profilepic?: string; 
  reviews?:string;
}
export interface Services {
    _id:string
    servicename:string;
    description:string;
    price:string;
    available:boolean;
    providerId?: Provider;
}

interface ServiceState {
services:Services[];
isLoading:boolean;
error:string | null;
message: string | null;
}

interface ServiceActions {
getAllServices:()=>Promise<void>;
getUsedServices:()=>Promise<void>;
getServicesByName:(name:string)=>Promise<void>;
getServicesById:(id:string)=>Promise<Services>;
}

interface ErrorResponseData {
    message?: string;
 }
type ServiceStore = ServiceState & ServiceActions

export const useServiceStore = create<ServiceStore>((set)=> ({
    services:[],
    isLoading:false,
    error:null,
    message:null,   
 
    getAllServices:async()=> {
    set({isLoading:true,error:null})
    try {
        const response = await axios.get(`${SERVER_URL}/service/allservices`)
        set({isLoading:false,services:response.data.services,error:null})
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error Fetching Service",
      isLoading: false,
    });
    throw error;
    }
    },
    getServicesByName:async(name:string)=> {
        set({isLoading:true,error:null})
        try {
            const response = await axios.get(`${SERVER_URL}/service/getservicebyname/${name}`)
        set({isLoading:false,services:response.data.services,error:null})
        }catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
        set({
          error: error.response?.data?.message || "No Service Found",
          isLoading: false,
        });
        throw error;
        }
    },
    async getServicesById(id) {
        set({isLoading:true,error:null})
        try {
            const response = await axios.get(`${SERVER_URL}/service/${id}`)
            set({isLoading:false,error:null})
            return response.data.service
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
            set({
              error: error.response?.data?.message || "No service found by this id",
              isLoading: false,
            });
            throw error;
        }
    },
  async getUsedServices() {
    set({isLoading:true,error:null})
    try {
        const response = await axios.get(`${SERVER_URL}/service/used`)
        set({isLoading:false,error:null,services:response.data.usedServices})
        console.log(response.data.usedServices,'sss');
        
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
          error: error.response?.data?.message || "No service found by this id",
          isLoading: false,
        });
        throw error;
    }
  },
}))