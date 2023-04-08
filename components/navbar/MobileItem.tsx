import Link from 'next/link';
import React from 'react';

interface MobileItemProps {
	href: string;
	label: string;
    ico: string;
	active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({label, active, href, ico}) => {
    
	return (
		<Link href={href}>
			<div
				className={`w-full px-3 text-center hover:underline flex items-center ${
					active ? " text-emerald-500" : " text-neutral-400"
				}`}
			>
				<img src={ico} className="mx-2 w-5 h-5" alt="" />
				{label}
			</div>
		</Link>
	);
};

export default MobileItem;