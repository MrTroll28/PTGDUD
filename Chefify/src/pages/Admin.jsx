import { Routes, Route } from "react-router-dom";
import DataTable from "../components/Admin/DataTable";
import SlideBar from "../components/Admin/SlideBar";
import OverView from "../components/Admin/OverView";
import PageData from "../components/Admin/PageData";

const Admin = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <SlideBar />
      <div className="col-span-10 p-6">
        <OverView />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<DataTable />} />
            <Route path="/project" element={<PageData name="Project" />} />
            <Route path="/dashboard" element={<PageData name="Dashboard" />} />
            <Route path="/settings" element={<PageData name="Setting" />} />
            <Route path="/profile" element={<PageData name="Profile" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;