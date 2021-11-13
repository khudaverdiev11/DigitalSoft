import Header from "./component/Header/Header";
import Sliderone from "./component/Slider/Slider";
import Carts from "./Views/Carts";
import ProductCards from "./component/Owl-Carousel/ProductCards";
// import Slider from "./component/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliderone />
      <Carts />
      <ProductCards />
    </div>
  );
}

export default App;
