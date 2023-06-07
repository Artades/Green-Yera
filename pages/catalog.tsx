import CatalogColumn from "@/components/catalog/CatalogColumn";
import { ItemProps } from "@/interfaces/item.interface";
import MetaHead from "@/meta/MetaHead";
import { NextPage } from "next";
import React from "react";

interface ItemsProps {
	items: ItemProps[];
}

const Catalog:NextPage<ItemsProps> = ({ items }) => {
	return (
		<>
			<MetaHead title={"Каталог"} />
			<div className="w-full">
				<div className="container">
					<CatalogColumn items={items} />
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/items"); 
		const items = await response.json(); 

		return {
			props: {
				items,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: { items: [] },
		};
	}
};

export default Catalog;
