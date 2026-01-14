"use client";

import { Search } from "lucide-react";

import { useDarkMode } from "@/hooks/use-dark-mode";

const AppleMail = ({ html }: { html: string }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex-1 flex overflow-hidden">
      <div
        className={`w-64 border-r p-4 ${
          isDarkMode
            ? "bg-gray-700 border-gray-800"
            : "bg-white border-gray-200"
        }`}
      >
        <div
          className={`flex items-center gap-2 ${isDarkMode ? "text-gray-400" : "text-gray-800"}`}
        >
          <h2 className="text-lg font-bold">Inbox</h2>
          <span className="text-xs">(1)</span>
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
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            }`}
          />
        </div>
      </div>
      <div className={`flex-1 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div
          className={`p-4 border-b ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}
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
