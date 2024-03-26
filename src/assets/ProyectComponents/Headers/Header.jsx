import { useState, useRef } from "react";
import "./headerStyle.css"; //

const Header = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/TDA-banner.jpg",
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Entrada-TLADERA.jpg",
      title: "Lossless 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Lobby-TLADERA.jpg",
      title: "Lossless 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/Gym-TLADERA.jpg",
      title: "Lossless 4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      imageUrl:
        "https://storeproyectoar.blob.core.windows.net/ar-web-projects/juegos_de_mesa-TLADERA.jpg",
      title: "Lossless 5",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    // Agrega más elementos del carrusel según sea necesario
  ];

  const activate = (direction) => {
    const items = sliderRef.current.childNodes;
    if (direction === "next") {
      sliderRef.current.append(items[0]);
    } else if (direction === "prev") {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <main className="mainHEard">
      <div className="bg-black  mb-10 ">
        <ul className="slider " ref={sliderRef}>
          {carouselItems.map((item, index) => (
            <li
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="content z-10 ">
                <img
                  src="https://storeproyectoar.blob.core.windows.net/logos-proyectos/Logo_TBR_ET2_Small.jpg"
                  alt=""
                  className="absolute w-24 h-24 object-cover"
                />
                {/* <h2 className="title font-bold text-3xl">{item.title}</h2>
                            <p className="description text-3xl">{item.description}</p>
                            <button className='btn btn-ghost w-36 hover:bg-red-500 '>Read More</button> */}
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <button className="btn prev" onClick={() => activate("prev")}>
            Prev
          </button>
          <button className="btn next" onClick={() => activate("next")}>
            Next
          </button>
        </nav>
      </div>
    </main>
  );
};

export default Header;
