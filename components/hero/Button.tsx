import React from "react";
import { FiChevronsDown } from "react-icons/fi";

const Button = () => {
	return (
		<a
			href="#main"
			className="relative cursor-pointer p-6 bg-emerald-600 flex items-center justify-center rounded-sm shadow-md border-2 border-emerald-500 text-white hover:bg-transparent transition duration-300"
		>
			<div className="absolute inset-0 rounded-sm shadow-md hover:shadow-lg transition duration-300"></div>
			<p className="text-xl lg:text-2xl font-bold flex items-center">
				Узнать{" "}
				<span className="ml-3 mt-2 animate-bounce">
					<FiChevronsDown />
				</span>
			</p>
			<div className="absolute inset-0 blur opacity-0 transition duration-300"></div>
		</a>
	);
};

export default Button;
