const PostCard = () => {
  return (
    <div className="bg-white border rounded-lg">
      <div className="flex items-center p-3">
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 font-semibold">raj_dev</span>
      </div>

      <img
        src="https://source.unsplash.com/600x600/?nature"
        className="w-full"
      />

      <div className="p-3">
        <p className="font-semibold">1,024 likes</p>
        <p>
          <span className="font-semibold">raj_dev</span> Beautiful view 🌄
        </p>
      </div>
    </div>
  );
};

export default PostCard;
