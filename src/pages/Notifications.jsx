import { useState } from "react";
import Navbar from "../components/Navbar";
import NotificationItem from "../components/NotificationItem";

const notifications = [
  {
    id: 1,
    user: "john_doe",
    fullName: "John Doe",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    action: "liked your post",
    time: "2 hours ago",
    postImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&h=100&fit=crop",
    read: false,
    type: "like",
  },
  {
    id: 2,
    user: "jane_smith",
    fullName: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    action: "started following you",
    time: "5 hours ago",
    read: false,
    type: "follow",
  },
  {
    id: 3,
    user: "alex_wilson",
    fullName: "Alex Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    action: "commented: Amazing shot! 🔥",
    time: "1 day ago",
    postImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=100&fit=crop",
    read: true,
    type: "comment",
  },
  {
    id: 4,
    user: "sarah_j",
    fullName: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
    action: "mentioned you in a comment",
    time: "2 days ago",
    read: true,
    type: "mention",
  },
  {
    id: 5,
    user: "mike_ross",
    fullName: "Mike Ross",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    action: "liked your comment",
    time: "3 days ago",
    postImg: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=100&h=100&fit=crop",
    read: true,
    type: "like",
  },
  {
    id: 6,
    user: "emily_c",
    fullName: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    action: "shared your post",
    time: "4 days ago",
    read: true,
    type: "share",
  },
];

const Notifications = () => {
  const [filter, setFilter] = useState("all"); // "all", "unread", "following"
  const [notificationList, setNotificationList] = useState(notifications);

  const handleMarkAsRead = (id) => {
    setNotificationList(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotificationList(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleFollow = (userId) => {
    console.log(`Follow user ${userId}`);
    // In real app, this would update backend
  };

  const filteredNotifications = notificationList.filter(notification => {
    if (filter === "unread") return !notification.read;
    if (filter === "following") return notification.type === "follow";
    return true;
  });

  const unreadCount = notificationList.filter(n => !n.read).length;

  return (  
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar Navbar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[72px] md:ml-[244px]">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold">Notifications</h1>
              <p className="text-gray-500 mt-1">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="px-4 py-2 text-blue-500 hover:text-blue-600 font-medium"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setFilter("all")}
                className={`pb-3 font-medium ${filter === "all" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={`pb-3 font-medium ${filter === "unread" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
              >
                Unread {unreadCount > 0 && `(${unreadCount})`}
              </button>
              <button
                onClick={() => setFilter("following")}
                className={`pb-3 font-medium ${filter === "following" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
              >
                Following
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-2">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  data={notification}
                  onMarkAsRead={() => handleMarkAsRead(notification.id)}
                  onFollow={() => handleFollow(notification.user)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No notifications</h3>
                <p className="text-gray-500">
                  {filter === "unread" 
                    ? "You're all caught up!" 
                    : "When you get notifications, they'll appear here."}
                </p>
              </div>
            )}
          </div>

          {/* Empty State for Unread */}
          {filter === "unread" && unreadCount === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">All caught up!</h3>
              <p className="text-gray-500">You've read all your notifications.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;