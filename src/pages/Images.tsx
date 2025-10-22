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
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">IMAGES</h1>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {images.map((image) => (
            <Link
              key={image.id}
              to={`/images/${image.id}`}
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-grey-200 border-2 border-foreground overflow-hidden brutalist-hover">
                <div className="w-full h-full flex items-center justify-center text-grey-400">
                  <span className="text-sm font-mono">[IMAGE]</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <span className="text-xs text-grey-500 font-mono">{image.year}</span>
                </div>
                <p className="text-sm text-grey-600">{image.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
