import React from 'react';
import CoverImg from '../../../assets/cover.jpg'

const Banner = () => {
    return (
        <div>         
            <img className='rounded-sm w-fit' src={CoverImg} alt="" />
            <div className='flex'>
               <div className='w-2/4 text-justify px-8 my-4 py-20 border text-xl text-sky-800'>
                <h2>House Hunters follows individuals, couples, or families searching for a new home with the assistance of a local real estate agent. In each episode, the buyers must decide among three potential houses or apartments to buy or rent, ultimately choosing one before the end of the episode. The show concludes by revisiting the chosen home a few weeks or months later, when participants describe the changes they've made and the effect the new home has had on their life.</h2>
               </div>

               <div  className='w-2/4'>
                    <h2 className='text-center text-4xl font-semibold my-44 text-cyan-400'>Design Your Own Home</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;