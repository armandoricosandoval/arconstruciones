
import {Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import NotFound from '../Components/NotFound';
import ProyectARC from '../Components/ProyectARC';
import ProyectARC2 from '../Components/ProyectARC2';


const RoutesPage = () => {
  return (
    <Routes>
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/myproyect" element={<ProyectARC />} />
      <Route path="/myproyect-2" element={<ProyectARC2 />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  );
};

export default RoutesPage;
