import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
    const [active, setActive] = useState(0);
  
    const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
    const next = () => setActive((a) => (a + 1) % images.length);
  
    return (
      <div className="flex flex-col gap-4">
        {/* Main image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <img
            src={images[active]}
            alt="Castle"
            className="w-full h-full object-cover transition-all duration-500"
          />
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute hover:secondary-bg left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center cursor-pointer transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === active ? "primary-bg w-5" : "bg-white/70"}`}
              />
            ))}
          </div>
        </div>
  
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${i === active ? "border-[#3b3e33] scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  export default ImageGallery