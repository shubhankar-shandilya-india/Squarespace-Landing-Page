import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cmp = () => {
  const app = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".image,.nav1,.nav2,.nav3,.bt1,.bt2", {
        y:-100,
        duration:0.8,
        delay:0.4,
        opacity:0,
        stagger:0.4,
      });

    }, app);

    return () => ctx.revert();

  }, [])

  return (
    <div className='w-full h-full bg-black flex flex-col' ref={app} >
      <div className=' flex font-medium text-white justify-between items-center text-sm  py-2' >
        <img className='image ml-2 h-[50px] flex justify-start bg-black ' src="https://static1.squarespace.com/static/5134cbefe4b0c6fb04df8065/t/5bd1e183ec212df24c8d5d0f/1582743997341/squarespace-logo-horizontal-white.jpg" alt="" />
        <div className='flex justify-between gap-[5vw]'>
          <div className='nav1'>PRODUCTS</div>
          <div className='nav2'>TEMPLATES</div>
          <div className='nav3'>RESOURCES</div>
        </div>
        <div className='flex justify-end mr-4 gap-[30px] h-full items-center'>
          <button className='bt1'>LOG IN</button>
          <button className='bt2 bg-white text-black  h-[80%] px-4'>GET STARTED</button>
        </div>
      </div >
      <div className='h-full text-white text-9xl font-medium flex flex-col items-center justify-center' >
        <div >EVERYTHING</div>
        <div className='flex items-center gap-6'>TO <span className='w-[15vw] p-4 bg-[#8e3030] rounded-full text-xl text-center'>BOOK NOW</span> SELL</div>
        <div>ANYTHING</div>
      </div>
    </div>
  )
};

export default Cmp;

