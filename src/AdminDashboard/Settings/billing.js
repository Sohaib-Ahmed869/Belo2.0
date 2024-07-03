import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import visaLogo from "../../Assets/visa.png";
import mastercardLogo from "../../Assets/masterCard.png";
import PaymentMethod from "./Modals/paymentMethod";

const initialBillingState = {
  paymentMethods: [
    {
      type: "Visa",
      lastFour: "1234",
      expiry: "10/25",
    },
    {
      type: "Mastercard",
      lastFour: "1234",
      expiry: "10/25",
    },
  ],
  billingHistory: [
    {
      date: "10/10/2023",
      description: "Payment",
      paymentMethod: "Mastercard",
      amount: "$1000",
      status: "Paid",
    },
    {
      date: "10/10/2023",
      description: "Payment",
      paymentMethod: "Mastercard",
      amount: "$100",
      status: "Refunded",
    },
    {
      date: "10/10/2023",
      description: "Payment",
      paymentMethod: "Mastercard",
      amount: "$500",
      status: "Paid",
    },
    {
      date: "10/10/2023",
      description: "Payment",
      paymentMethod: "Mastercard",
      amount: "$700",
      status: "Paid",
    },
  ],
};

const Billing = () => {
  const [billingState, setBillingState] = useState(initialBillingState);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleRemoveCard = (index) => {
    const updatedPaymentMethods = billingState.paymentMethods.filter(
      (_, i) => i !== index
    );
    setBillingState({ ...billingState, paymentMethods: updatedPaymentMethods });
  };

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-2xl mb-4">Settings</h1>
      <p className="text-gray-500">
        Manage your account settings and preferences
      </p>

      <div className="mt-8">
        <h2 className="text-xl mb-4">Billing</h2>
        <p className="text-gray-500 mb-4">Manage all your billing details</p>

        {billingState.paymentMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4 border border-gray-100"
          >
            <div className="flex items-center">
              <div
                className={`w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full mr-4`}
              >
                <img
                  src={method.type === "Visa" ? visaLogo : mastercardLogo}
                  alt={`${method.type} logo`}
                  className="h-1/3"
                />
              </div>
              <div>
                <p className="text-lg font-medium">{method.type}</p>
                <p className="text-gray-500">
                  **** **** **** {method.lastFour}
                </p>
                <p className="text-gray-500">Expiry {method.expiry}</p>
              </div>
            </div>
            <button
              className="text-red-500 hover:text-white hover:bg-red-500 flex items-center justify-center rounded-full border border-red-500 py-1 px-2 transition duration-300"
              onClick={() => handleRemoveCard(index)}
            >
              <FaTrashAlt /> Remove Card
            </button>
          </div>
        ))}

        <button className="flex items-center text-blue-500 hover:text-blue-700 mb-8 rounded-full border border-gray-300 px-3 py-1" onClick={() => setShowPaymentModal(true)}>
          <span className="mr-2">+ Add Payment Method</span>
        </button>

        <div className="overflow-x-auto border border-gray-100 shadow p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Billing History</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">DATE</th>
                <th className="px-4 py-2 border-b text-left">DESCRIPTION</th>
                <th className="px-4 py-2 border-b text-left">PAYMENT METHOD</th>
                <th className="px-4 py-2 border-b text-left">AMOUNT</th>
                <th className="px-4 py-2 border-b text-center">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {billingState.billingHistory.map((history, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{history.date}</td>
                  <td className="px-4 py-2 border-b">{history.description}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src={
                          history.paymentMethod === "Visa"
                            ? visaLogo
                            : mastercardLogo
                        }
                        alt={`${history.paymentMethod} logo`}
                        className="h-6 mr-2"
                      />
                      {history.paymentMethod}
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">{history.amount}</td>
                  <td className="px-4 py-2 border-b flex items-center justify-center font-xs">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        history.status === "Paid"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {history.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <PaymentMethod show={showPaymentModal} setShow={setShowPaymentModal} />
    </div>
  );
};

export default Billing;
