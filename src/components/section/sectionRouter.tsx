import Section from "./section"
import { Route, Routes } from 'react-router-dom';
import Empresa from "./empresa"
import Boveda from "./boveda"
import Pagos from "./pagos"
import Transferencias from "./transferencias"

const sectionRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<Section/>} />
          <Route path="/Empresa" element={<Empresa/>} />
          <Route path="/bovedas" element={<Boveda/>} />
          <Route path="/pagos" element={<Pagos/>} />
          <Route path="/transferencias" element={<Transferencias/>} />
        </Routes>
    )
  }
  
  export default sectionRouter