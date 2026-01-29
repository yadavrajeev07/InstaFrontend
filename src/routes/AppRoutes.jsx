import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CreatePost from "../pages/CreatePost";
import PrivateRoute from "../components/PrivateRoute";
import Landing from "../pages/Landing";
import Chat from "../pages/Chat";
import Search from "../pages/Search";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Reels from "../pages/Reels";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import EditProfile from "../pages/EditProfile";
const AppRoutes = () => {
  return (
  <Routes>
  {/* Public Landing */}
  <Route path="/" element={<Landing />} />

  {/* Login/Register */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
 
  <Route path="/forgotpassword" element={<ForgotPassword />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path="/edit-profile" element={<EditProfile />} />

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
  <Route
  path="/messages"
  element={
    <PrivateRoute>
      <Chat />
    </PrivateRoute>
  }
/>
<Route
  path="/search"
  element={
    <PrivateRoute>
      <Search />
    </PrivateRoute>
  }
/>
<Route
  path="/explore"
  element={
    <PrivateRoute>
      <Explore />
    </PrivateRoute>
  }
/>
<Route
  path="/notifications"
  element={
    <PrivateRoute>
      <Notifications />
    </PrivateRoute>
  }
/>
<Route
  path="/reels"
  element={
    <PrivateRoute>
      <Reels />
    </PrivateRoute>
  }
/>


</Routes>
  );
};

export default AppRoutes;
