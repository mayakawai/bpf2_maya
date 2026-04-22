import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader/>

            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Total Orders */}
                <div className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                    <div className="bg-green-500 text-white p-3 rounded-full text-xl">
                        <FaShoppingCart />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">75</h2>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                </div>

                {/* Total Delivered */}
                <div className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full text-xl">
                        <FaTruck />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">175</h2>
                        <p className="text-gray-400 text-sm">Total Delivered</p>
                    </div>
                </div>

                {/* Total Canceled */}
                <div className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                    <div className="bg-red-500 text-white p-3 rounded-full text-xl">
                        <FaBan />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">40</h2>
                        <p className="text-gray-400 text-sm">Total Canceled</p>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                    <div className="bg-yellow-400 text-white p-3 rounded-full text-xl">
                        <FaDollarSign />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Rp.128</h2>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                    </div>
                </div>

            </div>
        </div>
    );
}