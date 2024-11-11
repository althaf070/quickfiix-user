import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader, SendHorizontal } from "lucide-react";
import { useConversationStore } from '@/store/conversationStore';
import { useAuthStore } from '@/store/authStore';

interface MessageProps {
  providerId: string;
}

const MessageComponent = ({ providerId }: MessageProps) => {
  const { conversations, fetchConversation, isLoading, sendMessage, error } = useConversationStore();
  const { user } = useAuthStore();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchConversation(providerId);
  }, [fetchConversation, providerId]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    try {
      await sendMessage(providerId, message);
      setMessage("");  // Clear message input after sending
      fetchConversation(providerId);  // Refresh conversation
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="min-h-[60vh] max-h-[60vh] flex flex-col justify-between">
      {error && <div className="text-red-500">{error}</div>}
      {!isLoading && conversations.length === 0 && (
        <div><h1>Send a message to start the conversation</h1></div>
      )}
      <div className="flex-1 overflow-y-scroll p-4">
        <div className="flex flex-col gap-4">
          {conversations.map((msg) => (
            <div
              key={msg._id}
              className={`p-2 rounded-lg max-w-[70%] ${
                msg.user === user?._id ? 'self-end bg-accentblue text-white' : 'self-start bg-vibrantPurple text-white'
              }`}
            >
              {msg.message}
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-4 border-t">
        <Input
          className="flex-1 text-primarycharacoal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} disabled={isLoading || !message.trim()}>
          {isLoading ? <Loader className="animate-spin" size={24} /> : <SendHorizontal />}
        </Button>
      </div>
    </div>
  );
};

export default MessageComponent;
