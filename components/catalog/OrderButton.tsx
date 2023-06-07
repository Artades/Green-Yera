import Link from 'next/link';
import React from 'react';

const OrderButton = ({title}: {title:string}) => {
    return (
			<Link
				href="/contacts"
				className=" mt-5 relative cursor-pointer p-3 bg-emerald-600 flex items-center justify-center rounded-lg shadow-md border-2 border-emerald-500 text-white hover:backdrop-blur-md hover:bg-opacity-30 transition duration-300"
			>
				<div className="absolute inset-0 rounded-sm shadow-md hover:shadow-lg transition duration-300"></div>
				<p className="text-md lg:text-lg font-bold flex items-center">
					{title}{" "}
					
				</p>
				
			</Link>
		);
};

export default OrderButton;