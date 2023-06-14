import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items, subsections }) => (
  <div className="tile is-child">
    <p className="title">{title}</p>
    <div>
      {items &&
        items.map((item) => (
          <div
            key={v4()}
            className="is-primary">
            <MenuItem {...item} />
          </div>
        ))}
      {subsections &&
        subsections.map((section) => (
          <div
            className="tile is-child box"
            key={v4()}>
            <MenuSection
              title={section.title}
              items={section.items}
            />
          </div>
        ))}
    </div>
  </div>
);

MenuSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string
    })
  )
};

export default MenuSection;
