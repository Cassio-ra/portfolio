import React from 'react'
import { IoSchool, IoBusiness, IoPerson, IoLink } from "react-icons/io5";

const Home = ({ setCurrentPage }) => {
    return (
        <div className='flex justify-center items-center gap-5 h-full flex-wrap animate-slide-down'>
            <div onClick={() => setCurrentPage('academico')} className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-br from-yellow-400 to-blue-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex items-center">
                    <IoSchool className='text-3xl size-20 mt-2'/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-xl font-bold'>Acadêmico</p>
                    <p className='p-2 text-sm font-semibold text-center'>Formação na area de TI voltada a desenvolvimento de software</p>
                </div>
                <div className=''>
                    <IoLink className='size-7'/>
                </div>
            </div>

            <div onClick={() => setCurrentPage('pessoal')} className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-b from-purple-900 to-green-400 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex items-center mt-2">
                    <IoPerson className='text-3xl size-20' />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-xl font-bold'>Pessoal</p>
                    <p className='p-2 text-sm font-semibold text-center'>Desenvolvimento de conhecimentos para em um futuro proximo alcançar o empreendedorismo</p>
                    <div className=''>
                        <IoLink className='size-7'/>
                    </div>
                </div>
            </div>

            <div onClick={() => setCurrentPage('pratica')} className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-bl from-green-800 to-orange-400 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex items-center">
                    <IoBusiness className='text-3xl size-20 mt-2' />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-xl font-bold'>Prático</p>
                    <p className='p-2 text-sm font-semibold text-center'>Mais de 2 anos trabalhando com desenvolvimento de web app no ramo Logistico</p>
                    <div className=''>
                        <IoLink className='size-7'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home