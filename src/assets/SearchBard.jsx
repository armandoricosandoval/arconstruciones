

const SearchBard = () => {
    return (
        <div className='bg-silver py-5 w-full mt-10 mx-auto hero'>
            <div className='flex flex-col justify-center items-center mx-auto text-center hero-content'>

                <h1 className='text-4xl font-bold mb-5 text-red-500 flex gap-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>

                    Nuestros proyectos </h1>
                <p className='text-2xl'>Nos hemos esforzado por crear espacios únicos, innovadores y funcionales, para brindarte una experiencia de vida excepcional.</p>
                <div className="join w-[90%] mx-auto mt-5 h-20" >
                    <select className="select select-bordered w-full max-w-xl join-item h-16 text-xl">
                        <option disabled selected>Ubicación</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs join-item h-16 text-xl">
                        <option disabled selected>Precio</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs join-item h-16 text-xl">
                        <option disabled selected>Área</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator h-16">
                        <button className="btn join-item select-bordered h-16"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBard
