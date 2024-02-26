import React from 'react'
import { IoLogoLinkedin, IoLogoGithub,IoLogoWhatsapp, IoMail } from "react-icons/io5";

export default function Contato({open, close}) {
    return (
        <div onClick={close} className={`
            fixed inset-0 flex justify-center items-center
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
        `}>
            <div onClick={e => e.stopPropagation()} className={`
                bg-white rounded-xl shadow p-6 transition-all
                max-w-[80%]
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                text-black
            `}>
                <button onClick={close} className='absolute top-2 right-2 p-1 rounded-ls text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>X</button>
                <div className='mt-2'>
                    <p>Fico feliz em saber de seu interesse, aqui estão alguns dos meus canais de comunicação Disponiveis:</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    <button className='p-2 border-black border rounded-xl flex justify-center items-center' onClick={() => window.open('https://www.linkedin.com/in/cassio-ra/')}>
                        <IoLogoLinkedin className='text-black size-6'/><p>LinkedIn</p>
                    </button>
                    <button className='p-2 border-black border rounded-xl flex justify-center items-center' onClick={() => window.open('mailto:cassio_ra@outlook.com?subject=Interesse%20em%20seu%20Portif%C3%B3lio!')}>
                        <IoMail className='text-black size-6'/><p>Email</p>
                    </button>
                    <button className='p-2 border-black border rounded-xl flex justify-center items-center' onClick={() => window.open('https://wa.link/522n0i')}>
                        <IoLogoWhatsapp className='text-black size-6'/><p>WhatsApp</p>
                    </button>
                    <button className='p-2 border-black border rounded-xl flex justify-center items-center' onClick={() => window.open('https://github.com/Cassio-ra')}>
                        <IoLogoGithub className='text-black size-6'/><p>Github</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
