const Products: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        <p className="p-2">Product List</p>
        <p className="p-2">Add Product</p>
      </div>
      {/* Search Bar Start*/}
      {/* <div className="flex flex-col w-full h-36 p-4  bg-white rounded-lg ">
        <p className=" uppercase font-light  text-gray-500">Ürün Arama</p>
        <div className="flex w-full my-4 ">
          <input
            type="text"
            name="search_product"
            id="search_product"
            placeholder="Search with Product Name or Barcode..."
            className="w-1/3 h-10  px-4 mr-4 border border-gray-400 rounded-lg"
          />
          <button className=" flex justify-center items-center w-2/12 h-10 rounded-lg text-white bg-blue-500">
            Search
          </button>
        </div>
      </div>
      <div className="flex w-full">
        <p className="">Image</p>
      </div>  */}
    </div>
  );
};

export default Products;
