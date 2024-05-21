import Banner from "./HomeComponents/Banner/Banner"
import Banner_Categories from "./HomeComponents/banner_Categories/Banner_Categories"
import New_Arrivals from "./HomeComponents/New_Arrivals/New_Arrivals"
import Top_Selling from "./Top_Selling/Top_Selling"
import Testimonials from "./HomeComponents/Testimonials/Testimonials"
import Blog from "./HomeComponents/Blog/Blog_Container"
import Handmade from "./HomeComponents/Handmade/Handmade"
import Icons from "./HomeComponents/Icons/Icons"
const Home = () => {
    return (
        <main>
            <Banner_Categories />
            <Banner />
            <New_Arrivals />
            <Top_Selling />
            <Testimonials />
            <Blog />
            <Handmade />
            <Icons />
        </main>
    )

}

export default Home