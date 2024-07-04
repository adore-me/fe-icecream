'use client';

import React, { useState, useContext, createContext } from 'react';
import { Flavor } from './flavours';

type IceCreamContext = {
  flavors: Flavor[];
  addFlavor: (flavor: Flavor) => void;
};

export const IceCreamContext = createContext<IceCreamContext | undefined>(undefined);

// Create a provider component
export const IceCreamProvider = ({ children }: { children: React.ReactNode }) => {
  const [flavors, setFlavors] = useState<Flavor[]>([]);

  // Method to add a flavor
  const addFlavor = (flavor: Flavor) => {
    setFlavors((prevFlavors) => [...prevFlavors, flavor]);
  };

  return (
    <IceCreamContext.Provider value={{ flavors, addFlavor }}>{children}</IceCreamContext.Provider>
  );
};

// Custom hook to use the ice cream service
export const useIceCreamService = (): IceCreamContext => {
  const context = useContext(IceCreamContext);

  if (!context) {
    throw new Error('useIceCreamService must be used within an IceCreamProvider');
  }

  return context;
};
