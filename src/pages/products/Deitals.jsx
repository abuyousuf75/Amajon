import { useLoaderData, useNavigate } from "react-router-dom";

const Deitals = () => {
    const detals = useLoaderData();
    const {description,price,rating,thumbnail} = detals;
     const navigate = useNavigate();
     const handelPrivous = ()=>{
        navigate(-1)
     }
    return (
        <div className="flex h-screen justify-center items-center">
          <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="p-8 rounded-t-lg w-full h-52" src={thumbnail} alt="product image" />
    
    <div className="px-5 pb-5 ">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{description}</h5>
        
        <div className="flex items-center mt-2.5 mb-5">
            
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          
           <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
           <button onClick={handelPrivous} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back</button>
          
        </div>
    </div>
</div>
        </div>
    );
};

export default Deitals;