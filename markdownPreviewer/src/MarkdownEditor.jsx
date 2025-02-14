import React, { useState } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [text, setText] = useState("# Hello, Markdown!");

  // Function to download Markdown as a .md file
  const downloadMarkdown = () => {
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "markdown_preview.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Title Bar */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-2">
        <h2 className="text-2xl font-bold">Markdown Previewer</h2>
        <button
          onClick={downloadMarkdown}
          className="bg-red-600 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Download</span>
        </button>
      </div>


      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Input Section */}
        <div className="w-full md:w-1/2 p-4">
          <textarea
            className="w-full h-full p-3 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
