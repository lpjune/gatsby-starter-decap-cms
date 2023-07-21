import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const MenuSubsection = ({ title, items }) => (
  <article
    key={v4()}
    className="is-child">
    <h4 className="title">{title}</h4>
    <div className="content" style={{paddingRight: '20px'}}>
      {items &&
        items.map((item) => (
          <div key={v4()}>
            <div className="is-flex is-flex-direction-row is-justify-content-left">
              <p className="is-size-5 mb-0">{item.name}</p>
              <p className="pl-1 is-size-5">{item.price}</p>
            </div>
          </div>
        ))}
    </div>
  </article>
);

MenuSubsection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string
    })
  )
};

export default MenuSubsection;
