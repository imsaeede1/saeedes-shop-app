import { getProducts } from "../../services/productService";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import Link from "next/link";

export const dynamic = "force-dynamic"; // eq to {cache :"no-store"} or SSR in pages Dir. :)

async function ProductPage({ searchParams }) {
  const products = await getProducts(queryString.stringify(searchParams));

  const categories = [
    { id: 1, name: "jewelery" },
    { id: 2, name: "electronics" },
    { id: 3, name: "women's clothing" },
    { id: 4, name: "men's clothing" },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-4 pt-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-gray-200 rounded-lg relative"
              >
                <div className="aspect-h-1 bg-white aspect-w-1 w-full overflow-hidden   lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-fit w-fit object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-around px-2">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;

// import ProductList from "./ProductList";
// import queryString from "query-string";
// export const metadata = {
//   title: "ProductList",
//   description: "Product List description",
// };
// const ProductPage = ({ searchParams }) => {
//   const qs = queryString.stringify(searchParams);
//   return (
//     <div>
//       {" "}
//       <ProductList qs={qs} />
//     </div>
//   );
// };

// export default ProductPage;
