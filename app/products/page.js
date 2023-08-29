import ProductList from "./ProductList";

export const metadata = {
  title: "ProductList",
  description: "Product List description",
};
const ProductPage = () => {
  return (
    <div>
      {" "}
      <ProductList />
    </div>
  );
};

export default ProductPage;
