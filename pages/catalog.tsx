import { NextPage } from "next";
import { useQuery} from "react-query";
import axios from "axios";
import CatalogColumn from "@/components/catalog/CatalogColumn";
import MetaHead from "@/meta/MetaHead";
import { ItemProps } from "@/interfaces/item.interface";

interface ItemsProps {
	items: ItemProps[];
}

const Catalog: NextPage<ItemsProps> = ({ items }) => {
	

	const { data: fetchedItems, isLoading } = useQuery("items", async () => {
		const response = await axios.get("https://green-yera.vercel.app/api/items");
		return response.data;
	});

	const catalogItems = items || fetchedItems;

	return (
		<>
			<MetaHead title={"Каталог"} />
			<div className="w-full">
				<div className="container">
					{isLoading ? (
						<div className="w-full h-screen bg-white flex items-center justify-center">
							<p className="text-green-500 font-bold text-xl">Loading...</p>
						</div>
					) : (
						<CatalogColumn items={catalogItems} />
					)}
				</div>
			</div>
		</>
	);
};


export default Catalog;
