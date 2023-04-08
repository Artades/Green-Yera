import React, { useState } from "react";
import Avatar from "./Avatar";
import Links from "./Links";
import { IoCopyOutline } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

const Contact = () => {
	const number = "+7-(707)-926-66-85";
	const [isCopied, setIsCopied] = useState(false);

	const copyNumber = () => {
		navigator.clipboard.writeText(number);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 1500); // reset copied state after 1.5 seconds
	};
   

	const links = [
		{
			id: 1,
			path: "https://instagram.com",
			ico: "./images/contacts/instagram.png",
		},
		{
			id: 2,
			path: "https://vkontakte.com",
			ico: "./images/contacts/vk.svg",
		},
		{
			id: 3,
			path: "https://wa.me/77779266685",
			ico: "./images/contacts/whatsapp.svg",
		},
	];
	const IconName = !isCopied ? IoCopyOutline : BsCheckLg;
	return (
		<div className="w-full h-[70vh] flex flex-col items-center justify-center">
			<Avatar />
			<p className="text-4xl text-slate-700 font-bold my-5">Yerassyl</p>
			<p className="text-lg text-neutral-400 mb-5">Основатель</p>
			<div className="flex items-center text-xl text-slate-700">
				<b className="text-emerald-500">{number}</b>
				<IconName
					className="text-emerald-500 ml-2 cursor-pointer"
					onClick={copyNumber}
					title={isCopied ? "Copied!" : "Copy to clipboard"}
				/>
			</div>

			<Links links={links} />
		</div>
	);
};

export default Contact;
