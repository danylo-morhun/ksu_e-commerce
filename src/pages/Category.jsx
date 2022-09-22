import React from "react";

export default function Category(category) {
  console.log(category);
  return (
    <div className="card">
      <img src={category.img} alt={category.title} />
      <div className="desc">{category.desc}</div>
      <div className="card__bottom">
        <h3>{category.title}</h3>
        <button>Buy now</button>
      </div>
    </div>
  );
}
