import React, { useState, useEffect } from "react";
import Template from "../components/Modals/Template";
import { BoostechDesc } from "../components/Modals/BoostechDesc";
import { LogsmartDesc } from "../components/Modals/LogsmartDesc";
import { FaEllipsis } from "react-icons/fa6";

const Practice = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-5 h-full flex-wrap animate-slide-down">
        <div
          onClick={() => handleModalOpen(<BoostechDesc />)}
          className="flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-br from-green-400 to-green-800 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-bold text-center mt-2">
              Programador e PO
            </p>
            <p className="mt-4 text-center">
              Empresa: <br /> Boostech Tecnologia
            </p>
            <p className="mt-4 text-center text-sm px-2">
              Empresa de desenvolvimento de software, focada no setor logistico de <b>YMS</b>
            </p>
            <FaEllipsis className={`mt-4`}/>
            <p className="p-2 mt-2 text-sm font-semibold text-center underline">
              2021 - 2023
            </p>
          </div>
        </div>
        <div onClick={() => handleModalOpen(<LogsmartDesc />)} className="flex flex-col items-center w-56 h-72 rounded-t-[2em] rounded-b-[10em] bg-gradient-to-bl from-orange-400 to-blue-700 border-b-8 border-neutral-300 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-300">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-bold text-center mt-2">
              Programador do Suporte
            </p>
            <p className="mt-4 text-center">
              Empresa: <br /> Logsmart
            </p>
            <p className="mt-4 text-center text-sm px-2">
              Empresa de desenvolvimento de software, focada no setor logistico de <b>WMS</b>
            </p>
            <FaEllipsis className={`mt-4`}/>
            <p className="p-2 mt-2 text-sm font-semibold text-center underline">
              2023
            </p>
          </div>
        </div>
      </div>
      <Template open={openModal} close={() => setOpenModal(false)}>
        {modalContent}
      </Template>
    </>
  );
};

export default Practice;
