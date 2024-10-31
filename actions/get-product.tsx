import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  // const res = await fetch(`${URL}/${id}`);
  const res = await fetch(`${URL}/${id}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error(`failed to fetch ${res.status}`);
  }

  return res.json();
};

export default getProduct;
