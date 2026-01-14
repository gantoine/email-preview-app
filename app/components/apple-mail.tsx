"use client";

import { Search } from "lucide-react";

const AppleMail = ({ html }: { html: string }) => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="w-64 border-r p-4 bg-white border-gray-200">
        <div className="flex items-center gap-2 text-gray-800">
          <h2 className="text-lg font-bold">Inbox</h2>
          <span className="text-xs">(1)</span>
        </div>
        <div className="relative mt-4">
          <Search
            size={14}
            className="absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md py-1 px-7 text-sm bg-gray-100 text-black"
          />
        </div>
      </div>
      <div className="flex-1 bg-white">
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-400">From: company@example.com</p>
        </div>
        <iframe
          srcDoc={html}
          className="w-full h-full"
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </div>
    </div>
  );
};

export default AppleMail;
