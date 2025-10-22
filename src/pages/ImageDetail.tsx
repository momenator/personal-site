import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const images = [
  {
    id: "1",
    title: "Urban Geometry",
    year: "2024",
    description: "Concrete and shadows",
    location: "Tokyo, Japan",
    camera: "Leica M10",
    details: "A study in brutalist architecture, capturing the interplay between concrete surfaces and natural light. The geometric patterns formed by the building's facade create a mesmerizing rhythm of light and shadow.",
  },
  {
    id: "2",
    title: "Night Streets",
    year: "2024",
    description: "City lights after dark",
    location: "Berlin, Germany",
    camera: "Canon AE-1",
    details: "The urban landscape transforms at night. Neon signs, street lamps, and passing headlights paint the city in a different palette. This series explores the raw energy of nocturnal city life.",
  },
  {
    id: "3",
    title: "Minimalist Architecture",
    year: "2023",
    description: "Form follows function",
    location: "Rotterdam, Netherlands",
    camera: "Hasselblad 500C",
    details: "Pure architectural photography focusing on clean lines and negative space. The minimalist approach emphasizes the essential elements of design, stripping away everything unnecessary.",
  },
  {
    id: "4",
    title: "Industrial Landscapes",
    year: "2023",
    description: "Beauty in brutalism",
    location: "Sheffield, UK",
    camera: "Pentax K1000",
    details: "Finding aesthetic value in industrial structures often overlooked. These landscapes reveal the stark beauty of functional design and the poetry hidden in concrete and steel.",
  },
];

const ImageDetail = () => {
  const { id } = useParams();
  const image = images.find((img) => img.id === id);

  if (!image) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-8">
          <Link
            to="/images"
            className="inline-flex items-center gap-2 text-sm font-mono hover:translate-x-[-2px] transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO IMAGES
          </Link>
          <h1 className="text-3xl font-bold">Image not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-12">
        <Link
          to="/images"
          className="inline-flex items-center gap-2 text-sm font-mono hover:translate-x-[-2px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO IMAGES
        </Link>

        <div className="space-y-8 max-w-5xl">
          <div className="space-y-4">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                {image.title}
              </h1>
              <span className="text-lg text-grey-500 font-mono">{image.year}</span>
            </div>
            <div className="w-20 h-1 bg-foreground"></div>
          </div>

          <div className="aspect-[3/2] bg-grey-200 border-2 border-foreground overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-grey-400">
              <span className="text-lg font-mono">[{image.title.toUpperCase()}]</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-2 border-foreground p-8">
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-grey-500 uppercase tracking-wider">
                Location
              </h3>
              <p className="text-lg font-bold">{image.location}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono text-grey-500 uppercase tracking-wider">
                Camera
              </h3>
              <p className="text-lg font-bold">{image.camera}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono text-grey-500 uppercase tracking-wider">
                Year
              </h3>
              <p className="text-lg font-bold">{image.year}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About This Image</h2>
            <p className="text-lg text-grey-600 leading-relaxed">{image.details}</p>
          </div>

          <div className="border-t-2 border-foreground pt-8">
            <h3 className="text-sm font-mono text-grey-500 uppercase tracking-wider mb-4">
              More from this series
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images
                .filter((img) => img.id !== id)
                .slice(0, 4)
                .map((img) => (
                  <Link
                    key={img.id}
                    to={`/images/${img.id}`}
                    className="group"
                  >
                    <div className="aspect-square bg-grey-200 border-2 border-foreground overflow-hidden brutalist-hover">
                      <div className="w-full h-full flex items-center justify-center text-grey-400">
                        <span className="text-xs font-mono">[IMG]</span>
                      </div>
                    </div>
                    <p className="text-xs font-mono mt-2">{img.title}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
