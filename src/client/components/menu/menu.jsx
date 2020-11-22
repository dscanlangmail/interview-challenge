import React, { useState, useEffect } from "react";
import { get } from "../../api";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const data = await get(`http://localhost:8080/api/items`);
      if (items.length === 0) setItems(data?.items || []);
    }
    getItems();
  }, [items]);

  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {items.map((item) => (
          <li
            className="item"
            key={item.id}
            onClick={() => !removeable && dispatch(selectItem(item))}
            role="row"
          >
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map((dietary) => (
                <span className="dietary" key={dietary}>
                  {dietary}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
