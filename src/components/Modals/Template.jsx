import React from "react";

export default function Contato({open, close, children}) {
    return (
        <div onClick={close} className={`
            fixed inset-0 flex justify-center items-center
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
        `}>
            <div onClick={e => e.stopPropagation()} className={`
                bg-slate-200 opacity-95 rounded-xl shadow p-6 transition-all
                max-w-[80%]
                sm:max-w-[50%]
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                text-black
            `}>
                <button onClick={close} className='absolute top-2 right-2 px-2 rounded-xl text-gray-400 hover:bg-gray-300 hover:text-gray-600'>X</button>
                <div className={`pt-1 px-1`}>
                    {children}
                </div>
            </div>
        </div>
    )
}