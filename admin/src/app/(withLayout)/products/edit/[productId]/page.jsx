import { getUniqueProduct } from "@/actions/productAction";
import { getProductTypes } from "@/actions/productTypesAction";
import EditProduct from "@/screens/products/edit";


const EditProductPage = async ({searchParams, params})=>{
    const {errorMessage} = await searchParams;
    const productTypes = await getProductTypes();
    const id = await params.productId;
    const product = await getUniqueProduct(id);

    return(
        <div>
            <EditProduct
                errorMessage = {errorMessage}
                productTypes = {productTypes}
                product = {product}
            />
        </div>
    );
};

export default EditProductPage;