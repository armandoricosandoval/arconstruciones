import { useState } from 'react';

import './cardStyle.css';
import { ProyectosAll } from '../../DataJson/ProyectosAll';
import { Link } from 'react-router-dom';


const CardProyect = () => {
    const [numProyectosMostrados, setNumProyectosMostrados] = useState(6);

    const handleVerMasClick = () => {
        // Aumentar en 3 el número de proyectos mostrados
        setNumProyectosMostrados(prev => prev + 3);
    };

    return (
        <div className="bg-silver  w-full h-auto">
            <div className="flex flex-wrap  justify-between gap-4 px-4 max-w-6xl mx-auto">
                {ProyectosAll.slice(0, numProyectosMostrados).map((item, index) => (
                    <div key={index} className="card w-full md:w-[calc(33%-1rem)] lg:w-[calc(43%-1rem)] xl:w-[calc(33%-1rem)] h-auto text-center shadow-[0px_0px_18px_#ccc] mx-auto my-5 bg-white rounded-3xl">
                        <div className="object-contain">
                            <img src={item.listProjects[0].coverImageUrl} alt="" className="w-full h-full [-o-object-fit:cover] hover:object-scale-down object-cover absolute rounded-[15px] left-0 top-0" />
                        </div>
                        <div className="bg-[color:var(--white)] pt-5 pb-10 px-10">
                            <div className="info flex flex-col justify-center gap-5 mx-auto items-center">
                                <img src={item.listProjects[0].logoUrl} alt="" className="w-28 h-28 bg-[color:var(--white)] p-[5px]  object-cover" />
                                <div className=" text-xl font-semibold uppercase">{item.listProjects[0].Macroproyecto}</div>
                                {/* <div className="intro text-sm font-normal leading-[1.6] mt-5 mb-[30px] mx-0">
                                    <p>{item.listProjects[0].description}</p>
                                </div> */}
                                <>
                                <Link to="/arc/myproyect" className="btn bg-red-600 text-white w-36 relative bottom-5 top-0 right-0 left-0">Ver Detalles</Link>
                                </>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {numProyectosMostrados < ProyectosAll.length && (
                <div className="mx-auto mt-5 w-full text-center py-5">
                    <button className="btn  btn-outline bg-red-500 text-lg hover:bg-white hover:text-black text-white w-72" onClick={handleVerMasClick}>Ver Mas Proyectos</button>
                </div>
            )}
        </div>
    );
};

export default CardProyect;
