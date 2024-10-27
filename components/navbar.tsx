

import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import logo from "@/public/logo.jpeg"

 export const revalidate = 0
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
       <Container>

        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 pr-24 items-center">
           <p className="font-bold text-3xl">KMB</p> 
            <Image className="w-14 h-14" alt="logo" src={logo}/>
          </Link>
         <MainNav data={categories}/>
         <NavbarActions/>
        </div>
      </Container> 
    </div>
  );
};

export default Navbar;