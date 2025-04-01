import AddProductTypes from "@/screens/product-type/add"

const AddProductTypePage = async ({searchParams}) => {
    const {errorMessage} = await searchParams;
  return (
    <AddProductTypes errorMessage={errorMessage} />
  )
}

export default AddProductTypePage