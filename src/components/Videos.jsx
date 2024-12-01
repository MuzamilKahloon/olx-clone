import { vids } from "../constants/index";

const Videos = () => {
  return (
    <div className="px-4 mt-20 md:px-20">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Video Cameras</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View more
        </a>
      </div>

      {/* Videos Grid */}
      <div className="grid gap-6 border sm:grid-cols-2 lg:grid-cols-4">
        {vids.map((vid, index) => (
          <div key={index} className="p-3">
            {/* Video Image */}
            <img
              src={vid.image}
              alt={vid.desc}
              className="object-cover w-full h-40"
            />
            {/* Price and Icon */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-bold">Rs {vid.price}</span>
              <span className="text-gray-500 cursor-pointer">{vid.icon}</span>
            </div>
            {/* Description */}
            <p className="mt-2 text-sm font-medium">{vid.desc}</p>
            {/* Location and Time */}
            <p className="text-sm text-gray-500">{vid.loc}</p>
            <p className="text-xs text-gray-400">{vid.update}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
