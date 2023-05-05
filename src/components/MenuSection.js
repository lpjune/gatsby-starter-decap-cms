import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import MenuItem from './MenuItem'

const MenuSection = ({ title, items }) => (
  <div className="tile is-child box">
    <p className="title">{title}</p>
    <div>
    {items.map((item) => (
      <div key={v4()} className="is-primary">
        <MenuItem {...item} />
      </div>
    ))}
    </div>
  </div>
);

MenuSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.string
      })
    )
};

export default MenuSection;