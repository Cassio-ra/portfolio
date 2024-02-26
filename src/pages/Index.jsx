import { Link, Outlet, useLocation } from "react-router-dom"
import { BsEyeglasses, BsFillHouseDoorFill } from "react-icons/bs";
import { Helmet } from 'react-helmet';
import ModalCtt from '../components/Contato';
import { useState } from "react";

function Index() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-slate-800 to-violet-700 text-white flex flex-col gap-4">
      <Helmet>
        <title>Cássio Rezende Alvarenga</title>
        {/* <link rel="icon" type="image/png" href="caminho_para_seu_favicon.png" sizes="16x16" /> */}
      </Helmet>
      <Link to={''} className="flex items-center absolute left-2 top-2 group">
          <p className='text-2xl'>&lt;/</p>
            <BsEyeglasses className='text-3xl size-16 group-hover:rotate-3 transition-all' />
          <p className='text-2xl'>&gt;</p>
      </Link>
      <div className="top-0 flex flex-col justify-center items-center w-full h-1/4">
        <img src="/public/Images/Cassio.png" className="size-32 rounded-full mt-5" />
        <p className="text-2xl flex">Cássio Rezende Alvarenga</p>
      </div>
      <div className="flex justify-center content-center w-full p-2 flex-grow h-2/4">
        <Outlet />
      </div>
      <div className="p-2 mb-4 flex justify-center content-center w-full h-1/4">
        <button onClick={() => setOpen(true)} className="border text-xl font-medium h-fit px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white hover:scale-110 hover:rounded-full transition-all duration-300">Contate-me</button>
      </div>
      <ModalCtt open={open} close={() => setOpen(false)}>

      </ModalCtt>
    </div>
  )
}

export default Index
