import { useState } from "react";
import Navbar from "../components/Navbar";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="flex bg-white min-h-screen">
      <Navbar />

      {/* Chat Area */}
      <div className="ml-[240px] flex w-full h-screen">
        {/* Left Users */}
        <ChatSidebar onSelectUser={setActiveUser} activeUser={activeUser} />

        {/* Right Messages */}
        <ChatWindow activeUser={activeUser} />
      </div>
    </div>
  );
};

export default Chat;
