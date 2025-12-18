import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📱 Mobile Shop</h1>

      {products.length === 0 && <p>No products available</p>}

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{p.name}</h3>
          <p>Brand: {p.brand}</p>
          <p>Price: ₹{p.price}</p>
          <p>Stock: {p.stock}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
