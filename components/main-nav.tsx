// "use client";

// import { cn } from "@/lib/utils";
// import { Category } from "@/types";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import React from "react";

// interface MainNavProps {
//   data: Category[];
// }
// const MainNav: React.FC<MainNavProps> = ({ data }) => {
//   const pathname = usePathname();
// console.log(data,"--data maindata")
//   if(!data || data.length === 0){
//  return 
//   }
//   const routes = data.map((route) => ({
//     href: `/category/${route.id}`,
//     label: route.name,
//     active: pathname === `/category/${route.id}`,
//   }));
//   console.log(routes)

//   return (
//     <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 ">
//        {routes.map((route) => (
//         <Link
//           key={route.href}
//           href={route.href}
//           className={cn(
//             "lg:text-xl text-sm font-medium transition-colors hover:text-black",
//             route.active ? "text-black" : "text-neutral-500"
//           )}
//         >
//           {route.label}
//         </Link>
//       ))} 
//     </nav>
//   );
// };

// export default MainNav;

"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [routes, setRoutes] = useState<{ href: string; label: string; active: boolean }[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const newRoutes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
      }));
      setRoutes(newRoutes);
    } else {
      setRoutes([]); // Clear routes if data is empty or undefined
    }
  }, [data, pathname]);

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "lg:text-xl text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
