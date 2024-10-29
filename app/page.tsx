// import getBillboard from "@/actions/get-billboard";
// import getProduct from "@/actions/get-products";
// import Billboard from "@/components/billboard";
// import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

// Fixed the typo from 'revaildate' to 'revalidate'
export const revalidate = 0;

const HomePage = async () => {
  // const products = await getProduct({ isFeatured: true });

// const billboard = await getBillboard("84272adf-735c-48be-a7b5-18fba7e07dd7");


  return (
    <Container>
      {/* <div className="space-y-10 pb-10">
        <Billboard data={billboard ?? []} />
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div> */}
      Hello world
    </Container>
  );
};

export default HomePage;

