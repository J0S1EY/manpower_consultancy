import UtilCombobox from "./util/UtilCombobox";

function JoiningDetailsForm({ empData, setEmpData }) {
  const inputChangeHandler = (event) => {
    setEmpData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="dateOfJoining"
              className="block text-sm font-medium text-gray-600">
              Date of Joining
            </label>
            <input
              type="date"
              name="dateOfJoining"
              id="dateOfJoining"
              value={empData.dateOfJoining}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="workSite"
              className="block text-sm font-medium text-gray-600">
              Work Site
            </label>
            <input
              type="text"
              name="workSite"
              id="workSite"
              value={empData.workSite}
              onChange={inputChangeHandler}
              className="bg-gray mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="sectionAssigned"
              className="block text-sm font-medium text-gray-600">
              Section Assigned
            </label>
            <input
              type="text"
              name="sectionAssigned"
              id="sectionAssigned"
              value={empData.sectionAssigned}
              onChange={inputChangeHandler}
              className="bg-gray mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JoiningDetailsForm;
