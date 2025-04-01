import { getProductTypes } from "@/actions/productTypesAction"
import ProductTypes from "@/screens/product-type"


const ProductTypeManagement = async () => {
  const productTypes = await getProductTypes();

  return (
      <div>
          <ProductTypes productTypes={productTypes} />
      </div>
  )
}

export default ProductTypeManagement

