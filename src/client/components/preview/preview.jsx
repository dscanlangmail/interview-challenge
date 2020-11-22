import React from "react";
import { useSelector } from "react-redux";
import { MenuItem } from "../index";
import { getItems } from "../../store/selectors";

const Preview = () => {
  const items = useSelector(getItems);
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {items &&
          items.map((item) => (
            <MenuItem item={item} removeable={true} key={item.id} />
          ))}
      </ul>
    </div>
  );
};

export default Preview;
