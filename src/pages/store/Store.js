import { motion } from "framer-motion";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/services";
function Store() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(result => {
      setProducts(result)
    })
  },[])
  return (
    <div>
      <Container>
        <h1 className="mt-5 mb-4 text-lg md:text-2xl font-semibold">Newest Products</h1>

        {/* Grid responsive */}
        <div className="grid grid-cols-[repeat(auto-fill,220px)] gap-4 justify-center ">

          {products.map(item => (
            <Link key={item.id} to={`/product/${item.id}`} >
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                transition={{ type: "keyframes", stiffness: 300 }}>
                <ProductItem {...item} />
              </motion.div>
            </Link>
          ))}




        </div>
      </Container>
    </div>
  );
}

export default Store;