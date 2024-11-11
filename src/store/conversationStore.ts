import { create } from 'zustand';
import axios, { AxiosError } from 'axios';
import { SERVER_URL } from '@/lib/serverurl';

interface Message {
  _id: string;
  user: string;
  provider: string;
  message: string;
  createdAt: string;
}

interface ConversationState {
  conversations: Message[];
  isLoading: boolean;
  error: string | null;
}

interface ConversationActions {
  fetchConversation: (providerId: string) => Promise<void>;
  sendMessage: (providerId: string, message: string) => Promise<void>;
}

interface ErrorResponseData {
  message?: string;
}

type ConversationStore = ConversationState & ConversationActions;

export const useConversationStore = create<ConversationStore>((set) => ({
  conversations: [],
  isLoading: false,
  error: null,

  fetchConversation: async (providerId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<{ success: boolean; messages: Message[] }>(
        `${SERVER_URL}/message/get/${providerId}`
      );
      set({ conversations: response.data.messages, isLoading: false, error: null });
    } catch (err) {
      const error = err as AxiosError<ErrorResponseData>;
      set({
        error: error.response?.data?.message || "Error fetching messages",
        isLoading: false,
      });
    }
  },

  sendMessage: async (providerId: string, message: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${SERVER_URL}/message/send/${providerId}`,
        { message }
      );
      set((state) => ({
        conversations: state.conversations ? [...state.conversations, response.data.newMessage] : [response.data.newMessage],
        isLoading: false,
        error: null,
      }));

    } catch (err) {
      const error = err as AxiosError<ErrorResponseData>;
      set({
        error: error.response?.data?.message || "Error sending message",
        isLoading: false,
      });
    }
  },
}));
