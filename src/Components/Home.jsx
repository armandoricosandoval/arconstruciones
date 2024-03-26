
import Navbar from '../assets/Navbar/Navbar';
import Carousel from '../assets/Carousel/Carousel';
import SearchBard from '../assets/SearchBard';
import CardProyect from '../assets/CardsProyect/CardProyect';
import Footer from '../assets/Footer';
import ScrollButton from '../assets/ScrollButton';

const Home = () => {
  return (
    <div className='bg-silver'>
      <Navbar/>
      <Carousel/>
      <SearchBard/>
      <CardProyect/>
      <div className='bg-black mx-auto text-center py-8 border-b-2 border-white'>
        <h2 className='text-white text-4xl mb-5'>Déjanos tus datos, nos contactaremos cuanto antes</h2>
        <button className='btn btn-active btn-neutral hover:bg-red-400 text-black w-72 border-red-800 bg-gray-light text-xl'>Dejar mis datos</button>
      </div>
      <Footer/>
      <ScrollButton/>
    </div>
  );
};

export default Home;