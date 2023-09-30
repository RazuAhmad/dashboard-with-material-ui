import Image from 'next/image'
import userImg from '../public/assets/user-img.svg'
import arrowDown from '../public/assets/arrow-down.svg';


import Notification from './Notification';
import NavbarThreeDot from './NavbarThreeDot';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const UserNotification = () => {
    return (
        <div className='flex gap-16'>
            <div className='flex items-center gap-4 ml-6 cursor-pointer'>
                <Image src={userImg} alt='' />
                {/* <NotificationsNoneOutlinedIcon sx={{ color: 'white', width: '21px', height: '24px' }} /> */}
                <span className='text-white'>Anton</span>
                <Image src={arrowDown} alt='' />
            </div>
            <Notification />
            <NavbarThreeDot />

        </div>
    )
}

export default UserNotification