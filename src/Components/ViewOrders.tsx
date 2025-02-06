import React, { useState } from "react";
import "./viewOrders.css"; // You can style this component using this CSS file.

interface Order {
  id: number;
  customerName: string;
  items: string[];
  status: string;
  date: string;
}

const ViewOrders: React.FC = () => {
  // Example orders; replace with actual data fetching logic
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customerName: "John Doe", items: ["Spaghetti Bolognese", "Garlic Bread"], status: "Pending", date: "2025-01-28" },
    { id: 2, customerName: "Jane Smith", items: ["Chicken Curry", "Rice"], status: "Completed", date: "2025-01-27" },
  ]);

  // Function to update the order status
  const updateOrderStatus = (id: number, status: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="view-orders">
      <h1>View Orders</h1>
      
      <div className="orders-list">
        <h2>Orders List</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Items</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.items.join(", ")}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td>
                  <button 
                    onClick={() => updateOrderStatus(order.id, order.status === "Pending" ? "Completed" : "Pending")}
                    className="status-btn"
                  >
                    Mark as {order.status === "Pending" ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
