import { NextApiRequest, NextApiResponse } from "next";

const items = [
	{
		id: 1,
		title: "Лён",
		imageUrl: "/images/catalog/len.jpg",
		price: 1000,
		features:
			"Проростки льна богаты растительным белком и жирными кислотами (Омега-3, Омега-6). Содержат витамины (A, B, C, Е, К, F, В1), микроэлементы (кальций, магний, железо, натрий, фосфор, цинк, калий, медь, хром).Микрозелень льна укрепляет иммунитет, стимулируют обмен веществ. Являются профилактикой язвы желудка и гастрита, сердечно-сосудистых заболеваний, как отхаркивающее средство при бронхитах. Устраняет аллергию и дисбактериоз, укрепляет кости, помогают при артрите и артрозе. ",
	},
	{
		id: 2,
		title: "Пшеница",
		imageUrl: "/images/catalog/wheat.jpg",
		price: 600,
		features:
			"Микрозелень пшеницы обладает высокой питательной ценностью и является богатым источником витаминов, минералов и антиоксидантов. Её употребление способствует укреплению иммунной системы, поддержке здоровья сердца, повышению энергии и выносливости, а также содержит хлорофилл, который является ещё одним полезным компонентом.",
	},
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(items);
}
