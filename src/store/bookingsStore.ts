import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";



export interface Bookings {
    _id: string;
    users: string;          
    service?: {
        _id:string
        servicename:string;
        price:string
    }   
    providers: string;     
    appointmentDate: string;
    status: 'pending' | 'confirmed' | 'completed' | 'canceled' | 'paid' 
    bookingDate: string;   
    notes: string;        
    payment: 'cash' | 'online'; 
}

interface BookingState {
    bookings:Bookings[];
    isLoading:boolean;
    error:string | null;
    message: string | null;
    }
    

interface BookingeActions {
createAppointment:(id:string,date:Date,notes:string,payment:string)=>Promise<void>
getuserAppointment:()=>Promise<void>
deleteAppointment:(aid:string)=>Promise<void>
}

interface ErrorResponseData {
    message?: string;
 }
type BookingStore = BookingState & BookingeActions
export const useBookingStore = create<BookingStore>((set)=> ({
    bookings:[],
    isLoading:false,
    error:null,
    message:null, 
    async createAppointment(id, date, notes,payment) {
        set({isLoading:true,error:null})
        try {
            const response = await axios.post(`${SERVER_URL}/appointments/create`,{serviceId:id,appointmentDate:date,notes,payment})
            set({isLoading:false,bookings:response.data.appointment})
            toast.success(response.data.message)
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
        set({
          error: error.response?.data?.message || "Error Fetching Service",
          isLoading: false,
        });
        throw error;
        }
    },
    async getuserAppointment() {
        set({isLoading:true,error:null})
        try {
            const response = await axios.get(`${SERVER_URL}/appointments/get`)
            set({isLoading:false,bookings:response.data.appointment})
            
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
        set({
          error: error.response?.data?.message || "Error Fetching Service",
          isLoading: false,
        });
        throw error;
        }
    },
    async deleteAppointment(aid) {
        set({ isLoading: true, error: null });
        console.log(aid, "delete id");
        
        try {
            const response = await axios.delete(`${SERVER_URL}/appointments/delete/${aid}`);
            set((state) => ({
                isLoading: false,
                bookings: state.bookings.filter(appointment => appointment._id !== aid),
                error: null
            }));
    
            toast.warning(response.data.message || 'Appointment deleted successfully');
        } catch (error) {
            console.error("Error deleting appointment:", error);
            set({ isLoading: false, error: "Failed to delete appointment" });
        }
    }
}))