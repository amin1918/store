
import Button from "../button/Button";



function ProductItem({ title, price, image, description }) {

  return (
    <div className="grid grid-rows-6 relative border rounded-md bg-white shadow-lg  h-[550px] [clip-path:polygon(0_0,100%_0,100%_100%,90px_100%,0_calc(100%-90px))]">

      <div
        className="absolute bottom-6 left-2 right-0 w-14 h-10 bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-400
        z-10 rounded-3xl [clip-path:polygon(0_0,100%_0,100%_100%,20px_100%,0_calc(100%-20px))]"
      ></div>

      <div className="flex items-center justify-center h-[270px] row-span-3">
        <img
          className="rounded-t-md object-contain w-full h-full mt-6"
          src={image}
          alt="l"
        />
      </div>




      <div className="row-span-1 flex flex-col justify-center items-center gap-2 p-4 pt-0 pb-0">
        <h3 className="font-bold text-sm text-gray-700 text-center line-clamp-2 w-44 mt-4"> {title} </h3>
        <span className="text-2xl text-red-950 font-semibold"> {price} $</span>
      </div>


      <div className="row-span-4 flex flex-col justify-between p-4 h-44">
        <p className="text-sm text-gray-600 mb-3 line-clamp-4 w-48">{description}</p>
        <Button variant={"primary"}>
          Add to Card
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
