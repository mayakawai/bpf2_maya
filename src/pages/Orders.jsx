import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  const orders = Array.from({ length: 15 }, (_, i) => ({
    id: `ORD-${(i + 1).toString().padStart(3, "0")}`,
    customer: ["Andi", "Budi", "Siti", "Dewi", "Eko"][i % 5],
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    total: `Rp ${(Math.random() * 200000 + 50000).toFixed(0)}`,
    date: `2024-04-${(i % 28) + 1}`,
  }));

  return (
    <div className="p-6">
      
      {/* HEADER */}
      <PageHeader
        title="Orders"
        breadcrumb={["Home", "Orders"]}
      />

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Status</th>
              <th className="p-4">Total</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr
                key={o.id}
                className={`border-t hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-medium">{o.id}</td>
                <td className="p-4">{o.customer}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      o.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : o.status === "Cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="p-4">{o.total}</td>
                <td className="p-4 text-gray-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BUTTON DI BAWAH */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Order
        </button>
      </div>

      {/* MODAL */}
      {showForm && (
        <Modal title="Add Order" onClose={() => setShowForm(false)}>
          <input placeholder="Order ID" className="input" />
          <input placeholder="Customer Name" className="input" />
          <select className="input">
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <input placeholder="Total Price" className="input" />
          <input type="date" className="input" />
        </Modal>
      )}
    </div>
  );
}

/* ================= MODAL ================= */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 space-y-3">
        <h2 className="text-lg font-semibold">{title}</h2>

        {children}

        <div className="flex gap-2 mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}