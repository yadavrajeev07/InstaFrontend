const MessageBubble = ({ msg }) => {
  const isMe = msg.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[60%] text-sm
          ${isMe ? "bg-blue-500 text-white" : "bg-gray-100"}`}
      >
        {msg.text}
      </div>
    </div>
  );
};

export default MessageBubble;
