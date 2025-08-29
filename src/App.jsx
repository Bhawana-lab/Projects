
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./Shop.jsx";
import LoginSignup from "./LoginSignup";
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import "@fontsource/poppins";
import Navbar  from "./Navbar";
import Footer from "./Footer.jsx";
import ShopCategory from './ShopCategory.jsx';
import Fruit_Banner from "./assets/Pages/fruit-banner.png";
import Vegetable_Banner from "./assets/Pages/vegetable-banner.png";
import Herbs_Banner from "./assets/Pages/herbs-banner.png";
import HerbalProduct_Banner from "./assets/Pages/herbalProduct-banner.png";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" default element={<Shop/>}/>
         <Route path='/fruit' element={<ShopCategory banner={Fruit_Banner} category="fruit"/>}/>
         <Route path='/vegetable' element={<ShopCategory banner={Vegetable_Banner} category="vegetable"/>}/>
        <Route path='/herbs' element={<ShopCategory banner={Herbs_Banner} category="herbs"/>}/>
        <Route path='/herbalProduct' element={<ShopCategory banner={HerbalProduct_Banner} category="herbalProduct"/>}/>
         <Route path="/product" element={<Product category="fruit"/>}>
              <Route path=":productId" element={<Product/>}/>

        </Route>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/Login' element={<LoginSignup/>}/> 
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
