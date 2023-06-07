import React from "react";
import { IconType } from "react-icons";

import Link from "next/link";

interface MobileItemProps {
	href: string;
	label: string;
	icon: IconType; // IconType from react-icons
	active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
	label,
	active,
	href,
	icon: Icon,
}) => {
	return (
		<Link href={href}>
			<div
				className={`w-full px-3 text-center text-lg hover:underline flex items-center ${
					active ? "text-emerald-500" : "text-neutral-400"
				}`}
			>
				<Icon className="mr-2" />
				{label}
			</div>
		</Link>
	);
};

export default MobileItem;
