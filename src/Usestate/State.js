import { useState } from "react";
import "./State.css";

export default function Index() {
  // UseState Pertama
  const [name, setName] = useState({ namaDepan: "", namaBelakang: "" });

  // UseState Kedua
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  // UseState Ketiga
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* UseState Pertama  */}
      <div className="divPadding">
        <h1>useState Nama</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Nama Depan"
              value={name.namaDepan}
              onChange={(e) => setName({ ...name, namaDepan: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              value={name.namaBelakang}
              onChange={(e) =>
                setName({ ...name, namaBelakang: e.target.value })
              }
            />
          </div>
          <h2>Nama depanmu adalah {name.namaDepan}.</h2>
          <h2>Nama belakangmu adalah {name.namaBelakang}.</h2>
          <h4>{JSON.stringify(name)}</h4>
        </form>
      </div>

      {/* UseState Kedua */}
      <div className="divPadding">
        <h1>useState Tambah Angka</h1>
        <button className="Button" onClick={addItem}>
          Add a number
        </button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>

      {/* UseState Ketiga */}
      <div className="divPadding">
        <h1>useState Counter</h1>
        <button className="Button" onClick={() => setCount(count + 1)}>
          Count {count}
        </button>
      </div>
    </div>
  );
}
