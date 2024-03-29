import { IoFlower, IoLeaf } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const PlantComponent = () => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate('/plant/:id')}} className="flex flex-col bg-gray-100 border border-gray-300 w-[400px] mx-1 px-3 py-3 rounded-md">
      {/* <img src={plant.imageUrl} alt=Image />
      <h2>{plant.name}</h2>
      <p>Date of Planting: {plant.dateOfPlanting}</p> */}
      <div className="w-full h-[200px] my-2 rounded-md bg-gray-200"></div>
      <h2 className="font-semibold">Name</h2>
      <h2 className="my-1 font-light">Comment</h2>
      <div className="flex flex-row justify-between font-extralight my-1">
        <div className="flex items-center">
            <IoFlower className="mr-2" opacity={0.25} />
            <h2>Type Of Flower</h2>
        </div>
        <div className="flex items-center">
            <IoLeaf className='mr-2' opacity={0.25}/>
            <p>Date of Planting</p>
        </div>
    </div>
    </div>
  );
};

export default PlantComponent;