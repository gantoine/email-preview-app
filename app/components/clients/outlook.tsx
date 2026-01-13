"use client";

const Outlook = ({
  html,
  isDarkMode = false,
}: {
  html: string;
  isDarkMode?: boolean;
}) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#f3f2f1]"
      } h-full`}
    >
      <header
        className={`px-4 py-2 flex items-center justify-between ${
          isDarkMode
            ? "bg-gray-900 border-b border-gray-700"
            : "bg-white border-b"
        }`}
      >
        {/* Simplified Outlook header */}
        <div className="flex items-center gap-4">
          <h1
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-[#0078d4]"
            }`}
          >
            Outlook
          </h1>
        </div>
        <div>{/* Icons */}</div>
      </header>
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-lg font-semibold mb-2">Welcome to our service!</h2>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          From: company@example.com
        </p>
      </div>
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : ""}`}>
        <iframe
          srcDoc={html}
          className="w-full h-full"
          style={{ backgroundColor: isDarkMode ? "#333" : "#ffffff" }}
        />
      </div>
    </div>
  );
};

export default Outlook;
