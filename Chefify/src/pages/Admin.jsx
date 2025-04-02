import SlideBar from "../components/Admin/SlideBar";
import OverView from "../components/Admin/OverView";
import DataTable from "../components/Admin/DataTable";

const Admin = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
        <SlideBar />
        <div className="col-span-10 p-6">
            <OverView />
            <div className="mt-6">
                <h2 className="text-2xl font-bold text-pink-500">Data Table</h2>
                <DataTable />
            </div>
        </div>
    </div>
  );
}

export default Admin