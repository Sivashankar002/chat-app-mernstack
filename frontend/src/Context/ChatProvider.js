import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const history = useHistory(); // Ensure this is within a Router context

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log("User Info:", userInfo);

    if (!userInfo) {
      history.push("/"); // Redirect if no userInfo is found
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat,chats,setChats }}>
      {children}
    </ChatContext.Provider>
  );
};

// Hook to use the Chat Context
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
