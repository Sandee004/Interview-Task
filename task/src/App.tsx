import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./components/carousel";
import DetailsPage from "./components/details";
import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";

interface CarouselItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    price: string;
    catch: string;
    facilities: string;
}

const App: React.FC = () => {
    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            src: room1,
            alt: "Image 1",
            title: "Jane Poole House",
            price: "$399",
            catch: "Cheapest in the past 5 months",
            facilities:
                "Laundry facilities in the room, refrigerator, WiFi, Bike Storage",
        },
        {
            id: 2,
            src: room2,
            alt: "Image 2",
            title: "Stuhomes Student Living",
            price: "$345",
            catch: "Cheapest in the past month",
            facilities: "Kitchen, Furnsihed, On-site Laundry, On-site-Manager",
        },
        {
            id: 3,
            src: room3,
            alt: "Image 2",
            title: "Stuhomes Student Living",
            price: "$345",
            catch: "Cheapest in the past month",
            facilities: "Kitchen, Furnsihed, On-site Laundry, On-site-Manager",
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
