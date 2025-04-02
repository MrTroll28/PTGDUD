import OverViewCard from "./OverViewCard";
import Question from "../../assets/Lab_05/Question 1.png";
import Avatar from "../../assets/Lab_05/Avatar (1).png";
import Bell from "../../assets/Lab_05/Bell 1.png";
import Search from "../../assets/Lab_05/Search.png";
import Square4 from "../../assets/Lab_05/Squares four 1.png";

const OverView = () => {

    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center bg-gray-100 py-2 rounded-md w-[350px]">
                        <span className="mx-3">
                            <img src={Search} alt="Search" className="w-5 h-5 opacity-70" />
                        </span>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="focus:outline-none"
                        />
                    </div>
                    <img src={Bell} alt="bell" />
                    <img src={Question} alt="question mark" />
                    <img src={Avatar} alt="avarta" />
                </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
                <img src={Square4} alt="square4" />
                <h2 className="font-bold text-[20px]">Overview</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <OverViewCard title="Turnover" amount="$92,405" />
                <OverViewCard title="Orders" amount="1,250" />
                <OverViewCard title="Customers" amount="320" />
            </div>
        </div>
    );
}

export default OverView;