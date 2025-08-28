import { useContext, } from "react";
import Container from "../../components/container/Container";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import CardItem from "../../cardItem/CardItem";
import { Link } from "react-router-dom";

function Cart() {

  const { productItems,totalPrice } = useContext(ShoppingCardContext)


  
  return (

    <Container>
      <div className="flex w-full justify-center items-center">
        <div className="col-span-1">
          {productItems.map(item => <CardItem key={item.id}  {...item} />)}

        </div>
      </div>


      <div className="flex justify-center w-full fixed bottom-4 left-0 px-4">

        <div className="flex items-end gap-1 md:gap-4 mt-4 pb-">
          <Link to={"/checkout"} >
          <button
            className="md:w-40 h-8 w-20 rounded-lg border border-yellow-200 text-gray-600 font-semibold
                     bg-gradient-to-tr from-yellow-200/80 via-yellow-300/30 to-yellow-400/70
                     shadow active:scale-95 transition cursor-pointer backdrop-blur-sm md:text-sm text-xs flex items-center justify-center"
          >
            Payment
          </button>
          </Link>
          <div className=" w-30  flex flex-col font-thin text-xs text-gray-600">
            <label>Total</label>
            <span
              className="  
              md:w-30 h-8 min-w-20 w-auto pl-2 pr-2 rounded-lg   border-gray-200 font-extrabold text-gray-600
                    bg-gradient-to-tr from-red-50/50 via-red-100/20 to-red-200/20
                       backdrop-blur-sm md:text-sm  text-xs   flex items-center justify-center line-through decoration-red-500 decoration-3"
            >
              60,000$
            </span>
          </div>
          <div className="flex flex-col font-thin text-xs text-gray-600">
            <label>OFF</label>
            <span
              className="md:w-30 h-8 min-w-20 w-auto pl-2 pr-2 rounded-lg   border-gray-200 font-extrabold text-gray-600
                    bg-gradient-to-tr from-green-50/50 via-green-100/20 to-green-200/20
                       backdrop-blur-sm md:text-sm  text-xs   flex items-center justify-center"
            >
              { }
            </span>
          </div>
          <div className="flex flex-col font-thin text-xs text-gray-600">
            <label> Payable</label>
            <span
              className="md:w-40 h-8 min-w-20 w-auto pl-2 pr-2 rounded-lg   border-gray-200 font-extrabold text-gray-600
                    bg-gradient-to-tr from-green-50/50 via-green-100/20 to-green-200/20
                       backdrop-blur-sm md:text-sm  text-xs   flex items-center justify-center"
            >
             {totalPrice} $
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
