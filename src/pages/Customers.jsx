import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  const customers = Array.from({ length: 15 }, (_, i) => ({
    id: `CUST-${(i + 1).toString().padStart(3, "0")}`,
    name: ["Andi", "Budi", "Siti", "Dewi", "Eko"][i % 5] + " Pratama",
    email: `user${i + 1}@mail.com`,
    phone: `0812345678${i}`,
    loyalty: ["Bronze", "Silver", "Gold"][i % 3],
  }));

  return (
    <div className="p-6">
      <PageHeader
        title="Customers"
        breadcrumb={["Home", "Customers"]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr
                key={c.id}
                className={`border-t hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 font-medium">{c.id}</td>
                <td className="p-4">{c.name}</td>
                <td className="p-4 text-gray-500">{c.email}</td>
                <td className="p-4">{c.phone}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.loyalty === "Gold"
                        ? "bg-yellow-100 text-yellow-600"
                        : c.loyalty === "Silver"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showForm && (
        <Modal title="Add Customer" onClose={() => setShowForm(false)}>
          <input placeholder="Customer ID" className="input" />
          <input placeholder="Name" className="input" />
          <input placeholder="Email" className="input" />
          <input placeholder="Phone" className="input" />
          <select className="input">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
        </Modal>
      )}
    </div>
  );
}