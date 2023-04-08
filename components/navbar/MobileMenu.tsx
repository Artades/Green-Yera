
import React from "react";
import MobileItem from "./MobileItem";

interface MobileMenuProps {
	visible?: boolean;
	pathname: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, pathname }) => {
	if (!visible) {
		return null;
	}

	return (
		<div className="bg-slate-800 backdrop-blur-md bg-opacity-95 w-56 absolute top-8 right-0 py-5 flex-col border-2 border-emerald-500 flex items-center">
			<div className="flex flex-col gap-4">
				<MobileItem
					href="/"
					label="Главная"
					active={pathname === "/" ? true : false}
					ico={"./images/navbar/home.svg"}
				/>

				<MobileItem
					href="/catalog"
					label="Каталог"
					active={pathname === "/catalog" ? true : false}
					ico={"./images/navbar/info.svg"}
				/>

				<MobileItem
					href="/contacts"
					label="Контакты"
					active={pathname === "/contacts" ? true : false}
					ico={"./images/navbar/contacts.svg"}
				/>
			</div>
		</div>
	);
};

export default MobileMenu;
