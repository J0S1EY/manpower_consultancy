import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import JoiningDetailsForm from "./AddEmp/sc_forms/JoiningDetailsForm";
import SupervisorDetailsForm from "./AddEmp/sc_forms/SupervisorDetailsForm";
import PersonalProfileForm from "./AddEmp/sc_forms/PersonalProfileForm";
import WorkDetailsForm from "./AddEmp/sc_forms/WorkDetailsForm";

function UpdateSpan() {
  return <span className="text-gray-300">N/A</span>;
}

function AddNewEmp() {
  const [empData, setEmpData] = useState({
    employeeFirstName: "",
    employeeLastName: "",
    aadhaarNumber: "",
    empPhone:"",
    employeeDateOfBirth: "",
    employeelocalAddress: "",
    employeeLocation: "",
    employeetEmail: "",
    employeeSex: "",
    employeeBloodGroup: "",
    fatherFullName: "",
    motherFullName: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZipCode: "",
    jobDesignation: "",
    teamHead: "",
    employeeId: "123456",
    dateOfJoining: "",
    workSite: "",
    sectionAssigned: "",
    supervisorName: "",
    supervisorEmail: "",
    supervisorPhone: "",
    supervisorWhatsApp: "",

  });

  const submitButtonRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    setEmpData({
      employeeFirstName: "",
      employeeLastName: "",
      aadhaarNumber: "",
      empPhone:"",
      employeeDateOfBirth: "",
      employeelocalAddress: "",
      employeeLocation: "",
      employeetEmail: "",
      employeeSex: "",
      employeeBloodGroup: "",
      fatherFullName: "",
      motherFullName: "",
      addressStreet: "",
      addressCity: "",
      addressState: "",
      addressZipCode: "",
      jobDesignation: "",
      teamHead: "",
      studentId: "SVPSAS230001",
      dateOfJoining: "",
      workSite: "",
      sectionAssigned: "",
      supervisorName: "",
      supervisorEmail: "",
      supervisorPhone: "",
      supervisorWhatsApp: "",
    });
    console.log(empData)
  };

  const submitAlt = () => {
    submitButtonRef.current.click();
    
  };

  return (
    <div className="w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-na-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-gray-900">New Employee Form</h3>
        <div className="flex gap-4">
          <Link
            to="bulkentry"
            className="hidden h-9 rounded border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:flex sm:items-center sm:justify-center">
            Bulk Entry
          </Link>
        </div>
      </header>
      <div className="ie-na-content mt-5 flex w-full flex-col gap-10 2xl:flex-row">
        <form
          onSubmit={submitFormHandler}
          className="flex w-full flex-col items-end gap-10 2xl:max-w-5xl">
          <div className="IndividualDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Persional Profile</span>
            </div>
            <PersonalProfileForm
              empData={empData}
              setEmpData={setEmpData} />
          </div>
          <div
            id="previous-school"
            className="personalDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">
                Work Description
              </span>
            </div>
            <WorkDetailsForm
              empData={empData}
              setEmpData={setEmpData} />
          </div>

          <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Work Joining Details</span>
            </div>
            <JoiningDetailsForm
              empData={empData}
              setEmpData={setEmpData} />
          </div>

          <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Supervisor  Details</span>
            </div>
            <SupervisorDetailsForm
              empData={empData}
              setEmpData={setEmpData} />
          </div>
          <button
            ref={submitButtonRef}
            type="submit"
            className="rounded border border-blue-700 bg-blue-700 px-10 py-2 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800">
            SUBMIT
          </button>
        </form>

        <div className="ie-nc-summary h-fit flex-1 rounded-md border border-gray-200 bg-white py-4 px-6">
          <span className="summaryTitle text-lg font-medium">Employee Summary</span>
          <div className="summaryInfo mt-3 rounded-md bg-gray-50 p-5">
            <span className="text block w-fit rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
              {empData.employeeId}
            </span>
            <span className="mt-2 block whitespace-normal text-3xl font-semibold text-gray-900">
              {empData.studentFirstName !== "" ? (empData.employeeFirstName + " " + empData.employeeLastName) : (<UpdateSpan />)}
            </span>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Job Enrolled: </span>
              <span>
                {empData.dateOfJoining !== "" ? (empData.dateOfJoining) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Designation: </span>
              <span>
                {empData.sectionAssigned !== "" ? (empData.sectionAssigned) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Blood Group: </span>
              <span>
                {empData.employeeBloodGroup !== "" ? (empData.employeeBloodGroup) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Date Of Birth: </span>
              <span>
                {empData.employeeDateOfBirth !== "" ? (empData.employeeDateOfBirth) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Address: </span>
              <span>
                {empData.addressStreet !== "" ? (empData.addressStreet) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Supervisor  Name: </span>
              <span>
                {empData.supervisorName !== "" ? (empData.supervisorName) : (<UpdateSpan />)}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Phone: </span>
              <span>
                {empData.supervisorPhone !== "" ? (empData.supervisorPhone) : (<UpdateSpan />)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewEmp;
