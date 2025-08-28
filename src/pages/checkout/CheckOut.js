import { useContext, useState } from "react";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

function Checkout() {
  const { cartWithPrice, totalPrice, handleRemoveProduct } = useContext(ShoppingCardContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
    // بعداً می‌توان به سرور یا Stripe متصل کرد
  };

  return (
    <div className="w-full font-sans bg-stone-100 min-h-screen py-20">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-10">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Cart Summary */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
            {cartWithPrice.length === 0 && <p>Your cart is empty.</p>}
            {cartWithPrice.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.qty} x ${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">${item.total}</p>
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <Button variant="primary" className="w-full py-3 text-lg mt-4">
              Pay ${totalPrice}
            </Button>
          </motion.form>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
