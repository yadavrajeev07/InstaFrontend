import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CreatePost from "../pages/CreatePost";
import PrivateRoute from "../components/PrivateRoute";
import Landing from "../pages/Landing";
const AppRoutes = () => {
  return (
  <Routes>
  {/* Public Landing */}
  <Route path="/" element={<Landing />} />

  {/* Login/Register */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Protected routes */}
  <Route
    path="/home"
    element={
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    }
  />
  <Route
    path="/profile"
    element={
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    }
  />
  <Route
    path="/create"
    element={
      <PrivateRoute>
        <CreatePost />
      </PrivateRoute>
    }
  />
</Routes>
  );
};

export default AppRoutes;
