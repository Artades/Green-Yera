import { ItemProps } from "@/interfaces/item.interface";
import React, { FC } from "react";
import CatalogItem from "./CatalogItem";

interface ItemsProps {
	items: ItemProps[];
}

const CatalogColumn: FC<ItemsProps> = ({ items }) => {
	
	return (
		<div className="w-full flex flex-col items-start justify-center">

		
			{Array.isArray(items) && items.length > 0  ? (
				items.map((item: ItemProps) => (
					<CatalogItem
						key={item.id}
						title={item.title}
						features={item.features}
						price={item.price}
						imageUrl={item.imageUrl}
						id={item.id}
					/>
				))
			) : (
				<p>No items available</p>
			)}
		</div>
	);
};

export default CatalogColumn;
