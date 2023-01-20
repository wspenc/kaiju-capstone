import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Product from './components/Product';
import Faq from './components/Faq';
import Kids from './screens/Kids';
import Women from './screens/Women';
import Men from './screens/Men';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function App() {
  const userId = useSelector(state => state.userId)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/login" element={!userId ? <Login /> : <Navigate to='/' />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Men/>} />
      </Routes>
    </div>
  );
}

export default App;
