'use client';

import { generateIcecreamImage } from '@/services/dall-e';
import { useIceCreamService } from '@/services/icecream.service';
import { useEffect, useRef, useState } from 'react';
import { FlavourLabel } from './flavour';

export const Cone = () => {
  const [inputText, setInputText] = useState('Hi, I would like 1 ice cream cone, with 2 cones of ');
  const [image, setImage] = useState('');

  const { flavors } = useIceCreamService();

  const generateIcecream = async () => {
    const prompt = `${inputText} ${flavors.map((flavor) => flavor.name).join(' and ')}`;

    const imageUrl = await generateIcecreamImage(prompt);

    setImage(imageUrl as string);
  };

  const submitText = 'Give me my icecream!!!';

  return (
    <>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className='w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition ease-in-out duration-300 shadow-sm text-gray-700 placeholder-gray-400'
      />

      {flavors.map((flavor, i) => {
        return <FlavourLabel key={i} flavor={flavor} />;
      })}

      <button
        type='submit'
        onClick={generateIcecream}
        className='relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group'>
        <span className='absolute inset-0 flex items-center justify-center w-full h-full text-blue-500 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease'>
          {submitText}
        </span>
        <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease'>
          {submitText}
        </span>
        <span className='relative invisible'>{submitText}</span>
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image ? <img src={image} width={512} height={512} alt='my delicios icecream' /> : ''}
    </>
  );
};
