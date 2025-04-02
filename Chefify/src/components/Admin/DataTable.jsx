import React, { use, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import create from "../../assets/Lab_05/create.png";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "CUSTOMER NAME", width: 200 },
    { field: "company", headerName: "COMPANY", width: 200 },
    { field: "value", headerName: "ORDER VALUE", width: 120 },
    { field: "date", headerName: "ORDER DATE", width: 200 },
    {
        field: "status",
        headerName: "STATUS",
        width: 150,
        renderCell: (params) => {
            let color = "gray";
            let textColor = "black";
            if (params.value === "New") {color = "#F1FAFE"; textColor = "#1E90FF";}
            else if (params.value === "In-process") {color = "#FFFCF"; textColor = "#FFA500";}
            else if (params.value === "Completed") {color = "#EFFDF4"; textColor = "#32CD32";}

            return(
                <div className="h-full rounded-full text-center flex items-center justify-center">
                    <div className="h-[20px] w-[100px] p-3 rounded-full text-center flex items-center justify-center" 
                    style={{ backgroundColor: color, color: textColor }}>
                        {params.value}
                    </div>
                </div>
            ) 
        }
    },
    {
        field: "edit",
        width: 50,
        renderCell: (params) => (
            <button
                className="h-full w-full"
                onClick={() => alert("Thêm sau này")}
            >
                <img src={create} alt="create" className="w-5 h-5 hover:scale-120" />
            </button>
        )
    }
];

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://67c81790c19eb8753e7c341f.mockapi.io/dataTable")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};

export default DataTable;