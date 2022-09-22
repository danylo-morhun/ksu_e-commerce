import "./scss/app.scss";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://632c04e95568d3cad87a129c.mockapi.io/items`)
      .then((res) => {
        setItems(res.data);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="card-flex">
        {items.map((obj) => (
          <Catalog key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
