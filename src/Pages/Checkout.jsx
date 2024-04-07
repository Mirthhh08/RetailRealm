import React from "react";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";

const Checkout = () => {
  const { all_products, cartItems, totalCartAmount } = useContext(ShopContext);

  const checkoutHandler = async (amount) => {
    const {
      data: { response },
    } = await axios.post("http://localhost:4000/checkout", {
      amount,
    });

    const options = {
      key: "rzp_test_SAZ5hxkkLs5geZ", // Enter the Key ID generated from the Dashboard
      amount: response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "EZMART",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/paymentverification",
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="px-4">
      <div className="col gap-3">
        <div className="col-md-7 pb-5">
          <div className="card md:h-[450px]">
            <div className="card-header">
              <h4 className="text-xl font-bold">Billing Details</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                      className="border-1 py-1  border-slate-500  form-input mt-1 block w-full outline-none"
                    />
                    <small className="text-red-500"></small>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={changeHandler}
                      className="form-input border-1 py-1  border-slate-500  mt-1 block w-full outline-none"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={changeHandler}
                      className="form-input mt-1 border-1 py-1  border-slate-500  block w-full outline-none"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Address
                    </label>
                    <textarea
                      rows="3"
                      name="address"
                      value={formData.address}
                      onChange={changeHandler}
                      className="form-textarea border-1 py-1  border-slate-500  mt-1 block w-full"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium  text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={changeHandler}
                      className="form-input mt-1 border-1 py-1  border-slate-500  block w-full outline-none"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="border-1 py-1  border-slate-500  form-input mt-1 block w-full outline-none"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={changeHandler}
                      className="form-input border-1 py-1  border-slate-500  mt-1 block w-full outline-none"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group text-end">
                    <button
                      type="button"
                      className="btn btn-primary text-black mx-1"
                      onClick={() => checkoutHandler(totalCartAmount())}
                    >
                      Place Order
                    </button>

                    <button type="button" className="btn btn-warning mx-1">
                      Pay Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th width="50%">Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
              {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <tr>
                      <th>{e.name}</th>
                      <th>Rs{e.new_price}</th>
                      <th>{cartItems[e.id]}</th>
                      <th>{e.new_price * cartItems[e.id]}</th>
                    </tr>
                  );
                } else return null;
              })}
            </thead>
          </table>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th width="84%">Grand Total</th>

                <th>{totalCartAmount()}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <p className="py-4 font-semibold text-xl">
        Cash on delivery. Please contact us if you require assistance or wish to
        make alternate arrangements.
      </p>
    </div>
  );
};

export default Checkout;
