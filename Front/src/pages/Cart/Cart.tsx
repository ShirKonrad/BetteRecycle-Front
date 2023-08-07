import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import Product from "../../components/Product/Product";

const products = [
  {
    name: "עציץ כלשהו",
    price: 50.0,
    amount: 1,
    code: "D!GCF09",
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "הופעה כלשהי",
    price: 80,
    code: "B!GCD1B",
    expartionDate: new Date(),
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "שולחן כלשהו",
    price: 250,
    amount: 1,
    code: "C!GCA20",
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "עוד הופעה כלשהי",
    price: 110.0,
    code: "A!GC8FE",
    expartionDate: new Date(),
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
];

interface Props {}

const Cart: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="head">
        <p className="headText">ההטבות שלי</p>
        <div className="headCircle">{products.length}</div>
      </div>

      {products.map((product) => (
        <Product
          name={product.name}
          key={product.name}
          price={product.price}
          amount={product.amount}
          expartionDate={product.expartionDate}
          image={product.image}
          code={product.code}
        />
      ))}
    </div>
  );
};

export default Cart;
