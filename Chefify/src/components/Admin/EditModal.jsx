import React, { useEffect, useState } from "react";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

const EditModal = ({ isOpen, onClose, rowData, onSave }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (rowData) {
            setFormData({
                ...rowData,
                date: formatDate(rowData.date),
            });
        }
    }, [rowData]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[500px] relative">
                {/* Close button */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                    onClick={onClose}
                >
                    X
                </button>

                <h2 className="text-xl font-semibold mb-4 text-pink-500">Edit Order</h2>

                {/* Name */}
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                    type="text"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />

                {/* Company */}
                <label className="block mt-4 text-sm font-medium text-gray-700">Company</label>
                <input
                    type="text"
                    value={formData.company || ""}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />

                {/* Order Value */}
                <label className="block mt-4 text-sm font-medium text-gray-700">Order Value</label>
                <input
                    type="text"
                    value={formData.value || ""}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />

                {/* Order Date */}
                <label className="block mt-4 text-sm font-medium text-gray-700">Order Date</label>
                <input
                    type="date"
                    value={formData.date || ""}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />

                {/* Status */}
                <label className="block mt-4 text-sm font-medium text-gray-700">Status</label>
                <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    value={formData.status || ""}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                    <option value="New">New</option>
                    <option value="In-process">In-process</option>
                    <option value="Completed">Completed</option>
                </select>

                {/* Action buttons */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(formData)}
                        className="px-4 py-2 text-sm bg-pink-500 text-white rounded-md hover:bg-pink-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
