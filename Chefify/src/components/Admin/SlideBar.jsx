import logo from "../../assets/Lab_05/Image 1858.png";
import Square from "../../assets/Lab_05/Squares four 1.png";
import Folder from "../../assets/Lab_05/Folder.png";
import Groups from "../../assets/Lab_05/Groups.png";
import Analytics from "../../assets/Lab_05/Pie chart.png";
import Messages from "../../assets/Lab_05/Chat.png";
import Integrations from "../../assets/Lab_05/Code.png";

const SlideBar = () => {

    return (
        <aside className="col-span-2 p-4 border-r border-gray-100">
        <img src={logo} alt="Logo" />
        <nav className="mt-4">
          <ul>
            <li className="flex gap-4 p-2 bg-pink-500 text-white rounded"><img src={Square} alt="" />Dashboard</li>
            <li className="flex gap-4 p-2"><img src={Folder} alt="Folder" />Projects</li>
            <li className="flex gap-4 p-2"><img src={Groups} alt="Groups" />Teams</li>
            <li className="flex gap-4 p-2"><img src={Analytics} alt="Analytics" />Analytics</li>
            <li className="flex gap-4 p-2"><img src={Messages} alt="Messages" />Messages</li>
            <li className="flex gap-4 p-2"><img src={Integrations} alt="Integrations" />Integrations</li>
          </ul>
        </nav>
      </aside>
    )
}

export default SlideBar