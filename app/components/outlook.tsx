"use client";

import {
  Archive,
  ArrowLeft,
  Calendar,
  Contact,
  Edit,
  Inbox,
  MoreVertical,
  Search,
  Send,
  Trash,
} from "lucide-react";

import { useDarkMode } from "@/hooks/use-dark-mode";

const Outlook = ({ html }: { html: string }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-gray-200 text-gray-900"
      } h-full`}
    >
      <header
        className={`px-4 py-2 flex items-center justify-between ${
          isDarkMode
            ? "bg-gray-900 border-b border-gray-700"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 flex items-center justify-center ${
              isDarkMode ? "bg-gray-700" : "bg-blue-500"
            }`}
          >
            <div className="flex flex-wrap w-4 h-4">
              <div className="w-2 h-2 bg-white" />
              <div className="w-2 h-2 bg-white" />
              <div className="w-2 h-2 bg-white" />
              <div className="w-2 h-2 bg-white" />
            </div>
          </div>
          <h1
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-blue-500"
            }`}
          >
            Outlook
          </h1>
        </div>
        <div className="flex-1 max-w-lg ml-8">
          <div
            className={`flex items-center rounded-lg px-4 py-2 w-full ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none ml-4 w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Calendar size={20} className="text-gray-500" />
          <Contact size={20} className="text-gray-500" />
          <MoreVertical size={20} className="text-gray-500" />
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={`w-64 border-r p-4 ${
            isDarkMode ? "border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md">
            <Edit size={16} />
            <span>New mail</span>
          </button>
          <nav className="mt-8">
            <ul>
              <li className="flex items-center gap-4 text-sm font-medium text-blue-500">
                <Inbox size={18} />
                <span>Inbox</span>
              </li>
              <li className="flex items-center gap-4 text-sm mt-4">
                <Send size={18} />
                <span>Sent Items</span>
              </li>
              <li className="flex items-center gap-4 text-sm mt-4">
                <Archive size={18} />
                <span>Archive</span>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={`flex-1 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <div
            className={`p-4 border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <ArrowLeft size={20} className="text-gray-500" />
              <Trash size={20} className="text-gray-500" />
            </div>
          </div>
          <div className="p-4">
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              From: company@example.com
            </p>
            <iframe
              srcDoc={html}
              className="w-full h-full mt-8"
              style={{
                backgroundColor: isDarkMode ? "#333" : "#ffffff",
                height: "calc(100vh - 250px)",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Outlook;
