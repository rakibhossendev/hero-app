import HeroLogo from "@/assets/logo.png"
import Image from "next/image"

export default function Navbar() {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
    </>

    return (
        <div className="bg-base-100 shadow-sm w-full">
            {/* Container class applied here with mx-auto for horizontal centering */}
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Image src={HeroLogo} width={20} height={30} alt="logo" />
                    <h2 className="text-sm mx-2 text-[#874DEC] font-bold">Hero.IO</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-[#874DEC] text-white btn">contribute</a>
                </div>
            </div>
        </div>
    )
}