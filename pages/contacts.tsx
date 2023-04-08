import Contact from "@/components/contact/Contact";
import MetaHead from "@/meta/MetaHead";
import React from "react";

const Contacts = () => {
	return (
		<>
			<MetaHead title={"Контакты"} />
			<div className="w-full h-[100vh]">
				<div className="container">
                   <Contact />
                </div>
			</div>
		</>
	);
};

export default Contacts;
