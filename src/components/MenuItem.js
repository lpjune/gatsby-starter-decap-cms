import * as React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ name, description, price }) => (
  <div>
    {name}
    {description}
    {price}
  </div>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.string.isRequired
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
};

export default MenuItem;
