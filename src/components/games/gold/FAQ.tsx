import React from 'react';

const FAQ = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold'>WoW Gold FAQ</h2>
      <h3 className='text-2xl font-semibold mt-2'>How does it work?</h3>
      <ul className='flex flex-col gap-2 mt-2 text-[#b8bcff]'>
        <li className='flex gap-4 items-center'>
          <div className='w-3 h-3 bg-slate-600 rotate-45 rounded-[2px]' />
          <div>
            Before buying WoW gold, we advise you to send a message to a seller
            and clarify all details and discuss a delivery method;
          </div>
        </li>
        <li className='flex gap-4 items-center'>
          <div className='w-3 h-3 bg-slate-600 rotate-45 rounded-[2px]' />
          <div>Place an order;</div>
        </li>
        <li className='flex gap-4 items-center'>
          <div className='w-3 h-3 bg-slate-600 rotate-45 rounded-[2px]' />
          <div>Receive your gold via the discussed method;</div>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
