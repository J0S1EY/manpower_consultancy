import React from 'react';
import "@tremor/react/dist/esm/tremor.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from './AdminSidebar';
import AdminHome from './AdminHome';
import AllEmployes from './Pages/AllEmployes';
import AddNewEmp from './Pages/AddNewEmp';
import BulkEntry from './Pages/AddEmp/BulkAdmit/BulkEntry';
import SingleEmpView from './Pages/SingleEmpView';
import NewEmpList from './Pages/NewEmpList';
import Editemploye from './Pages/Editemploye';
import ApproveEmploye from './Pages/ApproveEmploye';




function AdminLink() {

    return (
        <div className="flex">
            <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
                <Sidebar />
            </aside>
            <div className="flex-1 ">
                <Routes>
                    <Route exact path="/" element={<AdminHome />} />
                    <Route exact path="/admin" element={<AdminHome />} />
                    <Route exact path="/allemployees" element={<AllEmployes />} />
                    <Route exact path="/newemployelist" element={<NewEmpList />} />
                    <Route path="/addemployee">
                        <Route exact index element={<AddNewEmp />} />
                        <Route exact path="bulkentry" element={<BulkEntry />} />
                    </Route>
                    <Route exact path="/viewemploye/:id" element={<SingleEmpView />}/>
                    <Route exact path="/editemploye/:id" element={<Editemploye />}/>
                    <Route exact path="/approveemploye/:id" element={<ApproveEmploye />}/>
                </Routes>
            </div>
        </div>

    );
}

export default AdminLink;
