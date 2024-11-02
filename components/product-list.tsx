// import { Product } from "@/types";
// import React from "react";
// import NoResults from "@/components/ui/no-results";
// // import ProductCard from "@/components/ui/product-card";

// interface ProductListProps {
//   title: string;
//   items: Product[];
// }

// const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
//   return (
//     <div className="space-y-4 ">
//       <h3 className="font-bold text-3xl">{title}</h3>
//       {items.length === 0 && <NoResults />}
//       <div
//         className="grid grid-col-1 sm:grid-cols-2 
//       md:grid-cols-3 lg:grid-cols-4 gap-4"
//       >
//          {/* {items?.map((item) => (
//           <ProductCard key={item.id} data={item} />
//         ))}    */}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

"use client"
import { useEffect, useState } from "react";
import { Product } from "@/types";
import React from "react";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    if (items) {
      setProductItems(items);
    }
  }, [items]);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {productItems.length === 0 && <NoResults />}
      <div
        className="grid grid-col-1 sm:grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
      
     {productItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))} 
      </div>
    </div>
  );
};

export default ProductList;

