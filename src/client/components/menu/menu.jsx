import React, { useState, useEffect } from "react";
import { get } from "../../api";
import { MenuItem } from "../index";

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
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
