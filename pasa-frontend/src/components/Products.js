import { useEffect, useState } from "react";
import { list } from "./Data.js";
import { ProductCard } from "./ProductCard.js";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("here is the list", list);
    setProducts(list);
  }, [products]);
  return (
    <div>
      {products.map((item) => {
        console.log(item.name);
        <ProductCard item={item} />;
      })}
    </div>
  );
};
