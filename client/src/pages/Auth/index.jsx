import { useState } from 'react';
// import authpagepic from '../../assets/authpagepic.jpg'; 
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { signInWithGithub, signInWithGoogle } from '../../firebase';
import axios from 'axios';


const LoginForm = ({ email, setEmail, password, setPassword, handleLogin }) => (
  <form onSubmit={handleLogin}>
    <div className='flex flex-col'>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" className='mt-2 p-2 border rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className='flex flex-col mt-4'>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" className='mt-2 p-2 border rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="submit" className='mt-4 bg-blue-500 text-white p-2 rounded-lg'>Sign In</button>
  </form>
);


const SignUpForm = ({ email, setEmail, password, setPassword, handleSignup }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className='flex flex-col'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className='mt-2 p-2 border rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className='mt-2 p-2 border rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='flex flex-col mt-4'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" className='mt-2 p-2 border rounded-lg' value={confirmPassword} onChange={handleConfirmPassword} />
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </div>
      <button type="submit" className='mt-4 bg-blue-500 text-white p-2 rounded-lg'>Sign Up</button>
    </form>
  );
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/api/auth/login',{email,password})
    document.cookie = `id=${res.data._id}; max-age=900000; path=/`;
    window.location.reload();
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/api/auth/register', {email, password})
    window.location.reload();
  }

  const SocialLogins = () => (
    <div className='flex flex-row justify-center my-4 gap-4'>
      <button onClick={signInWithGoogle} className='bg-red-500 text-white p-2 rounded-lg flex items-center'>
        <FaGoogle className='mr-2' /> Google
      </button>
      <button onClick={signInWithGithub} className='bg-black text-white p-2 rounded-lg flex items-center'>
        <FaGithub className='mr-2' /> GitHub
      </button>
    </div>
  );

 

  return (
      <div className='flex justify-center items-center w-[900px] mx-auto py-3 mt-10 rounded-xl shadow-xl border border-gray-200 font-sans' style={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>      <div className='flex flex-col bg-white w-[450px]'>
        <h3 className='font-bold flex flex-row items-center justify-center pt-3 -ml-10'>
          Tree Troopers
        </h3>
        {isLogin ?<LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} /> : <SignUpForm  email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignup={handleSignup} />}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'New to app?' : 'Already a user?'}
        </button>
        <SocialLogins />
      </div>
      {/* <div className='w-[250px] h-full scale-125'>
        <img src={authpagepic} alt="Auth" className='rounded-lg' />
      </div> */}
    </div>
  );
};

export default Auth;