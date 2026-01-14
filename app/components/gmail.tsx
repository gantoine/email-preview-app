"use client";

import {
  Archive,
  ArrowLeft,
  Clock,
  Mail,
  Menu,
  MoreVertical,
  Pencil,
  Search,
  Settings,
  Star,
  Trash,
} from "lucide-react";

const Gmail = ({ html }: { html: string }) => {
  return (
    <div className={`flex flex-col h-full bg-white text-gray-900`}>
      <header
        className={`px-4 py-2 border-b flex items-center justify-between border-gray-200`}
      >
        <div className="flex items-center gap-4">
          <Menu size={20} className="text-gray-500" />
          <h1 className={`text-xl font-bold text-gray-700`}>Gmail</h1>
        </div>
        <div className="flex-1 max-w-lg ml-8">
          <div
            className={`flex items-center rounded-lg px-4 py-2 w-full bg-gray-100`}
          >
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search mail"
              className="bg-transparent focus:outline-none ml-4 w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Settings size={20} className="text-gray-500" />
          <MoreVertical size={20} className="text-gray-500" />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className={`w-64 border-r p-4 border-gray-200`}>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full">
            <Pencil size={16} />
            <span>Compose</span>
          </button>
          <nav className="mt-8">
            <ul>
              <li className="flex items-center gap-4 text-sm font-medium text-blue-500">
                <Mail size={18} />
                <span>Inbox</span>
              </li>
              <li className="flex items-center gap-4 text-sm mt-4">
                <Star size={18} />
                <span>Starred</span>
              </li>
              <li className="flex items-center gap-4 text-sm mt-4">
                <Clock size={18} />
                <span>Snoozed</span>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1">
          <div className={`p-4 border-b border-gray-200`}>
            <div className="flex items-center gap-4">
              <ArrowLeft size={20} className="text-gray-500" />
              <Archive size={20} className="text-gray-500" />
              <Trash size={20} className="text-gray-500" />
            </div>
          </div>
          <div className="p-4">
            <p className={`text-gray-600 text-sm`}>From: company@example.com</p>
            <iframe
              srcDoc={html}
              className="w-full h-full mt-8"
              style={{
                backgroundColor: "#ffffff",
                height: "calc(100vh - 250px)",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gmail;
