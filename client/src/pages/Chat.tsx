import React, { useEffect, useState } from "react";
import axios from "axios";

interface Chat {
  _id: string;
  chatName: string;
}

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;
