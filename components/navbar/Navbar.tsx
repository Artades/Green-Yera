// import Logo from "./Logo";

// const Navbar = () => {
// 	return (
// 		<div className="w-full bg-white shadow-2xl h-[70px] flex justify-center items-center">
// 			<div className="container">
// 				<div className="w-full h-full flex items-center  justify-between">
// 					<Logo />
// 					<ul className="flex items-center h-full">
// 						<li
// 							className={`text-lg text-neutral-500 cursor-pointer hover:text-emerald-700  hover:border-b border-emerald-300 mx-2`}
// 						>
// 							Главная
// 						</li>
// 						|
// 						<li
// 							className={`text-lg text-neutral-500 cursor-pointer hover:text-emerald-700  hover:border-b border-emerald-300  mx-2`}
// 						>
// 							Каталог
// 						</li>
// 						|
// 						<li
// 							className={`text-lg text-center text-neutral-500 cursor-pointer  hover:text-emerald-700  hover:border-b border-emerald-300  mx-2`}
// 						>
// 							Контакты
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const TOP_OFFSET = 22;

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	return (
		<nav className="w-full fixed z-40">
			<div
				className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
					showBackground ? "bg-slate-700 backdrop-blur-md bg-opacity-70" : ""
				}`}
			>
				<Logo />
				<div className="flex-row ml-8 gap-7 hidden lg:flex">
					<NavbarItem href="/" label="Главная" active />
					<NavbarItem href="/catalog" label="Каталог" />
					<NavbarItem href="/contacts" label="Контакты" />
				</div>
				<div
					onClick={toggleMobileMenu}
					className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
				>
					<IoMenuOutline
						className={`w-7 h-7  transition ${
							showMobileMenu
								? "rotate-180 text-emerald-600"
								: "rotate-0 text-white"
						}`}
					/>
					<MobileMenu visible={showMobileMenu} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
