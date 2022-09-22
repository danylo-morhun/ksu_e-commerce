import React from "react";

export default function Catalog(items) {
  return (
    <div className="card">
      <img src={items.img} alt={items.title} width={230} height={230} />
      <div className="card__bottom">
        <h3>{items.title}</h3>
        <button>Open</button>
      </div>
    </div>
  );
}
