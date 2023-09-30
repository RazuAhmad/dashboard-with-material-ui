import Image from 'next/image';
import notificationIcon from '../public/assets/notification-icon.svg';

const Notification = () => {
    return (
        <>
            <Image src={notificationIcon} alt='' />
        </>
    )
}

export default Notification