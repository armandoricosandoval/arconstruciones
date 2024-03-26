
import "./SecundStyle.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Header from "../Headers/Header";
import { useState } from "react";

const SecundContent = () => {


  const apartamentos = [
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TBRE2-apto-tipo-263.png",
      title: "Apartamento 38.50 M²",
      price: "$183,999,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "38.5 m²",
      areaPrivada: "34.5 m²",
      banos: 2,
      habitaciones: 2,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TBRE2-apto-tipo-208.png",
      title: "Apartamento 45.60 M²",
      price: "$210,000,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "45.6 m²",
      areaPrivada: "41.2 m²",
      banos: 1,
      habitaciones: 3,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TBRE2-apto-tipo-197.png",
      title: "Apartamento 55.75 M²",
      price: "$250,500,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "55.75 m²",
      areaPrivada: "50.20 m²",
      banos: 2,
      habitaciones: 2,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TBRE2-apto-tipo-178.png",
      title: "Apartamento 40.00 M²",
      price: "$190,000,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "40.00 m²",
      areaPrivada: "36.00 m²",
      banos: 1,
      habitaciones: 1,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TBRE2-apto-tipo-127.png",
      title: "Apartamento 48.25 M²",
      price: "$220,500,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "48.25 m²",
      areaPrivada: "43.42 m²",
      banos: 2,
      habitaciones: 2,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Tipo-2-Medianero-ajustado-E1a-Acanto2.jpg",
      title: "Apartamento 60.80 M²",
      price: "$280,000,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "60.80 m²",
      areaPrivada: "54.72 m²",
      banos: 1,
      habitaciones: 3,
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Tipo-2A-Esquinero-1-E1a-Acanto2.jpg",
      title: "Apartamento 70.20 M²",
      price: "$330,000,000",
      priceNote: "Precio estimado en pesos",
      areaConstruida: "70.20 m²",
      areaPrivada: "63.18 m²",
      banos: 2,
      habitaciones: 2,
    },
  ];
 
  return (
    <main>
      <div className="h-screen">
        <Header />
      </div>
      <section className="section-6 bg-black text-white py-10">
        <div className="text-center mb-5">
          <h1 className="text-4xl">Tipos de apartamentos</h1>
        </div>
        <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper px-8"
      >
          {apartamentos.map((apartamento, index) => (
            <SwiperSlide key={index} className="">
              <figure className="figure">
                <img
                  src={apartamento.imageUrl}
                  alt="Apartamento"
                  className="h-96 w-full object-cover"
                />
                <figcaption className="absolute w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="p-4 text-center">
                    <p className="text-4xl font-semibold">{apartamento.title}</p>
                    <p className="text-black mb-1 text-5xl">{apartamento.price}</p>
                    <p className="sm:text-sm text-black lg:text-2xl">
                      {apartamento.priceNote}
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-vector-square text-black mr-2"></i>
                        <p>
                          Área construida:
                          <span className="font-semibold">
                            {apartamento.areaConstruida}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-vector-square text-black mr-2"></i>
                        <p>
                          Área privada:
                          <span className="font-semibold">
                            {apartamento.areaPrivada}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-bathroom text-black mr-2"></i>
                        <p>
                          Baños:
                          <span className="font-semibold ml-2">
                            {apartamento.banos}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-bed text-black mr-2"></i>
                        <p>
                          Habitaciones:
                          <span className="font-semibold ml-2">
                            {apartamento.habitaciones}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-700">
                      Cotiza y separa
                    </button>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </section>
      
    </main>
  );
};

export default SecundContent;
