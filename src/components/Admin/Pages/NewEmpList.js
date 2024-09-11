import studentData from "./empData.json";
import "@tremor/react/dist/esm/tremor.css";
import {
    Badge,
    Button,
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    MultiSelectBox,
    MultiSelectBoxItem,
} from "@tremor/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewEmpList = () => {
    const [selectedNames, setSelectedNames] = useState([]);

    const isStudentSelected = (student) =>
        selectedNames.includes(student.guardianPhone) || selectedNames.length === 0;

    return (
        <div className="h-full w-full bg-gray-50 px-2 py-2 xl:px-10 xl:py-10">
            <header className="ie-as-header flex w-full justify-between">
                <h3 className="text-xl font-semibold text-gray-900">New Employees</h3>
                <div className="flex gap-4">
                    <button className="hidden h-9 rounded border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:block">
                        Export
                    </button>
                </div>
            </header>
            <div className="ie-as-content mt-5">
                <Card shadow={false}>
                    <MultiSelectBox
                        onValueChange={(value) => setSelectedNames(value)}
                        placeholder="Select by Number..."
                        maxWidth="max-w-xs"
                    >
                        {studentData.map((item) => (
                            <MultiSelectBoxItem
                                key={item.guardianPhone}
                                value={item.guardianPhone}
                                text={
                                    item.guardianPhone +
                                    " : " +
                                    item.studentFirstName +
                                    " " +
                                    item.studentMiddleLastName
                                }
                            />
                        ))}
                    </MultiSelectBox>
                    <Table marginTop="mt-6">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>Number</TableHeaderCell>
                                <TableHeaderCell>Designations</TableHeaderCell>
                                <TableHeaderCell>Email</TableHeaderCell>
                                <TableHeaderCell>Place</TableHeaderCell>
                                <TableHeaderCell>Actions</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {studentData
                                .filter((item) => isStudentSelected(item))
                                .map((item) => (
                                    <TableRow key={item.studentId}>
                                        <TableCell>{item.studentFirstName + " " + item.studentMiddleLastName}</TableCell>
                                        <TableCell>{item.guardianPhone}</TableCell>
                                        <TableCell>{item.sectionAssigned}</TableCell>
                                        <TableCell>{item.studentEmail}</TableCell>
                                        <TableCell>{item.addressState}</TableCell>
                                        <TableCell>
                                            <Link
                                                to={`/admin/approveemploye/${item.studentId}`}
                                                className="rounded-full bg-green-200 py-[3px] px-3 text-xs text-green-900 transition-all hover:bg-green-100"
                                            >
                                                Approve
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    );
};

export default NewEmpList;
