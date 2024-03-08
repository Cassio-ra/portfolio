import React from 'react'

const Pratica = () => {
    return (
        <div className='flex justify-center items-center gap-5 h-full flex-wrap animate-slide-down'>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-br from-green-400 to-green-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-lg font-bold text-center mt-2'>Programador e PO</p>
                    <p className='mt-4 text-center'>Empresa: <br /> Boostech Tecnologia</p>
                    <p className='mt-4 text-center text-sm px-2'>Durante o período, fui encarregado de desenvolver e dar manutenção a features de sitemas Logisticos, assim como a prospecção das mesmas</p>
                    <p className='p-2 mt-2 text-sm font-semibold text-center underline'>2021 - 2023</p>
                </div>
            </div>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-bl from-orange-400 to-blue-700 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
            <div className="flex flex-col justify-center items-center">
                    <p className='text-lg font-bold text-center mt-2'>Programador do Suporte</p>
                    <p className='mt-4 text-center'>Empresa: <br /> Logsmart</p>
                    <p className='mt-4 text-center text-sm px-2'>Durante o período, fui encarregado de desenvolver e dar manutenção a features de sitemas Logisticos, e também de atender e dar suporte ao cliente final</p>
                    <p className='p-2 mt-2 text-sm font-semibold text-center underline'>2023</p>
                </div>
            </div>
        </div>
    )
}

export default Pratica