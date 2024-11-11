import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { SERVER_URL } from "@/lib/serverurl";
import { Services } from "@/lib/types";

axios.defaults.withCredentials=true

// Define types for your user and store state
interface Review {
  _id: string;
  rating: number;
  feedback: string;
}

interface User {
  _id: string
  username: string;
  email: string;
  lastlogin:string;
  phoneNumber:string
  district:string
  address:string
  usedServices: Services[];
  reviews?: Review[];
  createdAt:string
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
}

interface AuthActions {
  signup: (username: string, email: string,address:string, district:string, phoneNumber:string,password: string) => Promise<void>;
  login: ( email: string, password: string) => Promise<void>;
  checkAuth:()=>Promise<void>
  logout:()=>Promise<void>
  // verifyEmail: (code: string) => Promise<User>;
}

interface ErrorResponseData {
  message?: string;
}
// Combine state and actions into a single type
type AuthStore = AuthState & AuthActions;


export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (username: string, email: string,address:string, district:string, phoneNumber:string,password: string ) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/auth/signup`, {
        username,
        email,
        address,
        district,
        phoneNumber,
        password
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (err: unknown) {
      const error = err as AxiosError<ErrorResponseData>;
    
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
    
      throw error;
    }
  },
  
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/auth/login`, {
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (err: unknown) {
      const error = err as AxiosError<ErrorResponseData>;
    
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
    
      throw error;
    }
    
  },
  

  logout:async()=>{
    set({isLoading:true,error:null});
    try {
      await axios.post(`${SERVER_URL}/auth/logout`)
      set({user:null,isAuthenticated:false,isLoading:false})
    } catch (error) {
      set({error:"Error logging out",isLoading:false})
      throw error
    }
  },

checkAuth:async()=> {
  set({isCheckingAuth:true,error:null})
  try {
    const response = await axios.get(`${SERVER_URL}/auth/check-auth`)
    set({user:response.data.user,isAuthenticated:true,isCheckingAuth:false})
  } catch (error) {
    console.log(error);  
    set({error:null,isCheckingAuth:false,isAuthenticated:false})
  }
}
}));
