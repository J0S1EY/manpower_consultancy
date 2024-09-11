function WorkDetailsForm({ empData, setEmpData }) {
  const inputChangeHandler = (event) => {
    setEmpData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="overflow-hidden sm:rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="jobDesignation"
                className="block text-sm font-medium text-gray-600" >
                Job Designation
              </label>
              {/* className="mb-5 block w-80 rounded border border-[#EAEAEA] px-3 py-3 text-[#1e1e1e] placeholder-[#999999] transition ease-in focus:border-[#1e1e1e] focus:outline-none" */}

              <input
                required
                type="text"
                name="jobDesignation"
                id="jobDesignation"
                value={empData.jobDesignation}
                onChange={inputChangeHandler}
                className=" mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="teamHead"
                className="block text-sm font-medium text-gray-600">
                Team Head
              </label>
              <input
                required
                type="text"
                name="teamHead"
                id="teamHead"
                value={empData.teamHead}
                onChange={inputChangeHandler}
                className=" mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetailsForm;
