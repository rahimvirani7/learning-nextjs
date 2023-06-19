import Image from 'next/image';
import '../../../app/globals.css';

export default function PageOne() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-gray-900 p-2 text-second'>Hello this is my first page.</div>
    </main>
  )
}
