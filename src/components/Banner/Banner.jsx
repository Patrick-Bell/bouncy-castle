import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
  } from "@/components/ui/scroll-based-velocity"
  
  const Banner = () => {
    return (
      <div className="hidden md:flex relative w-full flex-col items-center justify-center overflow-hidden bg-pink-500 p-3 text-white">
        {/* First scrolling row */}
        <ScrollVelocityContainer className="text-sm font-bold tracking-[-0.02em] uppercase">
          <ScrollVelocityRow baseVelocity={3} direction={-1}>
            <span className="mx-4">Hire Bouncy Castles as low as £50!</span>
            <span className="mx-2 text-white/70">|</span>   {/* Separator */}
            <span className="mx-4">Over 50+ Castles Available!</span>
            <span className="mx-2 text-white/70">|</span>   {/* Separator */}
            <span className="mx-4">Perfect for Birthdays, Nurseries & Schools!</span>
            <span className="mx-2 text-white/70">|</span>   {/* Separator */}
            <span className="mx-4">Safe & Fully Insured!</span>
            <span className="mx-2 text-white/70">|</span>   {/* Separator */}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    )
  }
  
  export default Banner
  