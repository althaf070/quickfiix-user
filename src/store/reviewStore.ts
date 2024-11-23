import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";

interface Reviews {
    _id:string
    userId:{
        _id: string;
        username:string
    }
    providerId:{
        username:string
    }
    rating: number;
    feedback: string;
    createdAt:Date

}
interface ReviewState {
    reviews: Reviews[];
    isLoading: boolean;
    error: string | null;
}

interface ReviewActions {
createReview:(providerId:string,serviceId:string,rating:number,feedback:string)=>Promise<void>
topRatedReviews:(providerId:string)=>Promise<void>
getAllReviews:(providerId:string)=>Promise<void>
getuserReviews:()=>Promise<void>
editReview:(id:string,feedback:string,rating:number)=>Promise<void>
deleteReview:(id:string)=>Promise<void>
}
interface ErrorResponseData {
    message?: string;
}
type ReviewStore = ReviewState & ReviewActions;

export const useReviewStore = create<ReviewStore>((set) => ({
reviews:[],
isLoading:false,
error:null,

async createReview(providerId,serviceId, rating, feedback) {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.post(`${SERVER_URL}/review/create`,{
            providerId,serviceId,rating,feedback
        })
        set({isLoading:false,reviews:response.data.review})
        toast.success(response.data.message)
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error creating review",
            isLoading: false,
        });
        throw error;
    }
},
async topRatedReviews(providerId) {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.get(`${SERVER_URL}/review/top/${providerId}`)
        set({isLoading:false,reviews:response.data.reviews})
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error gtting toprated review",
            isLoading: false,
        });
        throw error;
    }
},
async getAllReviews(providerId) {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.get(`${SERVER_URL}/review/all/${providerId}`)
        set({isLoading:false,reviews:response.data.reviews})
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error getting all review",
            isLoading: false,
        });
        throw error;
    }
},
async getuserReviews() {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.get(`${SERVER_URL}/review/user`)
        set({isLoading:false,reviews:response.data.reviews,error:null})
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error getting user review",
            isLoading: false,
        });
        throw error;
    }
},
async editReview(id,feedback,rating) {
    set({ isLoading: true, error: null });
    try {
        const response =await axios.patch(`${SERVER_URL}/review/edit/${id}`,{
            feedback,rating
        })
      set({isLoading:false,reviews:response.data.reviews})
      toast.info(response.data.message)
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error editing review",
            isLoading: false,
        });
        throw error;
    }
},
async deleteReview(id) {
    set({ isLoading: true, error: null });
    try {
        await axios.delete(`${SERVER_URL}/review/delete/${id}`)
     set((state)=>({
        isLoading: false,
        reviews:state.reviews.filter(review=>review._id !== id)
     }))
     toast.warning("Review deleted successfully")
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error editing review",
            isLoading: false,
        });
        throw error;
    }
},
}))