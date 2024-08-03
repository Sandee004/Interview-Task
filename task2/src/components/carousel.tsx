import React from "react";
import { useNavigate } from "react-router-dom";
import useScreenSize from "react-responsive";
import Navbar from "./navbar";

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
    const isDesktop = useScreenSize({ query: "(min-width: 1024px)" });
    const navigate = useNavigate();

    const handleItemClicked = (id: number): void => {
        navigate(`/details/${id}`);
    };

    const chunk = (arr: CarouselItem[], size: number): CarouselItem[][] =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    return (
        <div className="mx-auto">
            <Navbar />
            {isDesktop ? (
                <div className="carousel w-full relative">
                    {chunk(carouselItems, 2).map((pair, index) => (
                        <div
                            key={`slide${index + 1}`}
                            id={`slide${index + 1}`}
                            className="carousel-item w-full flex gap-4">
                            {pair.map((item: CarouselItem) => (
                                <div
                                    key={item.id}
                                    className="w-1/2 flex flex-col h-full"
                                    onClick={() => handleItemClicked(item.id)}>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="flex-1 bg-green-500 flex justify-center items-center">
                                        <h2 className="text-white">
                                            {item.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    {carouselItems.length > 2 && (
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                            <a
                                href={`#slide${chunk(carouselItems, 2).length}`}
                                className="btn btn-circle"
                                onClick={(e: React.MouseEvent) =>
                                    e.stopPropagation()
                                }>
                                ❮
                            </a>
                            <a
                                href="#slide2"
                                className="btn btn-circle"
                                onClick={(e: React.MouseEvent) =>
                                    e.stopPropagation()
                                }></a>
                        </div>
                    )}
                </div>
            ) : (
                <div className="carousel mx-auto">
                    {carouselItems.map((item: CarouselItem) => (
                        <div
                            key={item.id}
                            className="carousel-item flex w-full mr-5 flex-col h-full"
                            onClick={() => handleItemClicked(item.id)}>
                            <div className="imagediv h-[200px] border-black border-b-2 border-l-2 w-[250px]">
                                <img src={item.src} />
                            </div>
                            <div className="flex-1 text-black bg-white flex flex-col gap-2 px-4 py-6">
                                <h2 className="text-xl">{item.title}</h2>
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
