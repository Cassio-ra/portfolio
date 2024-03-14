import { BsEyeglasses, BsFillHouseDoorFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
import ModalCtt from "./components/Modals/Contact";
import Modal from "./components/Modals/Template";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Practice from "./pages/Practice";
import Academic from "./pages/Academic";
import { useState } from "react";
import Cassio from "/src/images/Cassio.png";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "pessoal":
        return <Personal />;
      case "pratica":
        return <Practice />;
      case "academico":
        return <Academic />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-slate-800 to-violet-700 text-white flex flex-col gap-4">
      <Helmet>
        <title>Cássio Rezende Alvarenga</title>
        {/*<link rel="icon" type="image/png" href="caminho_fav.png" sizes="16x16" />*/}
      </Helmet>
      <div className="flex items-center absolute left-2 top-2 group">
        <p className="text-2xl">&lt;/</p>
        <BsEyeglasses className="text-3xl size-16 group-hover:rotate-3 transition-all" />
        <p className="text-2xl">&gt;</p>
      </div>
      <div className="top-0 flex flex-col justify-center items-center w-full h-1/4">
        <img src={Cassio} className="size-32 rounded-full mt-5" alt="" />
        <div className="flex items-center">
          {currentPage !== "home" && (
            <BsFillHouseDoorFill
              className={"absolute -ml-7 size-6 hover:cursor-pointer"}
              onClick={() => setCurrentPage("home")}
            />
          )}
          <p className="text-2xl flex ">Cássio Rezende Alvarenga</p>
        </div>
      </div>
      <div
        id={"content"}
        className="flex justify-center content-center w-full p-2 flex-grow h-2/4"
      >
        {renderPage()}
      </div>
      <div className="p-2 mb-4 flex justify-center content-center w-full h-1/4">
        <button
          onClick={() => setOpenModal(true)}
          className="border text-xl font-medium h-fit px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white hover:scale-110 hover:rounded-full transition-all duration-300"
        >
          Contate-me
        </button>
      </div>
      <Modal open={openModal} close={() => setOpenModal(false)}>
        <ModalCtt />
      </Modal>
    </div>
  );
}

export default App;
