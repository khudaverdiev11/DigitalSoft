import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Home/Header/Navbar';
import Home from './component/Home/Home'
import ProductDetail from "./component/Product Detail Page/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ProductDetail/:productId" element={<ProductDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
