

"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}
interface RouteProps{
  href: string; 
  label: string; 
  active: boolean
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [routes, setRoutes] = useState<RouteProps[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const newRoutes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
      }));
      setRoutes(newRoutes);
    } else {
      setRoutes([]); 
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
      <p>AboutPage</p>
    </nav>
  );
};

export default MainNav;


// async function getAllBlogs() {
//   try {
//     const url = process.env.BASE_URL;
//     const res = await fetch(url,{
//       next: { revalidate: 10 }
//     });
//     const data = await res.json();
//     return data;
//   } catch (error: unknown) {
//     console.log(error);
//     return [];
//   }
// }

