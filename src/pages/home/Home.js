import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { getProducts } from "../../services/services";
import { motion } from "framer-motion";
import { Truck, ShoppingBag, Lock, MessageCircle } from "lucide-react";
import Button from "../../components/button/Button";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => setProducts(result));
  }, []);

  return (

    <div className="w-full font-sans text-[#846613] bg-stone-100  overflow-x-hidden" >
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/main.jpeg"
            alt="Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 "></div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-6 max-w-3xl px-4"
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold font-playfair text-[#846613]"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Fine Market
          </h1>
          <p className=" px-3 text-lg md:text-2xl text-stone-700 bg-slate-100 bg-opacity-30 backdrop-blur-sm">
            Luxury lifestyle products with a modern, elegant design
          </p>
          <Button variant="primary" className="px-8 py-4 text-xl">
            <Link to="/store">Explore Products</Link>
          </Button>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-stone-200/50 via-stone-100/20 to-stone-300/50 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-stone-200/30 via-stone-300/30 to-stone-400/20 rounded-full filter blur-2xl animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Fast Delivery", icon: <Truck className="w-12 h-12 text-[#846613]" /> },
              { title: "Quality Products", icon: <ShoppingBag className="w-12 h-12 text-[#846613]" /> },
              { title: "Secure Payment", icon: <Lock className="w-12 h-12 text-[#846613]" /> },
              { title: "24/7 Support", icon: <MessageCircle className="w-12 h-12 text-[#846613]" /> },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-stone-200 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-yellow-100 hover:via-yellow-200 hover:to-yellow-200 hover:text-stone-800"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-stone-700 text-sm">
                  High-quality and reliable service for all your needs.
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 via-stone-300 to-stone-700 backdrop-blur-xl shadow-inner text-stone-800">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:w-1/3 mb-8 md:mb-0"
            >
              <img
                src="logo.png"
                alt="About Us"
                className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:w-2/3"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                About Our Store
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                We offer high-quality products with exceptional customer
                service. Discover our wide range of items and find exactly what
                you need to enhance your lifestyle.
              </p>
              <Button variant="primary" className="px-8 py-4 text-lg rounded-xl shadow-lg">
                <Link to="/store">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className=" flex flex-col py-20 bg-stone-50">
        <Container className="flex flex-col justify-center items-center">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            What Our Customers Say
          </h2>
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-6 py-6 object-cover">
            {[
              { name: "Charlie", quote: "Amazing products!", photo: "teamPhoto/AMIN.jpeg" },
              { name: "Bob", quote: "Fast delivery!", photo: "teamPhoto/SAEB.jpeg" },
              { name: "Alice", quote: "Excellent service!", photo: "teamPhoto/ALTINAY.jpeg" },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                className="flex-none w-72 bg-stone-200 rounded-2xl shadow-lg p-6 text-center snap-start hover:scale-105 transition-transform"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="mx-auto rounded-full mb-4 w-20 h-20 object-cover"
                />
                <p className="italic mb-2">"{t.quote}"</p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Newest Products
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 justify-center mx-3">
            {products.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <Link to={`/product/${item.id}`}>
                  <ProductItem {...item} />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    new
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-tr from-stone-200 via-stone-500 to-stone-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p>Get the latest products and offers directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-[#846613] transition"
              />
              <Button variant="primary" className="px-6 py-3 text-lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
