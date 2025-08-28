import { useState } from "react";
import { useNavigate } from "react-router-dom"; // FIXED:
import Container from "../../components/container/Container";

function Login() {
  const navigate = useNavigate(); // FIXED: 
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const finduser = users.find(user => user.email === userInfo.email && user.password === userInfo.password)
    if (!finduser) {
      alert("Wrong email or password")
      return
    }

    localStorage.setItem("currentUser", JSON.stringify(finduser)); // FIXED:
    navigate("/"); // FIXED: 
    window.location.reload();

  }

  return (
    <Container className={"flex items-center justify-center"}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#846613] mb-2">
          Login
        </h2>

        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#846613] transition"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#846613] transition"
        />

        <button
          type="submit"
          className="w-full py-3 mt-2 bg-[#846613] text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </form>
    </Container>
  );
}

export default Login;
