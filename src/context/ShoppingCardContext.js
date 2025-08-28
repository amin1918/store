// ShoppingCardContext.js
import { createContext, useState, useEffect, useMemo } from "react";
import { getProducts } from "../services/services";

export const ShoppingCardContext = createContext({});

export function ShoppingCardProvider({ children }) {
  const [productItems, setProductItems] = useState(() => {
    try {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return currentUser?.cart || [];
    } catch (error) {
      return [];
    }
  });

  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch (error) {
      return null;
    }
  });

  // Fetch products
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  // Update cart in currentUser and users array in localStorage
  const updateCurrentUserCart = (updatedCart) => {
    try {
      if (!currentUser) return;
      const updatedUser = { ...currentUser, cart: updatedCart };
      setCurrentUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map(user =>
        user.email === updatedUser.email ? updatedUser : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  // FIXED: تابع Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setProductItems([]); // فقط از Context پاک می‌شود، داده کاربر در localStorage حفظ می‌شود
    localStorage.removeItem("currentUser");
  };

  const productMap = useMemo(() => {
    return products.reduce((map, p) => {
      map[p.id] = p;
      return map;
    }, {});
  }, [products]);

  const cartWithPrice = useMemo(() => {
    return productItems.map(item => {
      const product = productMap[item.id];
      const price = product?.price ?? 0;
      const qty = item.qty ?? 1;
      const total = Number((price * qty).toFixed(2));
      return { ...item, price, qty, total, name: product?.name ?? "Product" };
    });
  }, [productItems, productMap]);

  const totalQty = useMemo(() => cartWithPrice.reduce((sum, item) => sum + item.qty, 0), [cartWithPrice]);
  const totalPrice = useMemo(() => cartWithPrice.reduce((sum, item) => sum + item.total, 0).toFixed(2), [cartWithPrice]);

  // Cart controllers
  const handleAddProductQty = (id) => {
    setProductItems(currentItems => {
      const selectedItem = currentItems.find(item => item.id === id);
      const updatedCart = selectedItem
        ? currentItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
        : [...currentItems, { id, qty: 1 }];
      updateCurrentUserCart(updatedCart);
      return updatedCart;
    });
  };

  const handleIncreaseProductQty = handleAddProductQty; // مشابه handleAddProductQty
  const handleDecreaseProductQty = (id) => {
    setProductItems(currentItems => {
      const selectedItem = currentItems.find(item => item.id === id);
      if (!selectedItem) return currentItems;
      const updatedCart = selectedItem.qty === 1
        ? currentItems.filter(item => item.id !== id)
        : currentItems.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item);
      updateCurrentUserCart(updatedCart);
      return updatedCart;
    });
  };

  const handleRemoveProduct = (id) => {
    setProductItems(currentItems => {
      const updatedCart = currentItems.filter(item => item.id !== id);
      updateCurrentUserCart(updatedCart);
      return updatedCart;
    });
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        productItems,
        cartWithPrice,
        totalQty,
        totalPrice,
        currentUser,
        handleAddProductQty,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
        handleLogout, // اضافه شد
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}
