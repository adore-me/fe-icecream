import { Cone } from '@/components/cone';
import { Flavors } from '@/components/flavors';
import { IceCreamProvider } from '@/services/icecream.service';

export default function Home() {
  return (
    <main className='h-1/2'>
      <h1 className='text-4xl font-extrabold text-center text-sky-600 mb-6'>
        Create your very own ice cream cone!
      </h1>
      <div className='flex'>
        <IceCreamProvider>
          <div className='w-1/3'>
            <Flavors />
          </div>
          <div className='w-2/3'>
            <Cone />
          </div>
        </IceCreamProvider>
      </div>
    </main>
  );
}
