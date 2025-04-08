import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import edit from "../../assets/Lab_05/create.png";
import EditModal from "./EditModal";

const columns = (handleEditClick) => [
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
                onClick={() => handleEditClick(params.row)}
            >
                <img src={edit} alt="edit" className="w-5 h-5 hover:scale-120" />
            </button>
        )
    }
];

const DataTable = () => {
    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        fetch("https://67c81790c19eb8753e7c341f.mockapi.io/dataTable")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedRow(null);
    };

    const handleSave = async (updatedRow) => {
        try {
            const response = await fetch(
                `https://67c81790c19eb8753e7c341f.mockapi.io/dataTable/${updatedRow.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedRow), // mockapi bắt gửi toàn bộ object
                }
            );
    
            if (!response.ok) throw new Error("Cập nhật thất bại");
    
            const updatedData = await response.json();
    
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === updatedData.id ? updatedData : item
                )
            );
    
            setModalOpen(false);
        } catch (error) {
            console.error("Lỗi cập nhật:", error);
        }
    };    

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={data} columns={columns(handleEditClick)} pageSize={5} checkboxSelection />
            <EditModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                rowData={selectedRow}
                onSave={handleSave}
            />
        </div>
    );
};

export default DataTable;
