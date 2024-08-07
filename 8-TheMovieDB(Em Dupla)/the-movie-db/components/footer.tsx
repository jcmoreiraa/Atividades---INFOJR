import React from 'react';
import TikTokIcon from './FooterIcons/TikTokIcon';
import TwitterIcon from './FooterIcons/TwitterIcon';
import InstagramIcon from './FooterIcons/InstagramIcon';
import MSGIcon from './FooterIcons/MSGIcon';

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between w-full max-w-screen-lg mx-auto h-[240px] sm:hidden mb-2'>
      <div className='w-[90%]  border-t-[0.6px] space-x-7 border-gray-300 my-4'></div>
      <p className="font-Chillax text-xl font-bold leading-5 text-center text-white" >
        Terms and Conditions º FAQ</p>
      <div className='flex space-x-8 '>
        <TikTokIcon />
        <TwitterIcon />
        <InstagramIcon />
        <MSGIcon />
      </div>
      <h1 className=" text-3xl font-Dune-Rise  font-bold leading-relaxed tracking-wider text-center text-white"> O M N I</h1>
    </footer>
  );
}

export default Footer;
