import React, { useState } from 'react'
import loginImg from "../Components/assets/illustration.svg"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { login } from '../services/opretions/userAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    email,
    password,
  } = formData;

  const handleOnChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log("email ", email);

    dispatch(login(email, password, navigate));
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className=' bg-gray-900 flex max-md:flex-col w-11/12'>
      <div className="bg-gray-800  lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md rounded-md text-white">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-bold text-2xl mt-2 text-center">Login</h1>

          <form className="mt-6" onSubmit={handleOnSubmit}>
            <div className="my-8 text-sm">
              <label htmlFor="username" className="block">
                <span className='text-lg font-semibold'>Email </span>
                <sup className="text-red-500">*</sup>
              </label>
              <input
                type="email"
                required
                autoFocus
                id="email"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-600 w-full"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="Username" />
            </div>
            <div className="my-8 text-sm relative">
              <label htmlFor="password" className="block">
                <span className='text-lg font-semibold'>Password </span>
                <sup className="text-red-500">*</sup>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className=" text-gray-100 rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-600 w-full relative"
                required
                id='password'
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder='Enter Password !' />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[49px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>

              <div className="flex justify-end mt-2 text-xs text-blue-600">
                <span href="#">Forget Password?</span>
              </div>
            </div>

            <button className="block text-center text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700 w-full">Login</button>
          </form>

          <p className="mt-5 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="#" className=" text-white font-medium"> Create One </a>  </p>

        </div>
      </div>
      <div className=' mt-10 max-md:hidden'>
        <img src={loginImg} alt="LoginPNG" />
      </div>
    </div>
  );
}

export default Login;
