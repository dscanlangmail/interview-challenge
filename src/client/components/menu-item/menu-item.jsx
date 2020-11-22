import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { selectItem, removeItem } from "../../store/actions";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="item"
      key={item.id}
      role="row"
      onClick={() => dispatch(selectItem(item))}
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
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    dietaries: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default MenuItem;
