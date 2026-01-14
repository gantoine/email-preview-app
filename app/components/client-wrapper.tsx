"use client";

import { Mailbox, Sidebar, Wifi } from "lucide-react";
import { format } from "date-fns";
import { useState, ReactNode } from "react";
import { DarkModeContext } from "@/hooks/use-dark-mode";

const today = format(new Date(), "h:mm a");

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode }}>
      <div className={`flex flex-col h-full`}>
        <div
          className={`flex items-center justify-between text-sm py-1.5 px-4 border-b ${
            isDarkMode
              ? "bg-gray-700 border-gray-800 text-white"
              : "bg-gray-200 border-gray-300 text-black"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
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
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export default ClientWrapper;
