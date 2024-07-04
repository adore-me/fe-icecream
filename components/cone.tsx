'use client';

import { generateIcecreamImage } from '@/services/dall-e';
import { useIceCreamService } from '@/services/icecream.service';
import { useEffect, useState } from 'react';
import { FlavourLabel } from './flavour';

export const Cone = () => {
  const [image, setImage] = useState('');
  const { flavors } = useIceCreamService();

  // useEffect(() => {
  //   const getImage = async () => {
  //     const imageUrl = await generateIcecreamImage(
  //       'One ice cream cone with 2 cups of chocollate and pistachio with choccolate syrup'
  //     );

  //     setImage(imageUrl);
  //   };

  //   getImage().catch((e) => console.log(e.message));
  // }, []);

  return (
    <>
      <input
        type='text'
        className='w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition ease-in-out duration-300 shadow-sm text-gray-700 placeholder-gray-400'
        value='Hi, I would like 1 icecream cone, with'
      />

      {flavors.map((flavor, i) => {
        return <FlavourLabel key={i} flavor={flavor} />;
      })}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image ? <img src={image} width={512} height={512} alt='my delicios icecream' /> : ''}
    </>
  );
};
