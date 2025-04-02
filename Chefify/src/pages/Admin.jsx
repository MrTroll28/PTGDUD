import SlideBar from "../components/Admin/SlideBar";
import OverView from "../components/Admin/OverView";

const Admin = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
        <SlideBar />
        <div className="col-span-10 p-6">
            <OverView />
            

        </div>
    </div>
  );
}

export default Admin