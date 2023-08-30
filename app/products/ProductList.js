import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}
const ProductList = async () => {
  const products = await fetchProducts();
  const categories = [
    "jewelery",
    "electronics",
    "women's clothing",
    "men's clothing",
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
          {categories.map((product, index) => (
            <div key={index} className="group bg-gray-200 rounded-lg relative">
              {product.category}
            </div>
          ))}
        </h2>

        <div className="mt-6 grid  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
  );
};

export default ProductList;
