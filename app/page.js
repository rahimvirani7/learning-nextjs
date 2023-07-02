'use client'

import Image from 'next/image';
import Link from 'next/link';
import data from '../sample.json';
import { useRef, useEffect, useState } from "react";


export default function Home() {
  const myElement = useRef(null);
  const [objProp, setObjProp] = useState({ mwidth: 999, mheight: 999, mx: 999 });
  const [tempBool, setTempBool] = useState(false);

  useEffect(() => {
    console.log("myElement", myElement.current.getBoundingClientRect());
    console.log("objProp", objProp);
  }, [objProp]);

  const updateState = () => {
    const { width, height, x, y } = myElement.current.getBoundingClientRect();

    setObjProp((prevState) => ({
      mx: x > 0 ? x : prevState.mx,
      mwidth: width,
      mheight: height
    }));
  }

  const updateState2 = () => {
    setTempBool(!tempBool);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">

      <button className='font-mont' onClick={updateState}>Click me</button>
      <button onClick={updateState2}>Click me 2</button>

      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div ref={myElement} className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

          <div>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert inline-block"
              width={100}
              height={24}
              priority
            />

            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
              alt="Vercel Logo"
              className="dark:invert inline-block"
              width={100}
              height={24}
              priority
            /></div>

        </div>
      </div>

      <div className='wrapper p-2 my-1'>
        {
          data.map((item, index) => {
            return (
              <a key={index} className='mx-2 inline-block' href={`/students/${item.id}`}>
                <p>{item.name}</p>
                <p className={item.isPromoted ? 'bg-green-400' : 'bg-red-400'}>&nbsp;</p>
              </a>
            )
          })
        }
      </div>

      <div className='block'>
        <p >Visit <Link className='underline' href="/about">about page!</Link></p>
      </div>


    </main>
  )
}