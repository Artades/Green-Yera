import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-800 text-white py-4">
			
			<div className="container mx-auto flex justify-center items-center ">
				<p className="text-sm text-gray-400">
					&copy; {new Date().getFullYear()} Green Yera. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
