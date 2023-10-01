import Image from 'next/image'

import Notification from './Notification';
import NavbarThreeDot from './NavbarThreeDot';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { UserProfile } from './UserProfile';

const UserNotification = () => {
    return (
        <div className='flex gap-16'>
            <UserProfile />
            <Notification />
            <NavbarThreeDot />

        </div>
    )
}

export default UserNotification