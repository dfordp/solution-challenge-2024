import { IoPencil } from 'react-icons/io5';
import { useState } from 'react';

import profileImage from '../../assets/Profile.png';

const SettingsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tempUsers, setTempUsers] = useState([]);

    const onPencilClick = () => console.log("pencil clicked");
    const onChangePassword = () => console.log("change password clicked");
    const onSaveChanges = () => console.log("save changes clicked");

    return (
        <div className='mx-4'>
            <div className="my-6 text-3xl font-bold">
                Settings
            </div>
            <div className='flex flex-row'>
                <div className='relative mx-4 inline-block'>
                    <img
                        src={profileImage}
                        alt="Profile Picture"
                        className='w-32 h-32 rounded-full'
                    />
                    <button 
                        className='absolute top-0 right-0 bg-black text-white rounded-full p-1' 
                        onClick={onPencilClick}
                    >
                        <IoPencil />
                    </button>
                </div>
                <div className='flex flex-col w-[400px] ml-10'>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Name" 
                        className="my-2 p-2 border rounded"
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className="my-2 p-2 border rounded"
                    />
                    <input 
                        type="password" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Password" 
                        className="my-2 p-2 border rounded"
                    />
                    
                    <button 
                        onClick={onSaveChanges} 
                        className="my-2 p-2 bg-green-500 text-white rounded w-[150px] "
                    >
                        Save Changes
                    </button>
                </div>
            </div>
            {/* <div className="my-6">
                <h2 className="text-2xl font-bold">Temporary Users</h2>
                <ul>
                    {tempUsers.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}

export default SettingsPage