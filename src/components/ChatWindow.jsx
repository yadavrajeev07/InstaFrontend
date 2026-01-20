import { useState } from "react";
import { FiPhone, FiVideo, FiInfo } from "react-icons/fi";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({ activeUser }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey 👋", sender: "them" },
    { id: 2, text: "Hello!", sender: "me" },
  ]);

  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now(), text, sender: "me" }]);
    setText("");
  };

  if (!activeUser) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">

      {/* HEADER (Instagram DM style) */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={activeUser.avatar}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div>
            <p className="font-semibold text-sm">
              {activeUser.name || activeUser.username}
            </p>
            <p className="text-xs text-gray-400">
              {activeUser.username}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FiPhone className="cursor-pointer hover:text-black" />
          <FiVideo className="cursor-pointer hover:text-black" />
          <FiInfo className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* PROFILE PREVIEW (top card like Insta) */}
      <div className="flex flex-col items-center py-6 border-b">
        <img
          src={activeUser.avatar}
          className="w-24 h-24 rounded-full object-cover mb-3"
          alt=""
        />
        <h2 className="font-semibold text-lg">
          {activeUser.name || activeUser.username}
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          {activeUser.username} · Instagram
        </p>
        <button className="text-sm font-semibold border px-4 py-1 rounded-md hover:bg-gray-100">
          View profile
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}
      </div>

      {/* INPUT */}
      <div className="px-4 py-3 border-t">
        <div className="flex items-center gap-2 border rounded-full px-4 py-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message..."
            className="flex-1 outline-none text-sm"
          />
          <button
            onClick={sendMessage}
            className="text-blue-500 font-semibold text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
