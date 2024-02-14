import { IoHomeOutline, IoLeafOutline, IoCheckmarkCircleOutline, IoSettingsOutline, IoListOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Home', icon: <IoHomeOutline size={28} />, path: '/' },
  { name: 'Plants', icon: <IoLeafOutline size={28} />, path: '/plants' },
  { name: 'Tasks', icon: <IoListOutline size={28} />, path: '/tasks' },
  { name: 'Checkups', icon: <IoCheckmarkCircleOutline size={28} />, path: '/checkups' },
  { name: 'Settings', icon: <IoSettingsOutline size={28} />, path: '/settings' },
];

const SideBar = () => {

  const navigate = useNavigate();

  return (
    <div className="border outline-1 px-4 pt-8 h-screen flex flex-col shadow-md">
      <div className="font-extrabold flex flex-row justify-center items-center text-xl">
        TreeTroopers
      </div>
      <div className='mt-20 px-2'>
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{alignItems:'center'}} className='flex flex-row gap-7 mt-4 font-medium px-4 py-2  hover:bg-gray-200 transition-colors duration-200 w-full rounded-lg'>
            {item.icon}{item.name}
          </Link>
        ))}
      </div>
      <div className='mt-24 bottom-0 flex justify-center items-center px-2 pb-2'>
      <button 
        onClick={()=>{ navigate('/help') }} 
        className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md whitespace-nowrap'
      >
        ✨Need Help?
      </button>
      </div>
    </div>
  )
}

export default SideBar;
