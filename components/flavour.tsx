import { Flavor } from '@/services/flavours';
import { useIceCreamService } from '@/services/icecream.service';

export const FlavourButton = ({ flavor }: { flavor: Flavor }) => {
  const { addFlavor } = useIceCreamService();

  const handleAddFlavor = () => {
    addFlavor(flavor);
  };

  return (
    <>
      <button
        type='button'
        onClick={handleAddFlavor}
        className={`${flavor.color} font-semibold m-2 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50`}>
        {flavor.name}
      </button>
    </>
  );
};

export const FlavourLabel = ({ flavor }: { flavor: Flavor }) => {
  return <label className={`${flavor.color} inline-block font-semibold m-1 py-1 px-2 rounded-full`}>{flavor.name}</label>;
};
