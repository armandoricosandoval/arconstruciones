import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Events, scrollSpy } from 'react-scroll';

const OpenPages = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    Events.scrollEvent.register('scroll', (_, __, yOffset) => {
      setScrollY(yOffset);
    });
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('scroll');
    };
  }, []);

  return (
    <>
     <div className="hero h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src="https://storeproyectoar.blob.core.windows.net/ar-web-projects/Fachada-TLadera_1.jpg"
          className="max-w-xl h-128 rounded-lg shadow-2xl object-cover scale-75 hover:animate-jump hover:animate-duration-[3000ms] hover:animate-fill-forwards"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        />
        <div>
          <motion.h1
            className="text-5xl font-bold text-white hover:animate-fade-right hover:animate-duration-[5000ms] hover:animate-fill-forwards"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            TORRELADERA BOSQUE RESERVADO 2 - TORRE 2
          </motion.h1>
          <motion.p
            className="py-6 text-xl text-red-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Viva campestre: Exclusividad y tranquilidad sin salir de Bogotá en Colinas de Suba
          </motion.p>
          <motion.img
            src="https://storeproyectoar.blob.core.windows.net/logos-proyectos/Logo_TBR_ET2_Small.jpg"
            className="w-28 h-28 rounded-lg shadow-2xl object-cover scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </div> 
     

    </>
  );
};

export default OpenPages;
