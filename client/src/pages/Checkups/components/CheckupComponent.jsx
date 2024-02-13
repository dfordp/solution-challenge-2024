import { IoFlower, IoLeaf } from 'react-icons/io5';


const CheckupComponent = () => {
  return (
    <div className="flex flex-col bg-gray-100 border border-gray-300 w-[400px] mx-1 px-3 py-3 rounded-md">
      {/* <img src={plant.imageUrl} alt=Image />
      <h2>{plant.name}</h2>
      <p>Date of Planting: {plant.dateOfPlanting}</p> */}
      <div className="w-full h-[200px] my-2 rounded-md bg-gray-200"></div>
      <h2 className="font-semibold">Checkup Result</h2>
      <h2 className="my-1 font-light">Plant Name</h2>
      <div className="flex flex-row justify-between font-extralight my-1">
        <div className="flex items-center">
            <IoFlower className="mr-2" opacity={0.25} />
            <h2>Date of Checkup</h2>
        </div>
        <div className="flex items-center">
            <IoLeaf className='mr-2' opacity={0.25}/>
            <p>Date of Planting</p>
        </div>
    </div>
    </div>
  );
};

export default CheckupComponent;