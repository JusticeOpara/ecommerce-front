import getBillboard from "@/actions/get-billboard";
import getProduct from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revaildate = 0;
const HomePage = async () => {
  const products = await getProduct({ isFeatured: true });
  const billboard = await getBillboard("f7c16561-6c42-4cb7-9def-aa81dd49b7f6");
  return (
    <Container>
      <div className="space-y-10 pd-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feartured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
