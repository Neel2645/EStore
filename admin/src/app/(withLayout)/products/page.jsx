import { getProducts } from "@/actions/productAction";
import Products from "@/screens/products";

const ProductsManagement = async ()=>{
    const products = await getProducts();

    return(
        <>
            <Products products={products}/>
        </>
    );
};

export default ProductsManagement;