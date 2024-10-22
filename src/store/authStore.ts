import { create } from "zustand";
import axios from "axios";

// Define types for your user and store state
interface User {
  // Define user properties based on your user model
  username: string;
  email: string;
  // Add other user properties as needed
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
  signup: (username: string, email: string, password: string) => Promise<void>;
}

// Combine state and actions into a single type
type AuthStore = AuthState & AuthActions;

// Define your server URL
const SERVER_URL = "http://localhost:5000/api"; // Update this as needed

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (username: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/auth/signup`, {
        username,
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      set({
        error: error.response?.data.message || "Error signing up",
        isLoading: false,
      });
      throw error; // Optional, depending on your error handling strategy
    }
  },
}));
