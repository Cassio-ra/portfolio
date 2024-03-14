import React from 'react'

const Personal = () => {
    return (
        <div className='flex justify-center items-center gap-5 h-full flex-wrap animate-slide-down'>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-br from-pink-700 to-magenta-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-lg font-bold text-center mt-2'>Desenvolvedor Senior</p>
                    <p className='mt-4 text-center px-2'>Estou avançando meus conhecimentos como programador, aprendendo outras tecnologias, mesmo que não as aplicando na pratica, porém aprendendo seus conceitos</p>
                </div>
            </div>
            <div className='flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-bl from-red-400 to-purple-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300'>
            <div className="flex flex-col justify-center items-center">
                    <p className='text-lg font-bold text-center mt-2'>Empresa Própria</p>
                    <p className='mt-4 text-center px-2'>Pretendo utilizar meu CNPJ para o desenvolvimento e comercialização de aplicativos próprios, para que quando possivel, possa gerar empregos a outras pessoas em minha própria empresa</p>
                </div>
            </div>
        </div>
    )
}

export default Personal