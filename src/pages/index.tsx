import Head from 'next/head'
import Image from 'next/image';
import { Suspense, useEffect, useRef, useState} from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from '../components/Scene'

import { X } from 'phosphor-react';

import icon360svg from '../assets/360svg.svg'
import Link from 'next/link';

const Camera = (props: any) => {
  console.log(props.position)
  const ref = useRef();
  const set = useThree((state) => state.set);
  
  console.log(props)
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
};

export default function Home() {
  const [viewIn360, setViewIn360] = useState(false);
  
  function handleUpdate3dView() {
    setViewIn360(!viewIn360);
  }

  return (
    <>
      <Head>
        <title>Product View</title>
      </Head>
  
      <main className="flex flex-col items-center justify-center w-full h-screen bg-[#D9CDF7] p-2">
          <section className='flex-1 flex flex-col items-center justify-center md:flex-row'>             
            <div className='relative w-full'>
              <button type='button' className="absolute top-2 right-6 z-10" onClick={handleUpdate3dView}>
                {viewIn360 && <X size={24} color="#271A45" />}
                {!viewIn360 && <Image src={icon360svg} alt="Imagem para visualizar em 360°" title="Visualizar em 360°" />}
              </button>

              <div id="canvas-container" className='w-[300px] h-[300px] md:w-[500px] md:h-[500px]'>
                <Canvas>
                  <Camera position={[0, 0, 180]} />
                  <ambientLight />
                  <Suspense fallback={null}>
                  <Model />
                  
                  {viewIn360 && <OrbitControls />}
                </Suspense>
                </Canvas>
              </div>
              
            </div>

            <div className='flex flex-col gap-3 w-[320px]'>
              <span className='text-text text-xs uppercase font-lato font-light'>Código: 42404</span>
              <h1 className='text-text text-3xl font-crimsonPro font-semibold '>Sofá Margot II - Rosé</h1>
              <p className='text-text/60 text-base font-lato font-normal'>R$ 4.000,00</p>
              <button 
                className='border-[1px] border-text rounded-full bg-transparent uppercase text-xs font-lato font-normal py-2 px-4 w-[150px]'
              >
                Adicionar a cesta
              </button>
            </div>
          </section>
          
          <footer>
            <div className='flex gap-8 text-blue-600 items-center  justify-center uppercase font-bold'>
              <Link href="/" className='text-center'>Página com objeto 3d</Link>
              <Link href="/page-gif" className='text-center'>Página com utilizando gif</Link>
            </div>

            <div className='text-center'>
              Feito com ❤ por 
              <a href="https://github.com/gustavosorati" target="_blank" rel="noreferrer">Gustavo Sorati</a>
            </div>
          </footer>
        </main>
    </>
  )
}
