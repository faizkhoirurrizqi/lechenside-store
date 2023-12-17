import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories. Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error in getCategories:", error);
    throw error; // Re-throw the error for further handling
  }
};

export default getCategories;
