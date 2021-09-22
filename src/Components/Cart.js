import { useEffect, useState } from "react";

const Cart = (props) => {
  const { data } = props;

  const [Total, settotal] = useState(0);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    let totalprice = 0;
    data.map((ele) => {
      totalprice += ele.price * ele.quantity;
    });
    settotal(totalprice);
  }, [data]);

  const handelClick = (ele) => {
    settotal(Total * (100 - ele.discount) * 0.01);
    setflag(false);
  };

  const Getcode = (promo) => {
    const result = promo.map((ele, i) => {
      return (
        <li key={i}>
          Avail {ele.discount}% of discount{" "}
          <button
            onClick={() => {
              handelClick(ele);
            }}
          >
            {ele.Code}
          </button>
        </li>
      );
    });
    return result;
  };

  const promo = [
    { Code: "PLSD123", discount: 10 },
    { Code: "PLSD456", discount: 15 },
  ];

  return (
    <div>
      <h1>Cart</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th style={{ width: "150px" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>{ele.quantity * ele.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {Total > 5000 && flag && Getcode(promo)}
      <h2>Sub Total-{Total}</h2>
    </div>
  );
};
export default Cart;
