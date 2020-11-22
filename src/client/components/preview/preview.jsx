import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/selectors";
import { removeItem } from "../../store/actions";

const Preview = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {items &&
          items.map((item) => (
            <li className="item" key={item.id}>
              <h2>{item.name}</h2>
              <p>
                {item.dietaries.map((dietary) => (
                  <span className="dietary" key={dietary}>
                    {dietary}
                  </span>
                ))}
              </p>
              <button
                className="remove-item"
                onClick={() => dispatch(removeItem(item))}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Preview;
