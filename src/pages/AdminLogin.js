import React from 'react'
import NavBar from '../components/Navbar/NavBar';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import adminImg from "../images/adminImg.svg"
import {useDocTitle} from '../components/CustomHook';
import Footer from "../components/Footer"


const AdminLogin = () => {
  useDocTitle('manpower-consultancy|administrator')
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const chaeckData = (obj) => {
    const { email, password } = obj;
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    const api = axios
      .get(urlApi)
      .then((response) => response.data)
      .then((data) => (data.ok ? alert("You login to your account successfully", "success") : alert("Your password or your email is wrong", "error")));

  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    chaeckData(data);
  };

  return (
    <div>
      <NavBar/>
     <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center  py-14">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src="https://drive.google.com/uc?export=view&id=1MFiKAExRFF0-2YNpAZzIu1Sh52J8r16v"
              className="w-mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4" />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853" />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04" />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335" />
                    </svg>
                  </div>
                  <span className="ml-4">
                   Admin Sign In with Google
                  </span>
                </button>

              </div>

              <div className="my-12 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Admin Panel Sign In
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Email" />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" />
                <button
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="#333" d="M268 171.375c0-23.313 5.574-77.536 62.5-77.536 54.883 0 62.5 48.574 62.5 77.536V189h48v-17.625c0-75.844-42.941-124.842-110.006-124.842C263.941 46.532 221 95.531 221 171.375V189h47v-17.625zM86.526 212.602s7.47-33.375 20.685-33.375c-13.556 0-20.685-39.296-20.685-39.296s-4.702 39.296-21.045 39.296c14.959 0 21.045 33.375 21.045 33.375zm54.159-38.271s13.491-60.265 37.357-60.265c-24.482 0-37.357-70.936-37.357-70.936s-8.47 70.936-37.986 70.936c27.005 0 37.986 60.265 37.986 60.265zM447.63 204H214.909C187.374 204 164 225.416 164 251.523V283h166.802c1.259 0 2.487.082 3.702.253 16.849 1.545 29.551 14.994 29.551 31.374 0 11.642-7.055 21.689-17.055 27.158v35.899c0 8.681-7.354 15.768-16.506 15.768-9.161 0-16.494-7.087-16.494-15.768v-35.899c-1-1.296-3.826-2.785-5.758-3.785H164v71.223C164 435.354 187.374 457 214.909 457H447.63c27.536 0 48.37-21.646 48.37-47.777v-157.7C496 225.416 475.166 204 447.63 204z" /><path fill="#333" d="M343.824 310.512c-.01-7.205-5.851-13.512-13.022-13.512H108.318c-2.597-11-7.661-20.764-14.972-28.094-9.416-9.418-22.057-14.287-36.537-14.287-16.418 0-30.229 6.359-39.922 18.265-8.735 10.692-13.544 25.693-13.524 42.154-.021 18.672 6.012 35.011 16.939 45.938 9.406 9.416 22.025 14.403 36.507 14.403 16.438.019 30.238-6.036 39.963-17.941 7.181-8.844 11.671-19.438 13.044-33.438H330.8c7.174 0 13.014-6.309 13.024-13.488zM79.536 341.019c-5.415 6.662-13.289 10.194-22.726 10.194-8.459-.023-15.439-2.725-20.781-8.067-6.469-6.47-10.043-16.437-10.023-28.077-.021-10.322 2.874-19.536 8.087-25.951 5.426-6.662 13.289-10.182 22.717-10.182 8.458.008 15.459 2.712 20.812 8.052 6.468 6.469 10.022 16.439 10.033 28.081-.001 10.31-2.907 19.524-8.119 25.95z" /></svg>
                  <span className="ml-2">
                    Sign In
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-50 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" >
            <img alt="card img" className="rounded-t float-right" src={adminImg} />
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </div>

   
  );
};

export default AdminLogin;


