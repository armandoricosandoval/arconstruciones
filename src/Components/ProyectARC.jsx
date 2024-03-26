
import Navbar from '../assets/Navbar/Navbar'
import Footer from '../assets/Footer'

import OpenPages from '../assets/ProyectComponents/OpenPages/OpenPages'
import FirstContent from '../assets/ProyectComponents/FirstContent'
import ContactForm from '../assets/ProyectComponents/ContactForm'
import SecundContent from '../assets/ProyectComponents/SecondPages/SecundContent'
import Header from '../assets/ProyectSeconds/Header'

const ProyectARC = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen h-full w-full  bg-black'>
      <OpenPages/>
      <Header />       
      <SecundContent/>  
      <FirstContent/>
      <ContactForm/>      
    </div>
    <Footer/>
    </>
  )
}

export default ProyectARC