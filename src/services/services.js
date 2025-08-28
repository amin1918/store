import axios from "axios";

// Axios Client
const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Get all products
export async function getProducts() {
  try {
    const { data } = await client.get("/products");
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Get single product by ID
export async function getProduct(id) {
  try {
    const { data } = await client.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
