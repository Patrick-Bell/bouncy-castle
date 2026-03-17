import WhiteBouncyCastle from '../assets/white-bouncy-castle.png'
import BouncyCars from '../assets/bumper-cars.png'
import { Castle } from 'lucide-react';
import { FaCarSide } from "react-icons/fa";


export const castles = [
    {
        id: 1,
        emoji: <Castle />,
        name: "White Bouncy Castle",
        description: "A 11ft white bouncy castle that’s perfect for weddings, christenings, birthdays and luxury celebrations.",
        longDescription: "Our 11ft white bounce castle is the perfect statement piece for weddings, christenings, birthdays and luxury celebrations. Designed to blend seamlessly into your event while keeping little guests entertained in style ",
        age: "Ages 2–8",
        capacity: "Up to 6 kids",
        tag: "",
        tagColor: "bg-pink-500",
        dimensions: "11ft × 11ft",
        height: "10ft",
        space: "14ft × 17ft",
        setupTime: "20–30 mins",
        suitableFor: ["Small gardens", "Indoor venues", "Birthday parties", "Nursery events"],
        notSuitableFor: ["Children over age 8", "Adults"],
        adultUse: false,
        indoorOk: true,
        price: "From £85",
        images: [WhiteBouncyCastle, BouncyCars]
    },
    {
        id: 2,
        emoji: <FaCarSide />,
        name: "Bumper Cars",
        description: "Bumper cars race track!",
        longDescription: "15ft x 15ft white race track, 4 cars that can be personalised. Which can be controlled by pedal, gear sticks or remote for full parental control. Moves forward, back and 360. Cars have flashing lights and music along with a rubber band around the entire car. Charge lasts for around 3 hours",
        age: "Ages 4–12",
        capacity: "Up to 4 kids",
        tag: "",
        tagColor: "bg-pink-500",
        dimensions: "16ft × 20ft",
        height: "12ft",
        space: "18ft × 22ft",
        setupTime: "30–40 mins",
        suitableFor: ["Medium–large gardens", "School fairs", "Active older kids", "Community events"],
        notSuitableFor: ["Very young children (under 4)", "Indoor venues with low ceilings"],
        adultUse: true,
        indoorOk: false,
        price: "From £105",
        images: [BouncyCars]
    },
];