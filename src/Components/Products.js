import { useState } from "react";
import Cart from "./Cart";

const Product = (props) => {
  const [cartItems, setCart] = useState([]);

  const products = [
    { id: "serram16", name: "16GB RAM SERVER", price: 1025.5, quantity: 1 },
    { id: "serram32", name: "32gb ram server", price: 2549.99, quantity: 1 },
    { id: "serram8", name: "8GB RAM SERVER", price: 100, quantity: 1 },
  ];

  const FindDuplicates = (e) => {
    let data = [];
    let flag = true;
    cartItems.map((ele) => {
      if (ele.id == e.id) {
        data.push({ ...ele, quantity: ele.quantity + 1 });
        flag = false;
      } else {
        data.push(ele);
      }
    });
    if (flag) {
      data.push(e);
    }
    setCart(data);
  };

  const handelClick = (ele) => {
    if (cartItems.length < 1) {
      setCart([...cartItems, { ...ele }]);
    } else {
      FindDuplicates(ele);
    }
  };

  return (
    <div>
      <div>
        <h1>products</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.name}</td>
                  <td>{ele.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        handelClick(ele);
                      }}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Cart data={cartItems} />
      </div>
    </div>
  );
};

export default Product;
