import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incQty, descQty } from "../feature/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0f0c0a] min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Your cart is empty 🛒
          </h2>
          <p className="text-gray-400">
            Add some products to continue shopping.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0c0a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

        <div className="grid md:grid-cols-3 gap-8">
      
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-[#1a1614] border border-gray-700 rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h4 className="font-semibold text-lg line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-400">${item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => dispatch(incQty(item.id))}
                      className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                    >
                      +
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(descQty(item.id))}
                      className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-700"
                    >
                      −
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-400 hover:text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

        
          <div className="bg-[#1a1614] border border-gray-700 rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2 text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-300">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>

            <div className="border-t border-gray-700 my-4"></div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${(subtotal + 5).toFixed(2)}</span>
            </div>

          

             <button className="w-full py-3 bg-[#ffffff] text-[#000000] text-sm tracking-wider hover:bg-[#D9A520] hover:text-[#000000!important]
                             transition-colors rounded-sm flex items-center justify-center gap-2"
                        >
                        Proceed to Checkout
                        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
