"use client";

import { Search } from "lucide-react";

const AppleMail = ({
  html,
  isDarkMode = false,
}: {
  html: string;
  isDarkMode?: boolean;
}) => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <div
        className={`w-64 border-r p-4 ${
          isDarkMode
            ? "bg-[#3c3c3c] border-[#2a2a2a]"
            : "bg-white border-[#e5e5e5]"
        }`}
      >
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">Inbox</h2>
          <span
            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-[#666]"}`}
          >
            (1)
          </span>
        </div>
        <div className="relative mt-4">
          <Search
            size={14}
            className={`absolute top-1/2 -translate-y-1/2 left-2 ${
              isDarkMode ? "text-gray-400" : ""
            }`}
          />
          <input
            type="text"
            placeholder="Search"
            className={`w-full rounded-md py-1 px-7 text-sm ${
              isDarkMode ? "bg-[#2a2a2a] text-white" : "bg-[#e8e8e8] text-black"
            }`}
          />
        </div>
      </div>
      <div className={`flex-1 ${isDarkMode ? "bg-[#2a2a2a]" : "bg-white"}`}>
        <div
          className={`p-4 border-b ${
            isDarkMode ? "border-[#2a2a2a]" : "border-[#e5e5e5]"
          }`}
        >
          <h3 className="font-semibold">Welcome to our service!</h3>
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-[#666]"}`}
          >
            From: company@example.com
          </p>
        </div>
        <iframe
          srcDoc={html}
          className="w-full h-full"
          style={{
            backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
          }}
        />
      </div>
    </div>
  );
};

export default AppleMail;
