"use client";

import { Mailbox, Sidebar, Wifi } from "lucide-react";
import { format } from "date-fns";
import { useState, cloneElement, ReactElement } from "react";

const today = format(new Date(), "h:mm a");

const ClientWrapper = ({
  children,
}: {
  children: ReactElement<{ isDarkMode: boolean }>;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col h-full`}>
      <div
        className={`flex items-center justify-between text-sm py-1.5 px-4 border-b ${
          isDarkMode
            ? "bg-[#3c3c3c] border-[#2a2a2a] text-white"
            : "bg-[#f6f6f6] border-[#ddd] text-black"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 bg-[#f55648] rounded-full" />
            <div className="w-2.5 h-2.5 bg-[#fdbd2e] rounded-full" />
            <div className="w-2.5 h-2.5 bg-[#27c840] rounded-full" />
          </div>
          <div className="flex items-center gap-1">
            <Sidebar size={16} />
            <Mailbox size={16} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light" : "Dark"} Mode
          </button>
          <Wifi size={14} />
          <span>100%</span>
          <span>{today}</span>
        </div>
      </div>
      {/* We need to pass isDarkMode to the children */}
      {cloneElement(children, { isDarkMode })}
    </div>
  );
};

export default ClientWrapper;
