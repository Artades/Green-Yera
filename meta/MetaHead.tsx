import Head from "next/head";
import { FC } from "react";

type MetaHeadProps = {
title: string
}

const MetaHead:FC<MetaHeadProps> = ({title}) => {
    return (
			<Head>
				<title>{title}</title>
				<meta name="description" content="Green Yera | Свежая микрозелень на каждый сезон !" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		);
};

export default MetaHead;