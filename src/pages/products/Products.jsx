import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const {products} = useLoaderData();
    return (
        <div className="grid md:grid-cols-3 px-6 py-6 gap-5 ">
          {
             products?.map(product => <Product key={product.id} product={product}></Product>)
          }
        </div>
    );
};

export default Products;