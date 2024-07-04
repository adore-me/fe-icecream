export type Flavor = {
  name: string;
  color: string;
};

const flavors: Flavor[] = [
  {name: 'Vanilla', color: 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-500'},
  {name: 'Chocolate', color: 'bg-brown-700 text-white hover:bg-brown-800 focus:ring-brown-500'},
  {name: 'Strawberry', color: 'bg-pink-300 text-pink-900 hover:bg-pink-400 focus:ring-pink-500'},
  {name: 'Mint', color: 'bg-green-300 text-green-900 hover:bg-green-400 focus:ring-green-500'},
  {name: 'Blueberry', color: 'bg-blue-300 text-blue-900 hover:bg-blue-400 focus:ring-blue-500'},
  {name: 'Caramel', color: 'bg-amber-400 text-amber-900 hover:bg-amber-500 focus:ring-amber-500'},
  {name: 'Lemon', color: 'bg-yellow-300 text-yellow-900 hover:bg-yellow-400 focus:ring-yellow-500'},
  {name: 'Pistachio', color: 'bg-emerald-300 text-emerald-900 hover:bg-emerald-400 focus:ring-emerald-500'},
  {name: 'Raspberry', color: 'bg-rose-300 text-rose-900 hover:bg-rose-400 focus:ring-rose-500'},
  {name: 'Coconut', color: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500'},
];

export const getFlavors = async () => {
  // could fetch them from an API endpoint

  return flavors;
};
