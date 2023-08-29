// import { ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}
const ProductList = async () => {
  const products = await fetchProducts();
  console.log(products);
  return (
    // <div>
    //   {products.map((product, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className="col-span-6 md:col-span-3 lg:col-span-2 bg-white flex flex-col rounded-3xl p-2 max-h-[350px]"
    //       >
    //         {/* cover iamge */}
    //         <div className="aspect-w-16 aspect-h-9 mb-6">
    //           <Link href={`/products/${product.hashId}/${product.slug}`}>
    //             <img
    //               src={product.image}
    //               alt=""
    //               className="rounded-2xl w-full h-full object-center object-cover"
    //             />
    //           </Link>
    //         </div>
    //         {/* product content */}
    //         <div className="bg-gray-50  p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
    //           <Link href={`/products/${product.hashId}/${product.slug}`}>
    //             <h2 className="mb-4 font-bold">{product.title}</h2>
    //           </Link>
    //           {/* product data */}
    //           <div>
    //             {/* product author-category */}
    //             <div className="flex items-center justify-between mb-4">
    //               <div className="flex items-center">
    //                 <img
    //                   src="/images/saheb.jpg"
    //                   alt=""
    //                   className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
    //                 />
    //                 <span className="text-sm font-bold text-gray-500"></span>
    //               </div>
    //               <Link href={`/products/${product.category.englishTitle}`}>
    //                 <span
    //                   className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600
    //             hover:text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer"
    //                 >
    //                   {product.category.title}
    //                 </span>
    //               </Link>
    //             </div>
    //             {/* product interaction */}
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center text-[10px] text-gray-400 font-bold">
    //                 {/* <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" /> */}
    //                 <span className="ml-1">زمان مطالعه:</span>
    //                 <span className="ml-1 leading-3">5</span>
    //                 <span>دقیقه</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    //   {/* {products.slice(0.5).map((product) => (
    //     <li key={product.id} className="border-b-2 pb-4">
    //       <article>
    //         <h2 className="font-bold">{product.title}</h2>
    //         <p>{product.body}</p>
    //         <p className="text-blue-600">
    //           <Link href={`/products/${product.id}`}>View Details</Link>
    //         </p>
    //       </article>
    //     </li>
    //   ))} */}
    // </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
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
