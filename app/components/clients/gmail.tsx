"use client";

const Gmail = ({
  html,
  isDarkMode = false,
}: {
  html: string;
  isDarkMode?: boolean;
}) => {
  return (
    <div
      className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white"} h-full`}
    >
      <header
        className={`px-4 py-2 border-b flex items-center justify-between ${
          isDarkMode ? "border-gray-700" : ""
        }`}
      >
        {/* Simplified Gmail header */}
        <div className="flex items-center gap-4">
          <h1
            className={`text-xl font-bold ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Gmail
          </h1>
        </div>
        <div>{/* Icons */}</div>
      </header>
      <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-lg font-semibold mb-2">Welcome to our service!</h2>
        <p
          className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          From: company@example.com
        </p>
      </div>
      <iframe
        srcDoc={html}
        className="w-full h-full border-t"
        style={{ backgroundColor: isDarkMode ? "#333" : "#ffffff" }}
      />
    </div>
  );
};

export default Gmail;
