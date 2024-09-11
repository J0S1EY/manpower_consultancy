import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import JoiningDetailsForm from "./AddEmp/sc_forms/JoiningDetailsForm";
import SupervisorDetailsForm from "./AddEmp/sc_forms/SupervisorDetailsForm";
import PersonalProfileForm from "./AddEmp/sc_forms/PersonalProfileForm";
import WorkDetailsForm from "./AddEmp/sc_forms/WorkDetailsForm";
import employeeData from "./empData.json"; // Assuming this is a list of employees

function UpdateSpan() {
    return <span className="text-gray-300">N/A</span>;
}

function ApproveEmploye() {
    const { id } = useParams(); // Get the employee id from the URL
    console.log(id)
    const [empData, setEmpData] = useState({
        employeeFirstName: "",
        employeeLastName: "",
        aadhaarNumber: "",
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
        employeeId: "",
        dateOfJoining: "",
        workSite: "",
        sectionAssigned: "",
        supervisorName: "",
        supervisorEmail: "",
        supervisorPhone: "",
        supervisorWhatsApp: "",
    });

    const submitButtonRef = useRef();

    // Load employee data based on the employee ID from params
    useEffect(() => {
        const employee = employeeData.find(emp => emp.studentId === id);
        if (employee) {
            setEmpData(employee);
        }
    }, [id]);

    const submitFormHandler = (event) => {
        event.preventDefault();
        alert("Form Submitted");

        // Here you could update the employee data in the backend
    };

    const submitAlt = () => {
        submitButtonRef.current.click();
    };

    return (
        <div className="w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
              <header className="ie-na-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Approve Employee Form</h3>
       
      </header>
            <div className="mt-5 flex w-full flex-col gap-10 2xl:flex-row">
                <form
                    onSubmit={submitFormHandler}
                    className="flex w-full flex-col items-end gap-10 2xl:max-w-5xl">
                    
                    {/* Personal Profile Form */}
                    <div className="w-full rounded-md border border-gray-200 bg-white">
                        <div className="border-b border-gray-200 py-4 px-6">
                            <span className="text-lg font-medium">Personal Profile</span>
                        </div>
                        <PersonalProfileForm empData={empData} setEmpData={setEmpData} />
                    </div>
                    
                    {/* Work Description Form */}
                    <div className="w-full rounded-md border border-gray-200 bg-white">
                        <div className="border-b border-gray-200 py-4 px-6">
                            <span className="text-lg font-medium">Work Description</span>
                        </div>
                        <WorkDetailsForm empData={empData} setEmpData={setEmpData} />
                    </div>
                    
                    {/* Joining Details Form */}
                    <div className="w-full rounded-md border border-gray-200 bg-white">
                        <div className="border-b border-gray-200 py-4 px-6">
                            <span className="text-lg font-medium">Work Joining Details</span>
                        </div>
                        <JoiningDetailsForm empData={empData} setEmpData={setEmpData} />
                    </div>
                    
                    {/* Supervisor Details Form */}
                    <div className="w-full rounded-md border border-gray-200 bg-white">
                        <div className="border-b border-gray-200 py-4 px-6">
                            <span className="text-lg font-medium">Supervisor Details</span>
                        </div>
                        <SupervisorDetailsForm empData={empData} setEmpData={setEmpData} />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        ref={submitButtonRef}
                        type="submit"
                        className="rounded border border-blue-700 bg-blue-700 px-10 py-2 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800">
                        SUBMIT
                    </button>
                </form>

                {/* Employee Summary */}
                <div className="h-fit flex-1 rounded-md border border-gray-200 bg-white py-4 px-6">
                    <span className="text-lg font-medium">Employee Summary</span>
                    <div className="mt-3 rounded-md bg-gray-50 p-5">
                        <span className="block w-fit rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
                            {empData.employeeId || <UpdateSpan />}
                        </span>
                        <span className="mt-2 block whitespace-normal text-3xl font-semibold text-gray-900">
                            {empData.employeeFirstName
                                ? `${empData.employeeFirstName} ${empData.employeeLastName}`
                                : <UpdateSpan />}
                        </span>
                        
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Job Enrolled: </span>
                            <span>{empData.dateOfJoining || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Designation: </span>
                            <span>{empData.sectionAssigned || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Blood Group: </span>
                            <span>{empData.employeeBloodGroup || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Date Of Birth: </span>
                            <span>{empData.employeeDateOfBirth || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Address: </span>
                            <span>{empData.addressStreet || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Supervisor Name: </span>
                            <span>{empData.supervisorName || <UpdateSpan />}</span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            <span className="font-semibold">Phone: </span>
                            <span>{empData.supervisorPhone || <UpdateSpan />}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApproveEmploye;