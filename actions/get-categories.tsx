import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (): Promise<Category[]> => {
  // const res = await fetch(URL);

  const res = await fetch(URL, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error(`failed to fetch ${res.status}`);
  }

  return res.json();
};

export default getCategory;
