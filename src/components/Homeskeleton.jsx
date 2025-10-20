// HomeSkeleton.jsx
const HomeSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-6 animate-pulse bg-gray-100">
      <div className="h-10 bg-gray-300 rounded-xl w-1/3"></div>
      <div className="h-6 bg-gray-300 rounded-xl w-2/3"></div>
      <div className="h-40 bg-gray-300 rounded-2xl mt-4"></div>
      <div className="h-20 bg-gray-300 rounded-xl mt-2"></div>
      <div className="h-20 bg-gray-300 rounded-xl mt-2"></div>
    </div>
  );
};

export default HomeSkeleton;
