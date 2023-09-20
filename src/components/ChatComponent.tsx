"use client";
import React, { useEffect } from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });

  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-white py-2 px-4 top-0 z-10">
        <h3 className="text-xl font-bold">Chat here</h3>
      </div>

      <div
        className="flex-grow max-h-screen overflow-y-scroll py-4 px-2"
        id="message-container"
      >
        <MessageList messages={messages} isLoading={isLoading} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white py-4 px-2 sticky bottom-0 z-10"
      >
        <div className="flex items-center">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="flex-grow mr-2"
          />
          <Button className="bg-blue-600">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
