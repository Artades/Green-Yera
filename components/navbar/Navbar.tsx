import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const TOP_OFFSET = 66;

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);
	const { pathname } = useRouter();

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
		<nav className="w-full fixed z-40  ">
			<div
				className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
					showBackground
						? "bg-slate-700 backdrop-blur-md bg-opacity-70"
						: ""
				}`}
			>
				<Logo />
				<div className="flex-row ml-8 gap-7 hidden lg:flex text-slate-500 font-semibold">
					<NavbarItem
						href="/"
						label="Главная"
						active={pathname === "/" ? true : false}
					/>
					|
					<NavbarItem
						href="/catalog"
						label="Каталог"
						active={pathname === "/catalog" ? true : false}
					/>
					|
					<NavbarItem
						href="/contacts"
						label="Контакты"
						active={pathname === "/contacts" ? true : false}
					/>
				</div>
				<div
					onClick={toggleMobileMenu}
					className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
				>
					<IoMenuOutline
						className={`w-7 h-7  transition ${
							showMobileMenu
								? "rotate-180 text-emerald-600"
								: "rotate-0 text-neutral-400"
						}`}
					/>
					<MobileMenu pathname={pathname} visible={showMobileMenu} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
