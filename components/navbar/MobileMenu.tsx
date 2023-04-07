import Link from "next/link";
import React from "react";

interface MobileMenuProps {
	visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
	if (!visible) {
		return null;
	}

	return (
		<div className="bg-slate-800 backdrop-blur-md bg-opacity-95 w-56 absolute top-8 right-0 py-5 flex-col border-2 border-emerald-500 flex items-center">
			<div className="flex flex-col gap-4">
				<Link href="/">
					<div className=" w-full px-3 text-center text-neutral-400 hover:underline flex items-center">
						<img
							src="./images/navbar/home.svg"
							className=" mx-2 w-5 h-5"
							alt=""
						/>
						Главная
					</div>
				</Link>

				<Link href="/catalog">
					<div className=" w-full px-3 text-center text-neutral-400 hover:underline flex items-center">
						<img
							src="./images/navbar/info.svg"
							className=" mx-2 w-5 h-5"
							alt=""
						/>
						Каталог
					</div>
				</Link>

				<Link href="/contacts">
					<div className=" w-full px-3 text-center text-neutral-400 hover:underline flex items-center">
						<img
							src="./images/navbar/contacts.svg"
							className=" mx-2 w-5 h-5"
							alt=""
						/>
						Контакты
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
