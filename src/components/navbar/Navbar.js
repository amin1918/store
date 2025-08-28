// Navbar.js
import { Link, useNavigate } from "react-router-dom"; // FIXED: اضافه کردن useNavigate برای ریدایرکت بعد از Logout
import { ShoppingCart } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

function Navbar() {
  const { totalQty } = useContext(ShoppingCardContext);
  const navigate = useNavigate(); // FIXED: آماده کردن navigate برای Logout

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  // FIXED: تابع Logout
 const handleLogout = () => {
  localStorage.removeItem("currentUser");
  setCurrentUser(null);
  navigate("/login");

  window.location.reload();
};


  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/30 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold font-playfair text-[#846613]">
              Fine Market
            </h1>
          </div>

          {/* Navigation Links + Cart */}
          <ul className="hidden md:flex space-x-4 items-center">
            <Link to="/">
              <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/store">
              <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
                Store
              </li>
            </Link>
            <Link to="/about">
              <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
                About
              </li>
            </Link>

            {!currentUser ? (
              <>
                <Link to="/signup">
                  <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
                    Signup
                  </li>
                </Link>
                <Link to="/login">
                  <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
                    Login
                  </li>
                </Link>
              </>
            ) : (
              <>
                <li className="text-gray-900 px-3 py-2 rounded-lg font-medium">
                  {currentUser.name} ({currentUser.email})
                </li>
                {/* FIXED: دکمه Logout */}
                <li
                  onClick={handleLogout}
                  className="cursor-pointer text-white bg-[#846613] hover:opacity-90 px-3 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Logout
                </li>
              </>
            )}

            <li className="text-gray-900 hover:bg-[#e3c36b] px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
              Contact
            </li>

            <Link to="/card">
              <li className="relative border border-[#e3c36b] hover:bg-[#e3c36b] text-stone-900 px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center">
                <ShoppingCart className="text-stone-700" />
                {totalQty > 0 && (
                  <span className="absolute -top-2 -right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                    {totalQty}
                  </span>
                )}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
