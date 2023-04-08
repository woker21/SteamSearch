import Menu from './componentes/menu';
import './css/general.css'
import { Footer } from './pages/inicio';
import Rutas from './pages/rutas';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Rutas/>
      <Footer/>
    </div>
  );
}

export default App;
