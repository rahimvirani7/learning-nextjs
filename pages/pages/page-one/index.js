import '../../../app/globals.css';
import Head from 'next/head';
import Image from 'next/image'

export default function PageOne() {
  return (
    <>
      <Head>
        <title>Page One</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <div className='bg-gray-900 p-2 text-second'>Hello this is my first page.</div>
        <Image
          className='mt-8'
          src="/mtn.png"
          height={0}
          width={300}
          alt="Your Name"
          loading="lazy"
        />
      </main>
    </>

  )
}
