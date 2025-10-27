import React from 'react'
import logo from '../../../assets/logo.png'

const DoorReachLogo = () => {
    return (
        <div className='flex items-end'>
                <img src={logo} alt="" />
            <p className='text-2xl font-semibold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent'>Door<span className='italic text-3xl '>Reach</span> </p>
        </div>
    )
}

export default DoorReachLogo