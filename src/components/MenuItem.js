import * as React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ name, description, price }) => (
  <div>
    <div>{name}</div>
    {description && (<div>description</div>)}
    <div>{price}</div>
  </div>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.string.isRequired
};

export default MenuItem;
