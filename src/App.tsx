import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Gallery from './pages/Gallery';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
