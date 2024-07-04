'use client';

import {Flavor, getFlavors} from '@/services/flavours';
import {useEffect, useState} from 'react';
import {FlavourButton} from './flavour';

export const Flavors = () => {
  const [flavors, setFlavors] = useState<Flavor[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const flavors = await getFlavors();
      setFlavors(flavors);
    };

    loadData();
  }, []);

  return (
    <>
      {flavors.map((flavor) => {
        return <FlavourButton key={flavor.name} flavor={flavor} />;
      })}
    </>
  );
};
