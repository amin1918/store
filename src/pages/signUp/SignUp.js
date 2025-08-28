import { useEffect, useState } from "react";
import Container from "../../components/container/Container";

function Signup() {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!userInfo.name.trim() || !userInfo.email.trim() || !userInfo.password.trim() ){
            alert("Please fill all of the blanks"); 
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const checkUser = users.find(user => user.email === userInfo.email);
        if(checkUser){
            alert("A user already exists with this email");
            return;
        }

        const user = {name: userInfo.name, email: userInfo.email, password: userInfo.password, cart: []};
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(user)); // FIXED USER PRIVATE CART
    };

    return (
        <Container className={"flex items-center justify-center"} >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-[#846613] mb-2">
                    Signup
                </h2>

                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#846613] transition"
                />
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
                    Signup
                </button>
            </form>
        </Container>
    );
}

export default Signup;
