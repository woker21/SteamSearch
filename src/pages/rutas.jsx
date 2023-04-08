import { Routes,Route } from "react-router-dom";
import Servidor from "./servers";
import Home from "./inicio";
import Usuarios from "./usuarios";



function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home/>}/>
            <Route path='/servers' element={<Servidor />}/>
            <Route path='/usuario' element={<Usuarios />}/>
        </Routes>
    );
}


export default Rutas;