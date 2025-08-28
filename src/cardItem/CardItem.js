import { useContext, useEffect, useState } from "react";
import Button from "../components/button/Button";
import { getProduct } from "../services/services";
import { ShoppingCardContext } from "../context/ShoppingCardContext";


function CardItem({ id, qty }) {

    const [product, setProduct] = useState({});
    useEffect(() => {

        getProduct(id).then(result => {
            setProduct(result);
        });
    }, []); 
    const {
        handleDecreaseProductQty,
        handleIncreaseProductQty,
        handleRemoveProduct, cartWithPrice } = useContext(ShoppingCardContext)
    const currentItem = cartWithPrice.find(item => item.id === id);
    if (!currentItem) return null;



    return (

        <div className="h-auto shadow mt-2 grid grid-cols-1 md:grid-cols-8 gap-2 rounded-md p-2 ">
            {/* img */}
            <div className="md:col-span-2 flex md:justify-center md:items-center justify-center items-center">
                <img
                    className="max-w-[70px] md:max-w-[100px] rounded"
                    src={product?.image}
                    alt="house-1"
                />
            </div>

            {/* explain*/}
            <div className="md:col-span-3 p-1 md:p-2 ml-2 flex justify-center items-center flex-col md:items-start">
                <h1 className="mb-1 text-base md:text-lg font-semibold text-gray-700">
                    {product?.title}

                </h1>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h2 className="mb-0.5 text-[10px] font-semibold text-gray-600">
                        About
                    </h2>
                    <p className="text-[10px] text-gray-600 leading-tight md:w-auto md:text-start w-52 text-center">
                        {product?.description}
                    </p>
                </div>
            </div>
            {/* price*/}
            <div className="flex flex-col justify-center items-center gap-0 md:col-span-1 text-sm md:text-[14px] font-thin text-stone-800">
                <label>per</label>
                <span className="pb-1 font-bold">  {product?.price}$ </span>
                <label>total</label>
                <span className="font-bold" >  {currentItem.total}$ </span>
            </div>
            <div className="md:col-span-1 flex md:flex-col justify-center items-center md:gap-1 gap-3">
                <button onClick={() => handleIncreaseProductQty(id)} disabled={qty >= product?.rating?.count}

                    className=" w-5 h-5 text-sm bg-gray-200 text-gray-800  rounded hover:bg-green-100 active:scale-95 transition"
                >
                    +
                </button>

                <span className="text-sm font-xl"> {qty} </span>
                <div className="flex justify-center ">
                    {qty >= product?.rating?.count && <span className="text-[10px] text-center text-red-800"> Max amount </span>}


                </div>
                <button onClick={() => { handleDecreaseProductQty(id) }}

                    className="w-5 h-5 text-sm bg-gray-200 text-gray-800  rounded hover:bg-red-100 active:scale-95 transition"
                >
                    -
                </button>
            </div>

            {/* btns */}
            <div className="flex justify-center items-center md:col-span-1 mt-1">
                <Button onClick={() => { handleRemoveProduct(id) }}
                    style={{
                        height: "20px",
                        padding: "0",
                        width: "50px",
                        fontSize: "8px",
                    }}
                    variant="warning"
                >
                    Remove
                </Button>
            </div>
        </div>

    );
}

export default CardItem;
