import Image from 'next/image'
import React from 'react'
import userImg from '../public/assets/user-img.svg'
import arrowDown from '../public/assets/arrow-down.svg';

export const UserProfile = () => {
    return (
        <div className='flex items-center gap-4 ml-6 cursor-pointer'>
            <Image src={userImg} alt='' />
            {/* <NotificationsNoneOutlinedIcon sx={{ color: 'white', width: '21px', height: '24px' }} /> */}
            <span className='text-white'>Anton</span>
            <Image src={arrowDown} alt='' />
        </div>
    )
}
