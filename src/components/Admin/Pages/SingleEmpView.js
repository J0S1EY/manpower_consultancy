import studentData from "./empData.json";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const singleStudent = studentData[0];

function SingleEmpView() {
    const params = useParams();
    console.log(params);
    return (
        <div className="h-full w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
            <header className="ie-as-header flex w-full justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                    {singleStudent.studentId +
                        " - " +
                        singleStudent.studentFirstName +
                        " " +
                        singleStudent.studentMiddleLastName}
                </h3>
                <div className="flex gap-4">
                    <Link
                        to={`/admin/editemploye/${singleStudent.studentId}`}
                        className=" h-7 rounded border border-blue-700 bg-blue-700 px-8 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800"
                    >
                        Edit
                    </Link>
                </div>
            </header>
            <div className="ie-as-content mt-5">
                <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
                    <div className="bg-white px-4 py-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Joining Details
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Work Site
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.classEnrolled}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Section Assigned
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.sectionAssigned}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Date of joining
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.dateOfAdmission}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
                    <div className="bg-white px-4 py-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Personal Profile
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    First name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentFirstName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Last name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentMiddleLastName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                Aadhaar Number

                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentMiddleLastName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Date of birth
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentDateOfBirth}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Sex                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentReligion}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Local Address                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentReligion}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentCaste}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Blood group
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentBloodGroup}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    E-mail
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.studentEmail}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Father's full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.fatherFullName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Mother's full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.motherFullName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Street Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.addressStreet}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">City</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.addressCity}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    State
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.addressState}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Zip code</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.addressZipCode}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
                    <div className="bg-white px-4 py-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Supervisor Details
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Supervisor Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.guardianFullName}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.guardianEmail}
                                </dd>
                            </div>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.guardianPhone}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">WhatsApp</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.guardianWhatsApp}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
                    <div className="bg-white px-4 py-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Work Description
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Job Designation
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.previousSchoolName}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Team Head</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    {singleStudent.previousSchoolAddress}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
                    <div className="bg-white px-4 py-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Attached Documents
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className=" bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Attachments
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-200 rounded-md border border-gray-200"
                                    >
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon
                                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-2 w-0 flex-1 truncate">
                                                    resume_back_end_developer.pdf
                                                </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleEmpView;
