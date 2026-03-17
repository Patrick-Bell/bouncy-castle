import { useNavigate } from "react-router"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <>
        <Navbar />
        <section className="px-8 py-20 min-h-[70vh] flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center text-center gap-6">

                    {/* Big 404 */}
                    <div className="relative">
                        <span className="text-[10rem] lg:text-[14rem] font-extrabold text-[#d8dbca] leading-none select-none">
                            404
                        </span>
                    </div>

                    {/* Label */}
                    <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase -mt-4">
                        <span className="w-6 h-px bg-[#3b3e33] inline-block" />
                        Page Not Found
                        <span className="w-6 h-px bg-[#3b3e33] inline-block" />
                    </span>

                    {/* Heading */}
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight max-w-md">
                        Looks like this castle <span className="primary-text">doesn't exist</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-400 text-base max-w-sm leading-relaxed">
                        The page you're looking for has floated away. Head back home and find the perfect bouncy castle for your party.
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center gap-3 mt-2">
                        <button
                            onClick={() => navigate("/")}
                            className="cursor-pointer px-6 py-3 rounded-xl secondary-bg secondary-text font-extrabold text-sm hover:opacity-90 active:scale-95 transition-all duration-200"
                        >
                            Back to Home
                        </button>
                        <button
                            onClick={() => navigate("/bouncy-castles")}
                            className="cursor-pointer px-6 py-3 rounded-xl border-2 border-[#d8dbca] text-gray-600 font-bold text-sm hover:border-[#3b3e33] hover:primary-text transition-all duration-200"
                        >
                            View Castles
                        </button>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default NotFound