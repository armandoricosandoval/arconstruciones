import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const Carousel = () => {

    const data =[
        {
          "_id": "65f089f24220ef9c92deeb7f",
          "code": 484,
          "slogan": "Disfruta una vista inigualable desde tu apartamento en 1ra línea de playa en Santa Marta.",
          "message": "Reserva del Mar Puerto Gaira",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/PG-portada.png",
          "slug": "apartamentos-venta-santa-marta-reserva-del-mar-gaira"
        },
        {
          "_id": "65f089f24220ef9c92deeb7e",
          "code": 426,
          "slogan": "Apartamentos de playa en la zona más exclusiva de Bello Horizonte en Santa Marta.",
          "message": "Reserva del Mar Bello Horizonte 2",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/RDMBH-banner.jpg",
          "slug": "apartamentos-venta-santa-marta-reserva-del-mar-bello-horizonte"
        },
        {
          "_id": "65f089f24220ef9c92deeb83",
          "code": 320,
          "slogan": "Vive en el corazón de Fontibón cerca a todo lo que necesitas.",
          "message": "Torres de Fontibón",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TDF-banner.jpg",
          "slug": "apartamentos-venta-fontibon-torres-de-fontibon-etapa-2"
        },
        {
          "_id": "65f089f24220ef9c92deeb84",
          "code": 369,
          "slogan": "La nueva ciudadela campestre de Zipaquirá con parqueadero privado y subsidio.",
          "message": "Salinas 2",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/SAL_2-banner.jpg",
          "slug": "apartamentos-venta-zipaquira-salinas-2-etapa-3"
        },
        {
          "_id": "65f089f24220ef9c92deeb85",
          "code": 429,
          "slogan": "Una Inversión segura y rentable en el corazón de Bogotá, sobre la calle 26 con carrera 30.",
          "message": "Reserva de la 26 ",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/cover_reserva_de_la_26.jpg",
          "slug": "apartamentos-venta-avenida-el-dorado-reserva-de-la-26"
        },
        {
          "_id": "65f089f24220ef9c92deeb80",
          "code": 485,
          "slogan": "Apartamentos en Girardot; Tu propia vivienda en tierra caliente con acceso a subsidio.",
          "message": "Girardot Reservado",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Piscina-GR-Banner.jpg",
          "slug": "apartamentos-venta-vis-girardot-reservado-etapa-1"
        },
        {
          "_id": "65f089f24220ef9c92deeb81",
          "code": 380,
          "slogan": "Tu apartamento con un club residencial en Madrid ¡Disfrútalo sin salir de casa!.",
          "message": "Fontana 6",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/F6-banner.jpg",
          "slug": "apartamentos-venta-madrid-cundinamarca-fontana-6-etapa-2"
        },
        {
          "_id": "65f089f24220ef9c92deeb86",
          "code": 100,
          "slogan": "Apartaestudios en una ubicación estratégica en Bogotá, en la Avenida Suba con Calle 100.",
          "message": "Torres de los Andes",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TDA-banner.jpg",
          "slug": "apartamentos-venta-barrios-unidos-torre-de-los-andes"
        },
        {
          "_id": "65f089f24220ef9c92deeb82",
          "code": 366,
          "slogan": "Vive la naturaleza y tranquilidad en una zona exclusiva en Cajicá.",
          "message": "Reserva de Cajicá",
          "bannerUrl": "https://storeproyectoar.blob.core.windows.net/ar-web-projects/RDC-banner.jpg",
          "slug": "apartamentos-venta-cajica-reserva-de-cajica"
        }
      ]
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper px-48 mt-5"
      >
        {data.map((item,index)=>{
        return <SwiperSlide key={index} className="bg-black rounded-3xl">
          <img
            src={item.bannerUrl}
            className="h-128 w-full object-cover rounded-3xl opacity-50"
          />

          <div className=" absolute mx-auto bottom-1/2 top-1-2 right-0 left-0 w-full z-50">
            <h1 className="text-white text-center text-5xl ">{item.message}</h1>
            <p className="text-white text-center text-2xl  mt-3">{item.slogan}</p>
            <a className="btn glass w-48 text-white text-lg h-10 mt-5 mx-auto ml-[43%]" href={`https://www.arconstrucciones.com/proyectos-ar/detalles-de-proyecto/${item.slug}`}  >Ver Proyecto</a>
          </div>
        </SwiperSlide>

        })}
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
