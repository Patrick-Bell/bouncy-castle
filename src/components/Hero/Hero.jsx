import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Castle } from "lucide-react"
import image1 from '../../assets/bumper-cars.png'
import image2 from '../../assets/white-bouncy-castle.png'
import { castles } from "../../api/Products"



const images = [image1, image2]

const Hero = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      className="max-w-7xl mx-auto mt-5"
    >
      <CarouselContent>
        {castles.map((src, index) => (
          <CarouselItem key={index}>
            <div className="overflow-hidden h-[400px] md:h-[500px] z-50 relative rounded-lg border">
              <img
                src={src.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            <div className="absolute bottom-4 right-4 z-50">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group">
              
              <div className="flex items-center justify-center w-8 h-8 rounded-lg primary-bg text-primary">
                <Castle className="w-4 h-4" />
              </div>

              <div onClick={() => window.open(`/bouncy-castle/${src.slug}`, '_blank')} className="flex items-center gap-3">
                <p className="text-sm font-medium text-gray-800">
                  {src.name}
                </p>

                <div className="w-px h-4 bg-gray-300"></div>

                <p className="text-xs font-medium text-primary group-hover:underline">
                  View more →
                </p>
              </div>

            </div>
          </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Hero