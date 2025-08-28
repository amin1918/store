

export async function getProducts() {
  try {
    const result = await fetch("https://fakestoreapi.com/products"); // ✅ آدرس کامل

    if (!result.ok) {
      throw new Error("Server doesn't respond");
    }

    const products = await result.json();
    return products;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products
/${id}`)
    if (!result.ok) {
      throw new Error("Server doesn't respond")
    }
    const product = await result.json()
    return product
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}
