
const Display = ({ value }) => {
  return (
    <div className="h-14 bg-gray-200 rounded mb-4 flex items-center justify-end px-3 text-2xl text-gray-400 font-bold overflow-hidden">
      {value || 0}
    </div>
  );
};

export default Display;