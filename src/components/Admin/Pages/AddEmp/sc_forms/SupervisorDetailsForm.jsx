import { useState } from "react";

function SupervisorDetailsForm({ empData, setEmpData }) {
  const inputChangeHandler = (event) => {
    setEmpData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleWhatsAppCheckbox = (event) => {
    if (event.target.checked) {
      setEmpData((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    } else {
      setEmpData((prev) => {
        return { ...prev, guardianWhatsApp: "" };
      });
    }
  };

  return (
    <>
      <div className="overflow-hidden sm:rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="supervisorName"
                className="block text-sm font-medium text-gray-600">
                Supervisor Name
              </label>
              <input
                required
                type="text"
                name="supervisorName"
                id="supervisorName"
                value={empData.supervisorName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />

            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="supervisorEmail"
                className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                required
                type="email"
                name="supervisorEmail"
                id="supervisorEmail"
                value={empData.supervisorEmail}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="supervisorPhone"
                className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                required
                type="tel"
                name="supervisorPhone"
                id="supervisorPhone"
                value={empData.supervisorPhone}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="supervisorWhatsApp"
                className="block text-sm font-medium text-gray-600">
                WhatsApp
              </label>
              <input
                type="tel"
                name="supervisorWhatsApp"
                id="supervisorWhatsApp"
                value={empData.supervisorWhatsApp}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
              <div className="mt-2 flex items-center">
                <div className="flex h-5 items-center">
                  <input
                    id="supervisorWhatsAppChecked"
                    name="supervisorWhatsApp"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700"
                    value={empData.supervisorPhone}
                    onChange={handleWhatsAppCheckbox} />
                </div>
                <div className="ml-2 text-xs sm:text-sm">
                  <label
                    htmlFor="supervisorWhatsAppChecked"
                    className=" text-gray-500">
                    Same as phone number
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupervisorDetailsForm;
