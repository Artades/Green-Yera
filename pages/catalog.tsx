import { NextPage } from "next";
import { useQuery} from "react-query";
import axios from "axios";
import CatalogColumn from "@/components/catalog/CatalogColumn";
import MetaHead from "@/meta/MetaHead";
import { ItemProps } from "@/interfaces/item.interface";
import { FadeLoader } from "react-spinners";

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
						<div className="w-full h-[79vh] bg-white flex flex-col items-center justify-center">
							<FadeLoader color="#50C878" />
							<p className="mt-2 text-emerald-500  text-md">Загружаем товары</p>
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
