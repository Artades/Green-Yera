import { ItemProps } from '@/interfaces/item.interface';
import React, { FC } from 'react';
import Button from '../Button';
import OrderButton from './OrderButton';

const CatalogItem:FC<ItemProps> = ({id, title, features, price, imageUrl}) => {
    return (
			<div className=" w-full my-5 bg-white rounded-lg   drop-shadow-lg">
				<div className="flex lg:flex-row flex-col  items-center justify-start ">
					<div className="h-full w-full  lg:w-[40%]  rounded-lg ">
						<img
							src={imageUrl}
							alt="Catalog Item"
							className=" w-full h-full  rounded-lg  "
						/>
					</div>
					<div className="w-full h-full px-5 py-5 flex flex-col items-start ">
						<h2 className="text-slate-700 text-2xl font-bold">{title}</h2>
						

						<p className="text-md text-neutral-600 my-4">{features}</p>

                        <p className='text-md text-emerald-600 font-bold'>Цена: <span>{price} тг</span></p>
<OrderButton  title={"Заказать"}/>

					</div>
				</div>
			</div>
		);
};

export default CatalogItem;