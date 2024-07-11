import React, { useState, useEffect, FC } from "react";
import Chat from "./Chat";
import { ImFolderDownload } from "react-icons/im";
import { chatsData } from "../data/fakeData";


interface ChatsProps {
  filter: boolean;
}

const Chats: FC<ChatsProps> = ({ filter }) => {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    // Chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Archived container */}
      

      {/* Chats */}
      {chats.map((chat, i) => {
        return (
          <Chat
            key={i}
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
          />
        );
      })}
    </div>
  );
};

export default Chats;
