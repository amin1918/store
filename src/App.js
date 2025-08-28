import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Product from './pages/product/Product';
import Card from './pages/card/Card';
import About from './pages/about/About';
import Layout from './components/layout/Layout';
import { ShoppingCardProvider } from './context/ShoppingCardContext';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/logIn/LoginForm';
import Signup from './pages/signUp/SignUp';


function App() {




return (
  
    <ShoppingCardProvider>
      <AuthProvider>
      <Layout>
        <Routes>
           <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/card' element={<Card />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
      </AuthProvider>
    </ShoppingCardProvider>
  
);

}

export default App;