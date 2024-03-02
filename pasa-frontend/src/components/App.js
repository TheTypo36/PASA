import { useState } from "react";
import "../App.css";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { CarouselComponent } from "./CarouselCompnent";
import { Products } from "./Products";
import { Cart } from "./Cart";
import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom";

function App() {
  const [productCount, setProductCount] = useState(0);
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarouselComponent />} />
          <Route path="/cart" element={<Cart productCount={productCount} />} />
        </Routes>
      </BrowserRouter>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
