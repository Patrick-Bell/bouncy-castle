import { Balloon } from "lucide-react"

const Action = () => {

    return (

        <div className="primary-bg rounded-3xl p-10 mt-8 flex flex-col items-center text-center gap-5">
                    <span className="text-4xl"><Balloon className="primary-text w-15 h-15" /></span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold primary-text">Ready to make some memories?</h3>
                    <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                        Whether it's a birthday, a school event, or just a brilliant excuse for a party, we'd love to help! Browse our castles or get in touch and we'll find the perfect fit.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="/bouncy-castles"
                            className="px-6 py-3 rounded-xl secondary-bg text-white font-extrabold text-sm active:scale-95 transition-all duration-200"
                        >
                            View Our Castles
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:border-[#3b3e33] hover:text-[#3b3e33] transition-all duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

    )
}

export default Action