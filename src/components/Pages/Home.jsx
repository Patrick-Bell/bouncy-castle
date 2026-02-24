import AboutUs from "../AboutUs/AboutUs"
import Action from "../AboutUs/Action"
import ChooseUs from "../AboutUs/ChooseUs"
import Awards from "../Awards/Awards"
import Banner from "../Banner/Banner"
import ShortFAQ from "../FAQ/ShortFAQ"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import Services from "../Products/Services"
import Reviews from "../Reviews/Reviews"

const Home = () => {

    return (
        <>
        <Banner />
        <Navbar />
        <Hero />
        <AboutUs />
        <ChooseUs />
        <Services />
        <Awards />
        <Reviews />
        <Action />
        <ShortFAQ />
        <Footer />
        </>
    )
}

export default Home