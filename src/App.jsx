import { useState } from "react";
import Castle from "./components/01_Castle";

function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  };
  const message1 = "Do you love React?";
  return (
    <div className="py-10 flex flex-col justify-center items-center min-h-screen bg-[#242424] text-white">
      <p>Message for JSD7: {message1}</p>
      <p className="text-red-500">
        Reply from the Secret Room:{" "}
        <span className="text-blue-500">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Castle message1={message1} onReply={handleReply} />
    </div>
  );
}

export default App;
