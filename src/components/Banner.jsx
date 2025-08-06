import React from 'react'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'


export default function Banner() {
    return (
        <div className='h-8 md:h-10 bg-[#FFEECC] text-black flex items-center justify-end gap-5 px-6 md:px-14'>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'tel:+97140000000'}>
                <img src={phone} alt="phone" className='w-4 md:w-5' />
                <p className='text-xs md:text-base'>+971 4000 0000</p>
            </div>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'mailto:info@siramamba.com'}>
                <img src={mail} alt="mail" className='w-4 md:w-5' />
                <p  className='text-xs md:text-base'>info@siramamba.com</p>
            </div>
        </div>
    )
}
