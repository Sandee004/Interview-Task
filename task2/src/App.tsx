import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./components/carousel";
import DetailsPage from "./components/details";

interface CarouselItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    price: string;
    catch: string;
}

const App: React.FC = () => {
    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            src: "https://www.pexels.com/photo/photo-of-living-room-1457842/",
            alt: "Image 1",
            title: "Jane Poole House",
            price: "$399",
            catch: "Cheapest in the past 5 months",
        },
        {
            id: 2,
            src: "https://www.pexels.com/photo/gray-wooden-sideboard-271816/",
            alt: "Image 2",
            title: "Stuhomes Student Living",
            price: "$345",
            catch: "Cheapest in the past month",
        },
        {
            id: 3,
            src: "https://www.pexels.com/photo/interior-design-of-home-1643383/",
            alt: "Image 2",
            title: "Stuhomes Student Living",
            price: "$345",
            catch: "Cheapest in the past month",
        },
    ];

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Carousel carouselItems={carouselItems} />}
                />
                <Route
                    path="/details/:id"
                    element={<DetailsPage carouselItems={carouselItems} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
