/* import { Link, useParams } from "react-router-dom"; */
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../services/services";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import CardItem from "../../cardItem/CardItem";



function Product() {
  /*  const params = useParams(); */
  const params = useParams()
  const id = params.id

  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProduct(id).then((item) => {
      setProduct(item)

    }

    )
  }, [id])
  const { handleAddProductQty,handleIncreaseProductQty ,productItems,handleDecreaseProductQty } = useContext(ShoppingCardContext);

  const currentQty = productItems.find(item => item.id === id)?.qty || null

  return (
    <div>
      <Container>
        <div className="h-auto shadow mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 rounded-lg p-4">
          {/* img */}
          <motion.div
            className="md:col-span-3 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.2, rotate: 9, rotateZ: 6 }}
          >
            <motion.img
              className="max-w-[350px] md:max-w-[200px] rounded-md"
              src={product?.image}
              alt="house-1"
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          {/* about*/}
          <div className="md:col-span-5 p-4 md:p-10">
            <h1 className="mb-4 text-2xl md:text-3xl font-bold text-gray-600">
              {product?.title}
            </h1>
            <div>
              <h2 className="mb-2 text-lg font-bold  text-gray-600">About</h2>
              <p>{product?.description} </p>
              <div className="mt-4 md:mt-10 text-xl md:text-2xl font-bold text-green-900">
                {product?.price}$
              </div>

              <div className="mb-7 mt-12  md:max-w-6xl flex content-center justify-center">
                {currentQty == 0 | currentQty == null ? <Button onClick={() => { handleAddProductQty(params.id) }} style={{ padding: "7px 6px" }}
                  variant="primary"
                  id="btn"
                >
                  Add to Card
                </Button> :
                  <div className="flex gap-9 w-full justify-center">
                    <button onClick={  ()=>{handleIncreaseProductQty(id)}} disabled= {currentQty>= product?.rating?.count}

                      className=" md:w-4/5 w-1/4  h-5 text-sm bg-gray-300 text-gray-800  rounded hover:bg-yellow-200 active:scale-95 transition hover:shadow-xl"
                    >
                      +
                    </button>

                    <motion.span
                      className="text-sm text-[26px]"
                      animate={{ scale: [2, 1.4, 1] }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {currentQty}
                    </motion.span>
                    <button onClick={  ()=>{handleDecreaseProductQty(id)}}

                      className="md:w-4/5 w-1/4 text-sm bg-gray-200 text-gray-800  rounded hover:bg-gray-400 active:scale-95 transition hover:shadow-xl"
                    >
                      -
                    </button>
                  </div>}



              </div>
              {currentQty >= product?.rating?.count  && <div className="flex justify-center ">
                
                <span className="text-sm text-center text-red-800">
                
                  Max amount{" "}
                </span>

              </div> }
              
            </div>
          </div>

          <div className=" md:items-start  md:col-span-2 pt-4 md:pt-10 pb-4 md:pb-10 pl-4 flex items-center  flex-col">
            <div>
              <h2 className="mb-3 text-lg font-bold  text-gray-600">
                Property Highlights
              </h2>
            </div>
            <div className="flex space-x-24 ">
              <ul className="space-y-1">
                <li>category: </li>
                <li>count:</li>
                <li>rate:</li>
                <li>id:</li>
                <li>price:</li>
              </ul>
              <ul className="space-y-1 mr-5">
                <li>{product?.category}</li>
                <li>{product?.rating.count} </li>
                <li>{product?.rating.rate}</li>
                <li>{product?.id}</li>
                <li>{product?.price}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col my-3">
          <h2 className="font-bold text-slate-800 text-[15px]"> In your Card </h2>
        </div>

                  {productItems.map(item=> <CardItem key={item.id} {...item} />)}

      </Container>
    </div>
  );
}
export default Product