import Navbar from "../components/Navbar";
import ExploreGrid from "../components/ExploreGrid";

const Explore = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar Navbar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[72px] md:ml-[244px]">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Explore</h1>
            <p className="text-gray-500 mt-2">Discover amazing content from around the world</p>
          </div>

          {/* Search Bar (Optional) */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts, tags, or users..."
                className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Popular Topics</h2>
            <div className="flex flex-wrap gap-2">
              {["Photography", "Travel", "Food", "Fashion", "Art", "Nature", "Architecture", "Portrait", "Street", "Minimal"].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Explore Grid */}
          <ExploreGrid />
        </div>
      </div>
    </div>
  );
};

export default Explore;