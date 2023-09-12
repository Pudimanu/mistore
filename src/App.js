
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import MiPhones from './MiPhones/MiPhones.js'
import Home from './components/Home/Home';
import Music from './components/Home/Music';
import SmartDevices from './components/Home/SmartDevices';
import LifeStyle from './components/Home/LifeStyle';
import MobileAccessories from './components/Home/MobileAccessories';
import SearchProduct from './components/SearchProduct';
import Count from '../src/count/CountHome'
import Details from './count/Details';
import Page404 from './components/page404';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import Footer from './Footer';
import Protected from './components/Home/Protected';
import Product from './Products/Product';
import ProductDetails from './Products/ProductDetails';




function App() {   
  return (
    <div className="App">
      <Router>  
         
        <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/music' element={<Music/>} />
              <Route path='/smartdevices' element={<SmartDevices/>} />
              <Route path='/lifestyle' element={<LifeStyle/>} />
              <Route path='/mobileaccessories' element={<MobileAccessories/>} />
          </Route>
          <Route path='/MiPhones' element={<Protected Cmp={MiPhones} />} />
          <Route path='/searchproduct' element={<SearchProduct/>} />
          <Route path='/Count' element={<Count/>} />  
          <Route path='/Count/details' element={<Details/>} /> 
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/products/:id' element={<ProductDetails/>} />
          <Route path='/*' element={<Page404/>} />              
                
        </Routes>
       <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
