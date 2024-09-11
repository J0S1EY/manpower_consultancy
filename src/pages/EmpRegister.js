import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const EmpRegister = (props) => {
  useDocTitle('manpower-consultancy | Employee Register');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    aadharNumber: '',
    dob: '',
    localAddress: '',
    location: '',
    sex: '',
    bloodGroup: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    pinCode: '',
    message: '',
    category: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearErrors(name);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        category: [...formData.category, value],
      });
    } else {
      setFormData({
        ...formData,
        category: formData.category.filter((item) => item !== value),
      });
    }
    clearErrors('category');
  };

  const clearErrors = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));
  };

  const clearInput = () => {
    setFormData({
      firstName: '',
      lastName: '',
      aadharNumber: '',
      dob: '',
      localAddress: '',
      location: '',
      sex: '',
      bloodGroup: '',
      fatherName: '',
      motherName: '',
      email: '',
      phone: '',
      streetAddress: '',
      city: '',
      state: '',
      pinCode: '',
      message: '',
      category: [],
    });
  };

  const validateAadhaarNumber = (aadharNumber) => {
    const aadhaarPattern = /^\d{12}$/;
    return aadhaarPattern.test(aadharNumber);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Check for empty required fields
    const requiredFields = [
      'firstName', 'lastName', 'aadharNumber', 'dob', 'localAddress',
      'location', 'sex', 'bloodGroup', 'fatherName', 'motherName', 'email',
      'phone', 'streetAddress', 'city', 'state', 'pinCode'
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required.`;
        valid = false;
      }
    });

    // Validate Aadhaar number
    if (formData.aadharNumber && !validateAadhaarNumber(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhaar Number must be 12 digits.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Loading...';

    // Validate form before submission
    if (!validateForm()) {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Register Now';
      return;
    }

    const fData = new FormData();
    Object.keys(formData).forEach((key) => {
      fData.append(key, formData[key]);
    });

    axios.post(process.env.REACT_APP_DEMO_REQUEST_API, fData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
        clearInput();
        Notiflix.Report.success('Success', response.data.message, 'Okay');
      })
      .catch((error) => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
        if (error.response.status === 500) {
          Notiflix.Report.failure('An error occurred', error.response.data.message, 'Okay');
        }
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <>
      <NavBar />
      <div id="demo" className="flex justify-center items-center mt-4 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20 w-full lg:max-w-screen-lg" data-aos="zoom-in">
          <form onSubmit={sendEmail} id="demoProductForm">
            <div className="w-full bg-white p-8 my-4 md:px-12 rounded-2xl shadow-2xl lg:max-w-screen-xl lg:mx-auto">
              <h1 className="font-bold text-center lg:text-left text-lime-950 uppercase text-2xl">Employee Register Form</h1>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {[
                  { name: 'firstName', placeholder: 'First Name*', type: 'text' },
                  { name: 'lastName', placeholder: 'Last Name*', type: 'text' },
                  { name: 'aadharNumber', placeholder: 'Aadhaar Number*', type: 'number' },
                  { name: 'email', placeholder: 'Email*', type: 'email' },
                  { name: 'phone', placeholder: 'Phone*', type: 'number' },
                  { name: 'dob', placeholder: 'Date of Birth*', type: 'date' },
                  { name: 'localAddress', placeholder: 'Local Address*', type: 'text' },
                  { name: 'location', placeholder: 'Location*', type: 'text' },
                  { name: 'bloodGroup', placeholder: 'Blood Group*', type: 'text' },
                  { name: 'fatherName', placeholder: 'Name of Father*', type: 'text' },
                  { name: 'motherName', placeholder: 'Name of Mother*', type: 'text' },
                  { name: 'streetAddress', placeholder: 'Street Address*', type: 'text' },
                  { name: 'city', placeholder: 'City*', type: 'text' },
                  { name: 'state', placeholder: 'State*', type: 'text' },
                  { name: 'pinCode', placeholder: 'Pin Code*', type: 'text' },
                ].map((field, index) => (
                  <div key={index}>
                    <input
                      name={field.name}
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                    />
                    {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
                  </div>
                ))}
                
                {/* Dropdown for Sex */}
                <div>
                  <select
                    name="sex"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={formData.sex}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender*</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                  {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}
                </div>
              </div>
              <div className="my-2 w-full lg:w-1/2">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-lime-700 hover:bg-lime-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Register Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmpRegister;
