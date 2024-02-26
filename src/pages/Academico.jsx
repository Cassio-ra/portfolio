import React from 'react'

const Academico = () => {
    return (
        <div className='flex justify-center items-center gap-5 h-full flex-wrap'>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-br from-blue-400 to-blue-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex flex-col justify-center items-center">
                    <p className='mt-4'>Formação em</p>
                    <p className='text-lg font-bold text-center mt-2'>Análise e Desenvolvimento de Sistemas</p>
                    <p className='mt-4 text-center'>Instituição de ensino: <br /> Universidade Paulista - UNIP</p>
                    <p className='p-2 mt-2 text-sm font-semibold text-center underline'>Concluída - 2021</p>
                </div>
            </div>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-bl from-yellow-400 to-yellow-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex flex-col justify-center items-center">
                    <p className='mt-4'>Formação em</p>
                    <p className='text-lg font-bold text-center mt-2'>Ciências da Computação</p>
                    <p className='mt-4 text-center'>Instituição de ensino: <br /> Anhembi Morumbi</p>
                    <p className='p-2 mt-2 text-sm font-semibold text-center underline'>Cursando</p>
                </div>
            </div>
        </div>
    )
}

export default Academico