import { Link } from "react-router-dom";

const images = [
  {
    id: "1",
    title: "Urban Geometry",
    year: "2024",
    description: "Concrete and shadows",
  },
  {
    id: "2",
    title: "Night Streets",
    year: "2024",
    description: "City lights after dark",
  },
  {
    id: "3",
    title: "Minimalist Architecture",
    year: "2023",
    description: "Form follows function",
  },
  {
    id: "4",
    title: "Industrial Landscapes",
    year: "2023",
    description: "Beauty in brutalism",
  },
];

const Images = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-20 md:space-y-28">
        {/* Header */}
        <header className="space-y-6">
          <span className="label-stark">Photography</span>
          <h1 className="text-display-lg font-display text-monumental">IMAGES</h1>
        </header>

        {/* Image grid - asymmetric masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-5xl">
          {images.map((image, index) => (
            <Link
              key={image.id}
              to={`/images/${image.id}`}
              className={`group block ${index % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              {/* Image container */}
              <div className="aspect-[4/3] bg-grey-100 overflow-hidden mb-5 transition-opacity group-hover:opacity-80">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs font-mono text-grey-300 tracking-widest">[IMAGE]</span>
                </div>
              </div>

              {/* Caption */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium tracking-tight">{image.title}</h3>
                  <p className="text-xs text-grey-400">{image.description}</p>
                </div>
                <span className="text-[10px] font-mono text-grey-300 pt-1">{image.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
