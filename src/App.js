import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import React from "react";
import axios from "axios";
import Category from "./pages/Category";

function App() {
  const [items, setItems] = React.useState([]);
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://632c04e95568d3cad87a129c.mockapi.io/category`)
      .then((res) => {
        setItems(res.data);
      });

    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://632c04e95568d3cad87a129c.mockapi.io/items`)
      .then((res) => {
        setCategory(res.data);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="card-flex">
              {items.map((obj) => (
                <Catalog key={obj.id} {...obj} />
              ))}
            </div>
          }
        />
        <Route
          exact
          path="category/pc"
          element={
            <div className="card-flex">
              {category.map((obj) => (
                <Category key={obj.id} {...obj} />
              ))}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
