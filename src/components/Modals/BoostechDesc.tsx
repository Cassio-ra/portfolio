export const BoostechDesc = () => {
  return (
    <>
      <div className={`flex flex-col gap-2`}>
        <div className={`text-center font-medium text-wrap`}>
          <p>
            Aqui estão algumas das habilidades que desenvolvi durante o periodo
            na empresa:
          </p>
        </div>
        <div className={`flex gap-1 justify-center items-center flex-wrap`}>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=php"
               alt="php"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              PHP <br/> Em todas as aplicações
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=laravel"
               alt="laravel"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Laravel <br/> Utilizamos em todas as aplicações da empresa
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=postgres"
               alt="postgresql"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Postgresql <br/> Juntamente com o Eloquent ORM do Laravel
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=gitlab"
               alt="gitlab"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Gitlab <br/> Utilizado para o versionamento de todos projetos
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=python"
               alt="python"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Python <br/> Utilizado em automação de testes
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=bootstrap"
               alt=""
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Bootstrap <br/> Utilizado para a maioria das aplicações
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=vue"
               alt="vue"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              VUE.js <br/> Utilizado em um dos projetos
            </span>
          </div>
          <div className="group relative flex justify-center">
            <img
               src="https://skillicons.dev/icons?i=tailwind"
               alt="tailwind"
               className={`size-14`}
            />
            <span
               className="absolute w-36 top-16 scale-0 rounded bg-gray-800 p-1 text-xs text-center text-white group-hover:scale-100 z-[10]">
              Tailwind <br/> Utilizado juntamente com Vue
            </span>
          </div>
        </div>
        <div className={`text-center font-medium text-wrap`}>
          <p>
            Durante o período, fui encarregado de desenvolver e dar manutenção
            a features de sitemas Logisticos, assim como a prospecção das
            mesmas
          </p>
        </div>

      </div>
    </>
  );
};
