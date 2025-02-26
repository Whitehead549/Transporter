import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../Config/Config';
import { AtSign, Lock, Eye, EyeOff } from 'lucide-react';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const adminDocRef = doc(db, 'admins', email);
      const adminDoc = await getDoc(adminDocRef);

      if (!adminDoc.exists() || adminDoc.data().role !== 'admin') {
        setErrorMsg('Access denied. You are not authorized.');
        return;
      }

      setSuccessMsg('You are Logged in successfully.');
      setIsLoggedIn(true);
    } catch (error) {
      if (error.message.includes('network-request-failed')) {
        setErrorMsg('Please check your Internet connection.');
      } else if (error.message.includes('invalid-credential')) {
        setErrorMsg('Incorrect email or password.');
      } else {
        setErrorMsg(error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full mx-auto my-24 sm:mt-20 md:mt-24 shadow-md rounded-lg">
  <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center font-serif">
  {isLoggedIn ? "Select the page you wish to navigate to" : "Sign In"}
 </h1>

  
  {successMsg && (
    <div className="bg-green-50 border border-green-400 text-green-600 p-3 rounded mb-4 text-sm md:text-base">
      {successMsg}
    </div>
  )}

  {!isLoggedIn ? (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleLogin}>
      <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 p-2">
        <AtSign className="w-5 h-5 text-gray-400 mx-2" />
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border-0 focus:outline-none text-sm sm:text-base"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 p-2">
        <Lock className="w-5 h-5 text-gray-400 mx-2" />
        <input
          id="password"
          type={passwordVisible ? "text" : "password"}
          className="w-full px-3 py-2 border-0 focus:outline-none text-sm sm:text-base"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-gray-600 mx-2"
        >
          {passwordVisible ? <EyeOff /> : <Eye />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#091242] text-white font-semibold rounded-lg hover:bg-[#1A2D6D] transition-colors duration-300 text-sm sm:text-base"
      >
        Sign In
      </button>
    </form>
  ) : (
    <div className="flex flex-col space-y-3 sm:space-y-4 mt-4">
      <Link to="/codes" className="w-full py-3 bg-[#091242] text-white font-semibold rounded-lg text-center hover:bg-[#1A2D6D]  text-sm sm:text-base">
        Generate
      </Link>
      <Link to="/contacts" className="w-full py-3 bg-[#091242] text-white font-semibold rounded-lg text-center hover:bg-[#1A2D6D]  text-sm sm:text-base">
        Contacts
      </Link>
      <Link to="/whatapp" className="w-full py-3 bg-[#091242] text-white font-semibold rounded-lg text-center hover:bg-[#1A2D6D]  text-sm sm:text-base">
        Whatapp
      </Link>
    </div>
  )}

  {errorMsg && (
    <div className="bg-red-50 border border-red-400 text-red-600 p-3 rounded mt-4 text-sm md:text-base">
      {errorMsg}
    </div>
  )}
</div>

  );
};

export default Admin;
