import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {

    const TESTIMONIALS_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/h1-img6.png',
            name: 'TESTIMONIALS',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse`,
            user: 'Lorena Mitchell'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2021/04/h1-testimonials-img2.jpg',
            name: 'TESTIMONIALS',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse`,
            user: 'Nina Daniels'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2021/02/h1-testimonials-img3.jpg',
            name: 'TESTIMONIALS',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse`,
            user: 'Monika Fei'
        },
    ]
    return (
        <div>
            <Swiper navigation={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} modules={[Navigation, Autoplay]} className="Swiper">
                {TESTIMONIALS_Data.map((e) => {
                    return (
                        <SwiperSlide>
                            <div>
                                <img src={e.img} />
                                <h1>{e.name}</h1>
                                <p>{e.description}</p>
                                <span>{e.user}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Testimonials