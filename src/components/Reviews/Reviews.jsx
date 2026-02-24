import { Marquee } from "@/components/ui/marquee"
import ReviewCard from "./ReviewCard"
import { reviews } from "@/api/Review"

const Reviews = () => {

   

      const firstRow = reviews.slice(0, reviews.length / 2)
      const secondRow = reviews.slice(reviews.length / 2)


    return (

        <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        What people say about us
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our <span className="text-pink-500">Customers</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        We pride ourselves on providing the best service possible, and our customers love us for it. Here's what they have to say.
                    </p>
                </div>


        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l"></div>
            </div>
            </div>
        </>
    )
}

export default Reviews