import React, { useState, useEffect } from "react";
import { get } from "../../api";
import { MenuItem, Search } from "../index";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getItems(search) {
      const data = await get(
        `http://localhost:8080/api/items/?search=${search}`
      );
      if (data?.items) setItems(data?.items);
    }
    getItems(search);
  }, [search]);

  return (
    <div className="col-4">
      <Search value={search} setSearch={setSearch} />
      <ul className="item-picker">
        {items.map((item) => (
          <MenuItem item={item} key={item.id} removeable={false} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
