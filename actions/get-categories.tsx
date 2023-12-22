import axios from "axios";
import { Category } from "@/types"; // Adjust the import based on your folder structure

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await axios.get("/api/categories"); // Adjust the API endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
