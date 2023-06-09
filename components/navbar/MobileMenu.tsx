import React, { useEffect } from "react";
import {
	HiOutlineHome,
	HiOutlinePhone,
	HiOutlineShoppingCart,
} from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import MobileItem from "./MobileItem";

interface MobileMenuProps {
	visible?: boolean;
	pathname: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, pathname }) => {
	useEffect(() => {
		// Disable scrolling when the menu is opened
		if (visible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Re-enable scrolling when the component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [visible]);

	if (!visible) {
		return null;
	}

	return (
		<div
			className="fixed overflow-hidden top-0 left-0 w-screen h-screen bg-gray-800 backdrop-blur-lg bg-opacity-90 flex justify-center items-center"
			style={{ zIndex: 9999 }}
		>
			<div className="w-full py-5 flex-col flex items-center">
				<div className="flex flex-col gap-4">
					<MobileItem
						href="/"
						label="Главная"
						active={pathname === "/" ? true : false}
						icon={HiOutlineHome}
					/>
					<MobileItem
						href="/catalog"
						label="Каталог"
						active={pathname === "/catalog" ? true : false}
						icon={HiOutlineShoppingCart}
					/>
					<MobileItem
						href="/contacts"
						label="Контакты"
						active={pathname === "/contacts" ? true : false}
						icon={HiOutlinePhone}
					/>
				</div>
				<button
					className="text-white absolute top-7 right-5"
					onClick={() => handleClose()}
				>
					<IoCloseOutline size={24} />
				</button>
			</div>
		</div>
	);

	function handleClose() {
		// Implement the close functionality here
	}
};

export default MobileMenu;
