import React from 'react';
import Image from 'next/image';
import avatar from '../../public/images/contacts/era.jpg'
import imageLoader from '@/imageLoader';

const Avatar = () => {
    return (
       <Image src={avatar} unoptimized alt={'Avatar'} loader={imageLoader} loading="eager" placeholder="blur" quality={100} className='w-[220px] h-[200px] shadow-2xl rounded-full border-4  border-emerald-500 '/>
    );
    
};

export default Avatar;