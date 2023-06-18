import React from 'react';
import { Link } from 'react-scroll';

const TableOfContents = ({ items }) => {
  return (
    <div
      className="tile toc-list"
      style={{ position: 'fixed', top: '25vh', right: '2vw' }}>
      {items.map((item) => (
        <Link
          className="link"
          activeClass="is-current"
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }}>
          {item}
        </Link>
      ))}
    </div>
  );
};

TableOfContents.propTypes = {};

export default TableOfContents;
