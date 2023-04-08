import React, { FC } from 'react';
import Image from 'next/image';
import imageLoader from '@/imageLoader';


interface LinksProps {
	links: {
		id: number;
		path: string;
		ico: string;
	}[];
}


const Links:FC<LinksProps> = ({links}) => {

       
    return (
        <div className='flex items-center mt-5'>
           {
             links.map((link) => {
                return (
									<a href={link.path} key={link.id}>
										<Image
											src={link.ico}
											width={50}
											height={50}
											unoptimized
											loading='lazy'
											loader={imageLoader}
											alt="Link"
											className="w-30 h-30"
										/>
									</a>
								);
             })
           }
        </div>
    );
};

export default Links;