import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import MenuSubsection from './MenuSubsection';

const MenuSection = ({ title, subtitle, items, width, subsections, orientation }) => (
    <div className="tile is-parent is-justify-content-center">
      <article className={`tile is-child box has-text-centered`}>
        <h1
          id={title}
          className="title">
          {title}
        </h1>
        <div className="subtitle">{subtitle}</div>
        <div className="content">
          {items &&
            items.map((item) => (
              <div key={v4()}>
                <div className="is-flex is-flex-direction-row is-justify-content-center">
                  <p className="is-size-5 mb-0">{item.name}</p>
                  <p className="pl-1 is-size-5">{item.price}</p>
                </div>
                <p className="pl-1 is-size-8">{item.description}</p>
              </div>
            ))}
          {subsections &&
            <div className={`is-flex pt-5 ${orientation === 'vertical' ? 'is-flex-direction-column' : 'is-flex-direction-row'}`}>
              {subsections.map((subsection) => (
                <MenuSubsection { ...subsection } />
              ))}
            </div>
          }
        </div>
      </article>
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
