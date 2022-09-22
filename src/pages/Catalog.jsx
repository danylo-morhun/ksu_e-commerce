import React from "react";
import { Link } from "react-router-dom";

export default function Catalog(items) {
  return (
    <Link to={items.link}>
      <div className="card">
        <img src={items.img} alt={items.title} width={230} height={230} />
        <div className="card__bottom">
          <h3>{items.title}</h3>
          <button>Open</button>
        </div>
      </div>
    </Link>
  );
}
