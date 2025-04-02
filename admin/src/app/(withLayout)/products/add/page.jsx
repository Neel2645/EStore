import AddProducts from "@/screens/products/add";
import { getProductTypes } from "@/actions/productTypesAction";

const AddProductPage = async ({searchParams})=>{
    const productTypes = await getProductTypes();
    const {errorMessage} = await searchParams;
    return(
        <>
            <AddProducts 
                errorMessage={errorMessage}
                productTypes={productTypes}
            />
        </>
    )
}

export default AddProductPage;