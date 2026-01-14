import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row mt-6 px-4">
        {/* Feed */}
        <main className="flex-1 lg:mr-6">
          <Feed />
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block w-[350px]">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Home;
