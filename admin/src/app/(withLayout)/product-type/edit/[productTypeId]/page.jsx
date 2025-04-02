import { getUniqueProductType } from "@/actions/productTypesAction";
import EditProductType from "@/screens/product-type/edit"

const EditProductTypePage =  async ({params,searchParams}) => {
    const {errorMessage} = await searchParams;
    const productType = await getUniqueProductType(params.productTypeId);
  return (
    <>
        <EditProductType errorMessage={errorMessage} productType={productType} />
    </>
  )
}

export default EditProductTypePage