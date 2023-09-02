"use client";
import CheckBox from "../../common/CheckBox";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

function CategorySidebar({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
    }
  };
  return (
    <div className="mb-8">
      <p className="font-bold mb-4">Filter </p>
      <ul className=" space-y-4">
        {categories.map((category) => {
          return (
            <CheckBox
              key={category.id}
              id={category.id}
              value={category.name}
              label={category.name}
              onChange={categoryHandler}
              checked={selectedCategories.includes(category.name)}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default CategorySidebar;

// "use client";
// import CheckBox from "@/common/CheckBox";
// import { useCallback, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const CategorySidebar = ({ categories }) => {
//   const router = useRouter;
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [selectedCategories, setSelectedCategories] = useState(
//     searchParams.get("category")?.split(",") || []
//   );

//   const createQueryString = useCallback(
//     (name, value) => {
//       const params = new URLSearchParams(searchParams);
//       params.set(name, value);
//       return params.toString();
//     },
//     [searchParams]
//   );

//   const ChangeHandler = (e) => {
//     const value = e.target.value;
//     if (selectedCategories.includes(value)) {
//       const categories = selectedCategories.filter((c) => c !== value);
//       setSelectedCategories(categories);
//       router.push(pathname + "?" + createQueryString("category", categories));
//     } else {
//       setSelectedCategories([...selectedCategories, value]);
//       router.push(
//         pathname +
//           "?" +
//           createQueryString("category", [...setSelectedCategories, value])
//       );
//     }
//   };
//   return (
//     <div className="grid-cols-1">
//       <p className="font-bold mb-4">Filter</p>
//       <ul className="space-y-4">
//         {categories.map((category) => (
//           <CheckBox
//             key={category.id}
//             id={category.id}
//             value={category.name}
//             label={category.name}
//             onChange={ChangeHandler}
//             checked={selectedCategories.includes(category.name)}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategorySidebar;
