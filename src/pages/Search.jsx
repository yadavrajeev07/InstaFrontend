import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchGrid from "../components/SearchGrid";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("top");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar Navbar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[72px] md:ml-[244px]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Search</h1>
            <div className="relative">
              <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
            </div>
          </div>

          {/* Search Tabs */}
          {searchQuery && (
            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("top")}
                  className={`pb-3 font-medium ${activeTab === "top" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                >
                  Top
                </button>
                <button
                  onClick={() => setActiveTab("accounts")}
                  className={`pb-3 font-medium ${activeTab === "accounts" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                >
                  Accounts
                </button>
                <button
                  onClick={() => setActiveTab("tags")}
                  className={`pb-3 font-medium ${activeTab === "tags" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                >
                  Tags
                </button>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="space-y-6">
            {searchQuery === "" ? (
              // Suggested Section when no search
              <div>
                <h2 className="text-xl font-semibold mb-4">Suggested</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mock suggested users */}
                  {[
                    { username: "john_doe", fullName: "John Doe", followers: "120K", isFollowing: false },
                    { username: "jane_smith", fullName: "Jane Smith", followers: "450K", isFollowing: true },
                    { username: "alex_wilson", fullName: "Alex Wilson", followers: "890K", isFollowing: false },
                    { username: "sarah_j", fullName: "Sarah Johnson", followers: "320K", isFollowing: true },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="font-semibold">{user.username}</div>
                        <div className="text-gray-500 text-sm">{user.fullName}</div>
                        <div className="text-gray-500 text-sm">{user.followers} followers</div>
                      </div>
                      <button
                        onClick={() => console.log(`Follow ${user.username}`)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-semibold ${user.isFollowing ? "bg-gray-100 text-black hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                      >
                        {user.isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Popular Tags Section */}
                <div className="mt-12">
                  <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {["photography", "art", "nature", "travel", "fashion", "food", "architecture", "portrait"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(`#${tag}`)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Search Results
              <>
                {/* SearchGrid Component */}
                <SearchGrid 
                  searchQuery={searchQuery} 
                  activeTab={activeTab} 
                />
                
                {/* Recent Searches Section */}
                {searchQuery && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
                    <div className="space-y-3">
                      {[
                        { query: "photography", type: "tag", time: "2 hours ago" },
                        { query: "john_doe", type: "user", time: "1 day ago" },
                        { query: "landscape", type: "tag", time: "3 days ago" },
                      ].map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(item.query)}
                          className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg text-left"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {item.type === "user" ? (
                                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M7.5 5.5C7.5 7.43 9.07 9 11 9s3.5-1.57 3.5-3.5S12.93 2 11 2 7.5 3.57 7.5 5.5zM11 10c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z" />
                                </svg>
                              )}
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{item.query}</div>
                              <div className="text-gray-500 text-sm">{item.type} • {item.time}</div>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Clear recent search:", item.query);
                            }}
                            className="text-gray-400 hover:text-gray-600 p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;