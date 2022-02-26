import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Cart from './pages/cart';
import CatePage from './pages/catePage';
import HomePage from './pages/homePage';
import ProdDetail from './pages/prodDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-category/:nameCate' element={<CatePage />} />
        <Route path='/product-detail/:id' element={<ProdDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
