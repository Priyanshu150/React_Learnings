import React, { useState } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [text, setText] = useState("# Hello, Markdown!");

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Title Bar */}
      <div className="bg-blue-600 text-white text-center text-2xl font-bold py-4">
        Markdown Previewer
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Input Section */}
        <div className="w-full md:w-1/2 p-4">
          <textarea
            className="w-full h-full p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Markdown..."
          />
        </div>

        {/* Preview Section */}
        <div className="w-full md:w-1/2 p-4 bg-gray-100 border-l overflow-auto">
          <div
            className="p-3 text-gray-900"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
