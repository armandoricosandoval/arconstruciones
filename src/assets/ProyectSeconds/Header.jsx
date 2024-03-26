import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
  const apartments = [
    {
      image: "public/images/apto (1).jpg",
      title: "Apartamento Familiar Moderno",
      description:
        "Disfruta de la comodidad y el estilo en este moderno apartamento familiar. Con amplios espacios, diseño contemporáneo y abundante luz natural, este hogar es perfecto para crear recuerdos inolvidables con tu familia.",
    },
    {
      image: "public/images/apto (2).jpg",
      title: "Hogar Acogedor para la Familia",
      description:
        "Bienvenido a tu nuevo hogar. Este acogedor apartamento familiar te ofrece un ambiente cálido y confortable para disfrutar con tus seres queridos. Con una distribución inteligente y detalles encantadores, este lugar te hará sentir como en casa desde el primer momento.",
    },
    {
      image: "public/images/apto (3).jpg",
      title: "Apartamento Espacioso para la Familia Moderna",
      description:
        "Descubre el lujo de la amplitud en este apartamento familiar espacioso. Con sus generosos espacios abiertos y su diseño elegante, este hogar ofrece el equilibrio perfecto entre comodidad y estilo. Aquí, cada miembro de la familia encontrará su propio espacio para crecer, jugar y relajarse juntos.",
    },
    {
      image: "public/images/apto (4).jpg",
      title: "Refugio Familiar Tranquilo",
      description:
        "Escapa del bullicio de la ciudad y encuentra paz en este refugio familiar tranquilo. Con vistas serenas y un entorno natural, este apartamento es el lugar perfecto para recargar energías y disfrutar de momentos de calma en familia.",
    },
    {
      image: "public/images/apto (5).jpg",
      title: "Hogar Luminoso para la Familia",
      description:
        "Deja que la luz entre en tu vida con este hogar luminoso para la familia. Con grandes ventanales y espacios abiertos, este apartamento está diseñado para maximizar la luminosidad y crear un ambiente alegre y acogedor para ti y tus seres queridos.",
    },
    {
      image: "public/images/apto (6).jpg",
      title: "Apartamento Familiar Elegante",
      description:
        "Vive con estilo en este apartamento familiar elegante. Con acabados de alta calidad y detalles de diseño cuidadosamente seleccionados, este hogar ofrece un ambiente sofisticado y confortable para tu familia.",
    },
    {
      image: "public/images/apto (7).jpg",
      title: "Oasis Urbano para la Familia",
      description:
        "Descubre un oasis urbano en medio de la ciudad en este apartamento para la familia. Con áreas verdes, comodidades modernas y una ubicación conveniente, este hogar ofrece la combinación perfecta de vida urbana y tranquilidad familiar.",
    },
    {
      image: "public/images/apto (8).jpg",
      title: "Apartamento Familiar Versátil",
      description:
        "Haz realidad tus sueños en este apartamento familiar versátil. Con espacios flexibles que se adaptan a las necesidades de tu familia, este hogar te brinda la libertad de crear el estilo de vida que deseas.",
    },
    {
      image: "public/images/apto (9).jpg",
      title: "Hogar Familiar Moderno y Funcional",
      description:
        "Disfruta de la funcionalidad y el diseño contemporáneo en este hogar familiar moderno. Con soluciones inteligentes para el almacenamiento y el espacio, este apartamento hace que la vida familiar sea más fácil y más elegante que nunca.",
    },
    {
      image: "public/images/apto (10).jpg",
      title: "Apartamento Familiar con Encanto Histórico",
      description:
        "Sumérgete en la historia y el encanto en este apartamento familiar con un toque histórico. Con detalles arquitectónicos originales y un ambiente lleno de carácter, este hogar te transportará a otra época mientras disfrutas de todas las comodidades modernas.",
    },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      navigation={false}
      pagination={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {apartments.map((item, index) => (
        <SwiperSlide key={index}>
          <section className={`px-10 py-5 bg-neutral-100 lg:py-10 ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}>
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
              <div className={`flex flex-col justify-center items-center ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>

                <p className="text-4xl font-bold md:text-7xl text-black animate-fade-right animate-once mb-5">{item.title}</p>
                <p className="mt-2 text-sm md:text-lg animate-fade-right animate-once">{item.description}</p>
                <button className="text-lg md:text-2xl bg-black hover:text-black text-white py-2 px-5 mt-10 hover:bg-silver hover:border-2 hover:border-red-500 animate-bounce animate-infinite animate-ease-linear animate-normal animate-fill-forwards">
                  Te Asesoramos
                </button>
              </div>
              <div className={` ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                <img
                  className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
