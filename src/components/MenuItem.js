import * as React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ name, description, price }) => (
  <div className="mb-5">
    <div className="is-flex is-flex-direction-row">
      <p className="is-size-5 mb-0">{name}</p>
      <p className="pl-1 is-size-5">{price}</p>
    </div>
    {description && <p className="pl-1 subtitle is-6">{description}</p>}
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string
};

export default MenuItem;
