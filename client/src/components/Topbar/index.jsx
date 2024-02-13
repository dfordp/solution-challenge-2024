import { useState } from 'react';
import { IoSearch,IoLeafSharp} from 'react-icons/io5';
import { IoIosMedical } from "react-icons/io";
import profileImage from '../../assets/Profile.png';
import { useNavigate } from 'react-router-dom';


const TopBar = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    return (
      <div className="flex justify-between w-full px-6 py-4 border outline-1 shadow-md">
        <div className="flex items-center bg-gray-200 rounded p-2">
          <IoSearch opacity={0.25} />
          <input 
            type="text" 
            placeholder="Looking for something?" 
            className="ml-2 bg-transparent w-[250px] h-8 outline-none"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-1"> 
        <div className="flex items-center justify-center rounded-full p-2">
        <button 
          className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 transition duration-200"
          onClick={() => {
            navigate("/addCheckup")
          }}
        >
          <IoIosMedical opacity={0.5}/>
        </button>
      </div>
      <div className="flex items-center justify-center rounded-full p-2">
        <button 
          className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 transition duration-200"
          onClick={() => {
            navigate('/addPlant')
          }}
        >
          <IoLeafSharp opacity={0.5} />
        </button>
      </div>
          <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
            <div className="ml-2 mr-2">
              <div className='font-semibold'>
                Miles Morales
              </div>
              <div className="text-xxs text-gray-500">
                miles.morales@example.com
              </div>
            </div>
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default TopBar;
  