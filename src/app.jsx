import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext"; // ✅ important
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
