import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
    { id: 1, name: "Nguyễn Văn A", age: 25, city: "Hồ Chí Minh" },
    { id: 2, name: "Trần Thị B", age: 30, city: "Hà Nội" },
    { id: 3, name: "Lê Văn C", age: 28, city: "Đà Nẵng" }
];

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Họ và Tên", width: 200 },
    { field: "age", headerName: "Tuổi", width: 120 },
    { field: "city", headerName: "Thành phố", width: 200 }
];

const DataTable = () => {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};

export default DataTable;