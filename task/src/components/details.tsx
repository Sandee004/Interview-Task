import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

interface CarouselItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    price: string;
    catch: string;
    facilities: string;
}

interface DetailsPageProps {
    carouselItems: CarouselItem[];
}

const DetailsPage: React.FC<DetailsPageProps> = ({ carouselItems }) => {
    const { id } = useParams<{ id: string }>();

    const productDetails = carouselItems.find(
        (product) => product.id === parseInt(id || "")
    );

    if (!productDetails) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row mt-10 justify-center sm:h-[70%]">
                <div className="md:w-1/4">
                    <img
                        src={productDetails.src}
                        alt={productDetails.alt}
                        className="w-full h-full object-cover md:rounded-l-md"
                    />
                </div>
                <div className="md:w-2/4 flex flex-col justify-center border-l-2 p-4 gap-3">
                    <h2 className="text-2xl font-bold mb-2">
                        {productDetails.title}
                    </h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Sources and related content
                    </p>
                    <p>{productDetails.facilities}</p>
                    <div className="flex flex-row gap-4">
                        <p className="text-white font-bold bg-blue-600 px-2 py-1 w-fit">
                            {productDetails.catch}
                        </p>
                        <p className="text-white font-bold bg-blue-600 px-2 py-1 w-fit">
                            Price drop
                        </p>
                    </div>
                </div>
                <div className="justify-between gap-3 flex flex-col">
                    <p className="text-orange-500 text-xl font-bold">
                        {productDetails.price}
                    </p>
                    <button className="bg-yellow-400 px-4 py-2">
                        View More
                    </button>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;
