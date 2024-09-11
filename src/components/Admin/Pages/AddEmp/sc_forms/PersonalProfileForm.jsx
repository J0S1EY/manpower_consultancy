import { useState } from 'react';

function PersonalProfileForm({ empData, setEmpData }) {
  const [errors, setErrors] = useState({});
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    // Check for Aadhaar Number validation
    if (name === "aadhaarNumber") {
      const aadhaarRegex = /^[0-9]{12}$/;
      if (!aadhaarRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          aadhaarNumber: "Enter Aadhaar Number Correctly",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, aadhaarNumber: "" }));
      }
    }
    // Update the state with the new input value
    setEmpData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="overflow-hidden sm:rounded">
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="employeeFirstName"
              className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              autoFocus
              required
              type="text"
              name="employeeFirstName"
              id="employeeFirstName"
              value={empData.employeeFirstName}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="employeeLastName"
              className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="employeeLastName"
              id="employeeLastName"
              value={empData.employeeLastName}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="aadhaarNumber"
              className="block text-sm font-medium text-gray-600">
              Aadhaar Number
            </label>
            <input
              type="text"
              name="aadhaarNumber"
              id="aadhaarNumber"
              value={empData.aadhaarNumber}
              onChange={inputChangeHandler}
              className={`mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm ${errors.aadhaarNumber ? 'border-red-500' : ''}`} />
            {errors.aadhaarNumber && (
              <p className="mt-2 text-sm text-red-600">
                {errors.aadhaarNumber}
              </p>)}
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="employeeDateOfBirth"
              className="block text-sm font-medium text-gray-600">
              Contact Number
            </label>
            <input
              type="text"
              name="empPhone"
              id="empPhone"
              value={empData.empPhone}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="employeeDateOfBirth"
              className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              name="employeeDateOfBirth"
              id="employeeDateOfBirth"
              value={empData.employeeDateOfBirth}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="employeelocalAddress"
              className="block text-sm font-medium text-gray-600">
              Local Address
            </label>
            <input
              type="text"
              name="employeelocalAddress"
              id="employeelocalAddress"
              value={empData.employeelocalAddress}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="employeeLocation"
              className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              name="employeeLocation"
              id="employeeLocation"
              value={empData.employeeLocation}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="employeetEmail"
              className="block text-sm font-medium text-gray-600">
              E-Mail
            </label>
            <input
              type="text"
              name="employeetEmail"
              id="employeetEmail"
              value={empData.employeetEmail}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="employeeSex"
              className="block text-sm font-medium text-gray-600">
              Sex
            </label>
            <select
              name="employeeSex"
              id="employeeSex"
              value={empData.employeeSex}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"

            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="employeeBloodGroup"
              className="block text-sm font-medium text-gray-600"
            >
              Blood Group
            </label>
            <input
              type="text"
              name="employeeBloodGroup"
              id="employeeBloodGroup"
              value={empData.employeeBloodGroup}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="fatherFullName"
              className="block text-sm font-medium text-gray-600">
              Father's Full Name
            </label>
            <input
              type="text"
              name="fatherFullName"
              id="fatherFullName"
              value={empData.fatherFullName}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="motherFullName"
              className="block text-sm font-medium text-gray-600">
              Mother's Full Name
            </label>
            <input
              type="text"
              name="motherFullName"
              id="motherFullName"
              value={empData.motherFullName}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="addressStreet"
              className="block text-sm font-medium text-gray-600">
              Street Address
            </label>
            <input
              type="text"
              name="addressStreet"
              id="addressStreet"
              value={empData.addressStreet}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="addressCity"
              className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              name="addressCity"
              id="addressCity"
              value={empData.addressCity}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="addressState"
              className="block text-sm font-medium text-gray-600">
              State / Province
            </label>
            <input
              required
              type="text"
              name="addressState"
              id="addressState"
              value={empData.addressState}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="addressZipCode"
              className="block text-sm font-medium text-gray-600">
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="addressZipCode"
              id="addressZipCode"
              value={empData.addressZipCode}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfileForm;
