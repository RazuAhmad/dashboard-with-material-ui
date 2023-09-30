import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="col-span-3">
            <div className='sick-leave-box flex justify-between px-[10px] py-[10px] gap'>
                {children}
            </div>
        </div>
    )
}

export default Card