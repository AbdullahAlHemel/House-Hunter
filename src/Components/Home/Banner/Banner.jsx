import React from 'react';
import CoverImg from '../../../assets/cover.jpg'

const Banner = () => {
    return (
        <div>
            <img className='rounded-sm w-fit' src={CoverImg} alt="" />
        </div>
    );
};

export default Banner;