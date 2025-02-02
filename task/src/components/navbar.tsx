import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full">
            <div className="bg-blue-400 px-5 py-2 flex flex-row justify-between items-center md:px-8 w-full">
                <p className="text-2xl font-bold text-white">Muse Space</p>

                <div className="hidden px-5 py-1 w-3/5 md:flex flex-row justify-between items-center gap-3 font-sm text-white italic">
                    <a>
                        <Link to="/">Home</Link>
                    </a>
                    <a>About</a>
                    <a>Featured</a>
                    <a>
                        <input
                            className="bg-transparent px-5 border-blue-200 border py-1 text-black italic rounded-sm focus:outline-blue-200"
                            placeholder="Search"
                        />
                    </a>
                </div>

                <button className="md:hidden">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-white text-xl"
                        onClick={openMenu}
                    />
                </button>
            </div>
            <div
                className={`bg-gray-300 flex flex-col pl-8 py-5 ${
                    menuOpen ? "block" : "hidden"
                }`}>
                <a className="py-3">
                    <Link to="/">Home</Link>
                </a>
                <a className="py-3">About</a>
                <a className="py-3">Featured</a>
                <a className="py-3">
                    <input
                        className="bg-transparent px-5 border-black border py-1 text-black italic rounded-sm focus:outline-black"
                        placeholder="Search"
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
