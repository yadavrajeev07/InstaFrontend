import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchGrid from "../components/SearchGrid";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("top");

  return (
    <div className="flex min-h-screen bg-white">
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      <div className="flex-1 ml-[72px] md:ml-[244px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Search</h1>
            <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery("")} />
          </div>

          {/* Tabs */}
          {searchQuery && (
            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-8">
                {["top", "accounts", "tags"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-medium ${
                      activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="space-y-6">
            {searchQuery === "" ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Suggested</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Optional: suggested users */}
                </div>
              </div>
            ) : (
              <SearchGrid searchQuery={searchQuery} activeTab={activeTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
