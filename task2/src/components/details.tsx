import React from "react";
import { useParams } from "react-router-dom";

interface CarouselItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    price: string;
    catch: string;
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
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2">
                <img
                    src={productDetails.src}
                    alt={productDetails.alt}
                    className="w-full h-full object-cover md:rounded-l-md"
                />
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-2">
                    {productDetails.title}
                </h2>
                <p className="text-gray-700">Price: {productDetails.price}</p>
                <p className="text-gray-500">{productDetails.catch}</p>
            </div>
        </div>
    );
};

export default DetailsPage;
