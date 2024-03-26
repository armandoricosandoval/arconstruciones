
const FirstContent = () => {
  return (
    <div className="min-h-screen h-full w-full px-4 ">
      <div  className="border-t-2 border-t-gray-dark py-5 bg-black text-white">
        <div className="mx-auto px-4">
          <div className="items-center flex flex-row justify-around gap-2">
            <div
              className="w-full md:w-1/2 ml-auto mr-auto px-4"              
            >
              <img
                alt="..."
                className="h-144 w-128 object-cover rounded-lg shadow-lg animate-flip-up animate-duration-[2000ms] animate-fill-forwards"
                src="https://storeproyectoar.blob.core.windows.net/ar-web-projects/Sala3-TLADERA.jpg"
              />
            </div>
            <div
              className="w-full md:w-1/2 ml-auto mr-auto px-4 hover:animate-fade-right hover:animate-duration-[2000ms] hover:animate-fill-forwards"
            >
              <div className="">
                <small className="text-white">Torreladera </small>
                <h3 className="text-4xl uppercase font-bold text-red-500">
                  Naturaleza sin trancones
                </h3>
                <p className="mt-4 text-lg leading-relaxed">
                  Exclusivos y amplios apartamentos en un entorno campestre,
                  único en Bogotá, estratégicamente ubicados en Colinas de Suba.
                  El lugar perfecto para vivir: Naturaleza sin trancones, ni
                  peajes y las zonas sociales que merece tu familia. Disfruta
                  del confort, la iluminación y los modernos acabados de la
                  mejor calidad del mercado. Además, contamos con Penthouse con
                  terrazas privadas en el último piso.
                </p>
                {/* <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i className="fas fa-dumbbell fa-2x" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl">
                          Piscina para adultos y niños
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i className="fas fa-hard-hat fa-2x" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl">
                          Zonas húmedas: Jacuzzi, sauna y turco
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i className="fas fa-users fa-2x" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl">Zona de masajes</h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
