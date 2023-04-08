import React from "react";
import Button from "./Button";
import Image from "next/image";
import hero from "../../public/images/home/hero.png";
import imageLoader from "@/imageLoader";


const Hero = () => {
	return (
		<div className="relative h-[100vh] lg:h-[56vw] ]">
		
			<Image
				src={hero}
				alt={"Hero"}
				className="w-full h-full  object-cover brightness-[65%] transition duration-500 "
				quality={100}
				loading="lazy"
				loader={imageLoader}
				placeholder="blur"
			/>

			<div className=" absolute top-[30%] flex flex-col items-center justify-start w-full">
				<p className="text-white text-center text-3xl md:text-5xl h-full w-[80%] lg:text-6xl lg:w-[60%] font-bold drop-shadow-xl ">
					Откройте для себя силу микрозелени с{" "}
					<span className="text-emerald-500">Green Yera!</span>
				</p>
				<p className="text-neutral-200 text-center text-md md:text-2xl  w-[80%] lg:text-2xl lg:[w-70%] my-8">
					Свежая микрозелень на каждый сезон.Наша микрозелень - это идеальный
					супер продукт, насыщенный витаминами, минералами и антиоксидантами.
				</p>
				<Button />
			</div>
		</div>
	);
};

export default Hero;
