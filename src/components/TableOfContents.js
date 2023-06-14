import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

const TableOfContents = ({ items }) => {
  let url = items.map(function (i) {
    return i['url'].substring(1);
  });
  // const idList = getIds(items);
  // const activeId = useActiveId(idList);

  // function getIds(items) {
  //     return items.reduce((acc, item) => {
  //         if (item.url) {
  //             // url has a # as first character, remove it to get the raw CSS-id
  //             acc.push(item.url.slice(1));
  //         }
  //         if (item.items) {
  //             acc.push(...getIds(item.items));
  //         }
  //         return acc;
  //     }, []);
  // }

  // function useActiveId(itemIds) {
  //     const [activeId, setActiveId] = useState(`test`);
  //     useEffect(() => {
  //         const observer = new IntersectionObserver(
  //             (entries) => {
  //                 entries.forEach((entry) => {
  //                     if (entry.isIntersecting) {
  //                         setActiveId(entry.target.id);
  //                     }
  //                 });
  //             },
  //             { rootMargin: `0% 0% -80% 0%` }
  //         );
  //         itemIds.forEach((id) => {
  //             observer.observe(document.getElementById(id));
  //         });
  //         return () => {
  //             itemIds.forEach((id) => {
  //                 observer.unobserve(document.getElementById(id));
  //             });
  //         };
  //     }, [itemIds]);
  //     return activeId;
  // }

  return (
    <div
      className="tile"
      style={{ position: 'fixed', top: '25vh', right: '2vw' }}>
      {/* <details open>
            <summary>Table of Contents</summary>
            <ol>
                {items.map((item) => {
                    return (
                        <li key={item.url}>
                            <a
                                href={item.url}
                                style={{
                                    color:
                                        activeId === item.url.slice(1)
                                            ? 'tomato'
                                            : 'green',
                                }}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ol>
            </details> */}
      <Scrollspy
        items={url}
        currentClassName="is-current"
        className="toc-list">
        {items.map((p) => (
          <li
            key={p.url}
            style={{ cursor: 'pointer' }}>
            <a href={p.url}>{p.title}</a>
          </li>
        ))}
      </Scrollspy>
    </div>
  );
};

TableOfContents.propTypes = {};

export default TableOfContents;
