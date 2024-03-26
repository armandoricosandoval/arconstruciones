import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from '../Components/Home';
import NotFound from '../Components/NotFound';
import ProyectARC from '../Components/ProyectARC';
import ProyectARC2 from '../Components/ProyectARC2';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/arc" element={<Home />} />
      <Route path="/arc/myproyect" element={<ProyectARC />} />
      <Route path="/arc/myproyect-2" element={<ProyectARC2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPage;