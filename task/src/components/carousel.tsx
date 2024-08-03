import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

interface CarouselItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    price: string;
    catch: string;
}

interface CarouselProps {
    carouselItems: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperType | null>(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleItemClicked = (id: number): void => {
        navigate(`/details/${id}`);
    };
    return (
        <>
            <Navbar />
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                className="w-[98%] sm:w-[70%] h-[500px] mt-8">
                {carouselItems.map((item: CarouselItem) => (
                    <SwiperSlide className="border justify-center items-center flex flex-col mx-auto px-10">
                        <div className="relative w-full">
                            <img src={item.src} className="w-full h-[60%]" />

                            <div className="flex-1 text-black bg-white flex flex-col w-full px-4 py-6">
                                <h2
                                    className="text-xl"
                                    onClick={() => handleItemClicked(item.id)}>
                                    {item.title}
                                </h2>
                                <p className="text-sm">
                                    From
                                    <span className="text-orange-500 text-xl font-bold">
                                        {item.price}
                                    </span>
                                    /week
                                </p>
                                <p className="bg-blue-400 px-2 py-1 w-fit">
                                    {item.catch}
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                            <button
                                type="button"
                                onClick={handlePrevClick}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2 text-gray-700 hover:text-indigo-500 bg-gray-100 w-[50px] h-[50px] shadow-sm">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                type="button"
                                onClick={handleNextClick}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2 text-gray-700 hover:text-indigo-500 w-[50px] h-[50px] bg-gray-100 shadow-sm">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
