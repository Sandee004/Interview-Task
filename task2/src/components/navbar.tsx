import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="bg-blue-400 px-5 py-2 flex flex-row justify-between items-center sm:px-8 w-full">
                <p className="text-2xl font-bold text-white">Muse Space</p>

                <div className="hidden px-5 py-1 w-2/5 sm:flex flex-row justify-between items-center gap-5 font-sm text-white italic">
                    <a>Home</a>
                    <a>About</a>
                    <a>Featured</a>
                    <input placeholder="Search" />
                </div>

                <button className="sm:hidden">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-white text-xl"
                        onClick={openMenu}
                    />
                </button>
            </div>
            <div
                className={`bg-slate-300 flex flex-col pl-8 py-4 ${
                    menuOpen ? "block" : "hidden"
                }`}>
                <a>Home</a>
                <a>About</a>
                <a>Featured</a>
            </div>
        </>
    );
};

export default Navbar;
