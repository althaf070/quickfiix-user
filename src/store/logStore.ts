import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { Services } from "./serviceStore";

interface Logs {
    _id: string;
    users: {
        username: string;
    };
    providers: {
        username: string;
    };
    service: {
        servicename: string;
    };
    status: 'pending' | 'confirmed' | 'completed' | 'canceled' | 'paid' | 'reviewed';
    cancelledByProvider: boolean;
}

interface DashboardData {
    bookedServicesCount: number;
    totalServicesReceivedCount: number;
    totalServicesRequestedCount: number;
    ongoingServices?:Services[]
}

interface LogsState {
    logs: Logs[];
    isLoading: boolean;
    error: string | null;
    dashboardData: DashboardData | null;
}

interface LogActions {
    getLogs: (limit: string) => Promise<void>;
    getDashboardData: () => Promise<void>;
}

interface ErrorResponseData {
    message?: string;
}

type LogStore = LogsState & LogActions;

export const useLogStore = create<LogStore>((set) => ({
    logs: [],
    isLoading: false,
    error: null,
    dashboardData: null,

    // fetching logs
    async getLogs(limit) {
        set({ isLoading: true, error: null });
        try {
            const url = limit ? `${SERVER_URL}/logs/get?limit=${limit}` : `${SERVER_URL}/logs/get`;
            const response = await axios.get(url);
            set({
                isLoading: false,
                logs: response.data.logs,
                error: null,
            });
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
            set({
                error: error.response?.data?.message || "Error Fetching Service",
                isLoading: false,
            });
            throw error;
        }
    },

    //  fetch dashboard data
    async getDashboardData() {
        set({ isLoading: true, error: null, dashboardData: null });
        try {
            const response = await axios.get(`${SERVER_URL}/logs/dashboard`);
            set({
                isLoading: false,
                dashboardData: response.data.data,
                error: null,
            });
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
            set({
                error: error.response?.data?.message || "Error Fetching Dashboard Data",
                isLoading: false,
            });
            throw error;
        }
    },
}));
