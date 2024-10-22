import { useState } from 'react';
import { Input } from "@/components/ui/input"; // Adjust this import based on your project structure
import { Button } from "@/components/ui/button"; // Adjust this import based on your project structure
import { SendHorizontal } from "lucide-react"; // Make sure to import your icon correctly

const MessageComponent = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send the message
    // For example, you might call a function to add the message to the state
    setMessage(""); // Clear the input after sending
  };

  return (
    <div className="min-h-[60vh] max-h-[60vh] flex flex-col justify-between">
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col gap-4 p-4">
          {/* Example sender messages */}
          <div className="self-end bg-accentblue text-white p-2 rounded-lg max-w-[70%]">
            Sender message
          </div>
          <div className="self-end bg-accentblue text-white p-2 rounded-lg max-w-[70%]">
            Sender message
          </div>
          {/* Example receiver messages */}
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
          <div className="self-start bg-vibrantPurple p-2 rounded-lg max-w-[70%]">
            Receiver message
          </div>
        </div>
      </div>
      <div className="flex p-4 border-t">
        <Input
          className="flex-1 text-primarycharacoal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage}>
          <SendHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default MessageComponent;
