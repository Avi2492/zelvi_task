import React, { useEffect, useState } from 'react'; 

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface ApiDataProps {
  category: string;
}

const ApiData: React.FC<ApiDataProps> = ({ category }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isError, setIsError] = useState<string | null>(null);
  

  useEffect(() => {
   const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            if (Array.isArray(data)) {
              const filteredProducts = data.filter((product) =>
                product.category.toLowerCase() === category.toLowerCase()
              );
        
              setData(filteredProducts);
            } else {
              setIsError('Invalid data format received from the API.');
            }
          } catch (error) {
            setIsError(error);
          }
    };

    fetchData();
  }, [category]);

  if (isError) {
    return <div className="api-data-error">{isError}</div>;
  }

  const handleClickWishList = ()=>{
    alert("Item added to wishlist");
  }

  return (
    <>
     <div className="flex items-center justify-center my-4">
        <h2
          className="mx-2 px-4 py-2 rounded-md bg-black text-white"
        >🔍 Fake Store API Search For men's clothing, jewelery, electronics, women's clothing
        </h2>
      </div>
       <div className="flex flex-wrap justify-center">
  {data.map((product) => (
    <div className="w-[300px] rounded-md border mx-4 my-4" key={product.id}>
      <img
        src={product.image}
        className="h-[200px] w-full rounded-md object-cover"
        alt={product.title}
      />
      <div className="p-4 flex flex-col justify-center items-center">
        <p className="mt-3 text-sm text-white">₹ {product.price}</p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-red-500"
          onClick={handleClickWishList}
        >
          Wish List
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default ApiData;

