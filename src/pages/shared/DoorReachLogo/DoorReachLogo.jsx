import React from 'react'
import logo from '../../../assets/logo.png'

const DoorReachLogo = () => {
    return (
        <div className='flex items-end'>
                <img src={logo} alt="" />
            <p className='text-3xl font-semibold'>Door<span className='italic bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"'>Reach</span> </p>
        </div>
    )
}

export default DoorReachLogo