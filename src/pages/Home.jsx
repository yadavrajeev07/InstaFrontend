import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
   <div className="ml-[240px] bg-white min-h-screen">

      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto flex gap-6 px-4 pt-5">
        {/* Feed Section */}
        <main className="flex-1 max-w-[470px] mx-auto">
          <Feed />
        </main>

        {/* Right Profile / Suggestions */}
        <aside className="hidden lg:block w-[350px]">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Home;
