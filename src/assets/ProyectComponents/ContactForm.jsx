import React from 'react'

const ContactForm = () => {
    return (
        <div>
            {/* Contact Header Section */}
            <section className="pb-20 relative block bg-black text-white">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: 80, transform: "translateZ(0px)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x={0}
                        y={0}
                    >
                        <polygon points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white uppercase">
                                Contáctanos
                            </h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4">
                                Hacemos que tu experiencia sea más satisfactoria; atendemos tus inquietudes y necesidades en línea, de todo tu proceso de compra, legalización y tramites con una asesoría especializada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <section className="relative block py-24 lg:pt-0 bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-72">
                        <div className="w-full lg:w-6/12 px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-gray-300"
                                data-aos="fade-up-right"
                            >
                                <div className="flex-auto  bg-orange-500 text-white">

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-xs font-bold mb-2"
                                            htmlFor="full-name"
                                        >
                                            Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Full Name"
                                            style={{ transition: "all 0.15s ease 0s" }}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Correo Electronico
                                        </label>
                                        <input
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Email"
                                            style={{ transition: "all 0.15s ease 0s" }}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Mensaje
                                        </label>
                                        <textarea
                                            rows={4}
                                            cols={80}
                                            className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Type a message..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-red-500 text-white active:bg-gray text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all 0.15s ease 0s" }}
                                        >
                                            Enviar Pregunta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactForm
