import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import { v4 } from 'uuid';
import TableOfContents from '../components/TableOfContents';
// import MenuItem from '../components/MenuItem';

// eslint-disable-next-line
export const MenuPageTemplate = ({
  image,
  title,
  menu_sections
  // heading,
  // description,
  // intro,
  // main,
  // testimonials,
  // fullImage,
  // pricing,
}) => {
  const heroImage = getImage(image) || image;
  // const fullWidthImage = getImage(fullImage) || fullImage;
  const snacks = menu_sections.find((x) => x.title === 'Snacks');

  const frenchFries = menu_sections.find(
    (x) => x.title === 'French Fry Baskets'
  );

  const salads = menu_sections.find((x) => x.title === 'Salads');
  const sProtein = salads.subsections.find((x) => x.title === 'Salad Proteins');

  const sandwiches = menu_sections.find((x) => x.title === 'Sandwiches');
  const sides = sandwiches.subsections.find((x) => x.title === 'Sides');

  const pizzas = menu_sections.find((x) => x.title === 'Pizzas');

  const byop = menu_sections.find((x) => x.title === 'BYOP');

  const kidsStuff = menu_sections.find((x) => x.title === 'Kids Stuff');

  const garlicKnots = menu_sections.find((x) => x.title === 'Garlic Knots');

  const somethingSweet = menu_sections.find(
    (x) => x.title === 'Something Sweet'
  );

  const cocktails = menu_sections.find((x) => x.title === 'Cocktails');

  const wineBeer = menu_sections.find((x) => x.title === 'Wine & Beer');

  const naBev = menu_sections.find((x) => x.title === 'N/A Beverages');

  const buckets = menu_sections.find((x) => x.title === 'Buckets');

  const winesBottle = menu_sections.find(
    (x) => x.title === 'Wines by the Bottle'
  );

  const tocItems = [
    {
      url: '#snacks',
      title: 'Snacks'
    },
    {
      url: '#french-fries',
      title: 'French Fries'
    },
    {
      url: '#salads-and-sandwiches',
      title: 'Salads & Sandwiches'
    },
    {
      url: '#pizzas',
      title: 'Pizzas'
    },
    {
      url: '#kids-stuff',
      title: 'Kids Stuff'
    },
    {
      url: '#kids-stuff',
      title: 'Something Sweet'
    },
    {
      url: '#cocktails',
      title: 'Beverages'
    },
    {
      url: '#bottles',
      title: 'Bottles'
    }
  ];

  console.log(menu_sections);

  return (
    <div className="content">
      <FullWidthImage
        img={heroImage}
        title={title}
      />
      <TableOfContents items={tocItems}></TableOfContents>
      <div
        className="container section"
        style={{ zIndex: -1 }}>
        <div className="tile is-ancestor is-justify-content-center">
          <div className="tile is-parent is-justify-content-center">
            <article className="tile is-child box is-4 has-text-centered">
              <h1
                id="snacks"
                className="title">
                {snacks.title}
              </h1>
              <div className="content">
                {snacks.items &&
                  snacks.items.map((item) => (
                    <div key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        <p className="pl-1 is-size-5">{item.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>
        <div className="tile box is-ancestor is-align-items-center is-vertical has-text-centered">
          <div className="tile is-3 is-justify-content-center is-vertical">
            <h1
              id="french-fries"
              className="title">
              {frenchFries.title}
            </h1>
          </div>
          <div className="tile is-10 is-justify-content-center">
            {frenchFries.subsections.map((subsection) => (
              <div className="tile is-parent is-4">
                <article className="tile is-child">
                  <h4 className="title">{subsection.title}</h4>
                  <div className="content">
                    {subsection.items &&
                      subsection.items.map((item) => (
                        <div key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            <p className="pl-1 is-size-5">{item.price}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="tile box is-ancestor ">
          <div className="tile is-vertical ">
            <div className="tile is-justify-content-center has-text-centered">
              <div className="tile is-parent is-4">
                <article className="tile is-child">
                  <h1
                    id="salads-and-sandwiches"
                    className="title">
                    {salads.title}
                  </h1>
                  <div className="content">
                    {salads.items &&
                      salads.items.map((item) => (
                        <div
                          className="is-flex is-flex-direction-column pb-2"
                          key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            <p className="pl-1 is-size-5">{item.price}</p>
                          </div>
                          <p className="pl-1 is-size-8">{item.description}</p>
                        </div>
                      ))}
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-4">
                <div className="tile is-child">
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <p className="title">{sProtein.title}</p>
                      <div className="content">
                        {sProtein.items &&
                          sProtein.items.map((item) => (
                            <div key={v4()}>
                              <div className="is-flex is-flex-direction-row is-justify-content-center">
                                <p className="is-size-5 mb-0">{item.name}</p>
                                <p className="pl-1 is-size-5">{item.price}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </article>
                    <div className="tile is-child is-4"></div>
                  </div>
                </div>
                <div className="tile is-child">
                  <div className="tile is-parent">
                    <div className="tile is-child is-4"></div>
                    <article className="tile is-child">
                      <p className="title">{sides.title}</p>
                      <div className="content">
                        {sides.items &&
                          sides.items.map((item) => (
                            <div key={v4()}>
                              <div className="is-flex is-flex-direction-row is-justify-content-center">
                                <p className="is-size-5 mb-0">{item.name}</p>
                                <p className="pl-1 is-size-5">{item.price}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="tile is-parent is-4">
                <article className="tile is-child">
                  <p className="title">{sandwiches.title}</p>
                  <div className="content">
                    {sandwiches.items &&
                      sandwiches.items.map((item) => (
                        <div
                          className="is-flex is-flex-direction-column pb-2"
                          key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            <p className="pl-1 is-size-5">{item.price}</p>
                          </div>
                          <p className="pl-1 is-size-8">{item.description}</p>
                        </div>
                      ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="tile box is-ancestor is-justify-content-center has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child">
              <h1
                id="pizzas"
                className="title">
                {pizzas.title}
              </h1>
              <div className="subtitle">{pizzas.subtitle}</div>
              <div className="content">
                {pizzas.items &&
                  pizzas.items.map((item) => (
                    <div
                      className="is-flex is-flex-direction-column pb-2"
                      key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        <p className="pl-1 is-size-5">{item.price}</p>
                      </div>
                      <p className="pl-1 is-size-8">{item.description}</p>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>

        <div className="tile box is-ancestor is-align-items-center is-vertical has-text-centered">
          <div className="tile is-3 is-justify-content-center">
            <h1
              id="byop"
              className="title">
              {byop.title}
            </h1>
          </div>
          <div className="tile is-10 is-justify-content-space-evenly">
            {byop.subsections.map((subsection) => (
              <div className="tile is-parent is-2">
                <article className="tile is-child">
                  <h4 className="title">{subsection.title}</h4>
                  <div className="content">
                    {subsection.items &&
                      subsection.items.map((item) => (
                        <div key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            <p className="pl-1 is-size-5">{item.price}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="tile box is-ancestor is-justify-content-center has-text-centered">
          <div className="tile is-parent is-4">
            <article className="tile is-child">
              <h1
                id="kids-stuff"
                className="title">
                {kidsStuff.title}
              </h1>
              <p className="subtitle">
                {kidsStuff.subtitle}{' '}
                {kidsStuff.base_price && kidsStuff.base_price}
              </p>
              <div className="content">
                {kidsStuff.items &&
                  kidsStuff.items.map((item) => (
                    <div key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        {item.price ?? (
                          <p className="pl-1 is-size-5">{item.price}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </article>
          </div>

          <div className="tile is-parent is-vertical is-4">
            <article className="tile is-child">
              <h1 className="title">{garlicKnots.title}</h1>
              <p className="subtitle">{garlicKnots.subtitle}</p>
              <div className="content">
                {garlicKnots.items &&
                  garlicKnots.items.map((item) => (
                    <div key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        {item.price ?? (
                          <p className="pl-1 is-size-5">{item.price}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </article>

            <article className="tile is-child">
              <h1 className="title">{somethingSweet.title}</h1>
              <p className="subtitle">{somethingSweet.subtitle}</p>
              <div className="content">
                {somethingSweet.items &&
                  somethingSweet.items.map((item) => (
                    <div key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        {item.price ?? (
                          <p className="pl-1 is-size-5">{item.price}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>

        <div className="tile box is-ancestor is-justify-content-center has-text-centered">
          <div className="tile is-parent is-10">
            <article className="tile is-child">
              <h1
                id="cocktails"
                className="title">
                {cocktails.title}
              </h1>
              <p className="subtitle">{cocktails.subtitle}</p>
              <div className="content">
                {cocktails.items &&
                  cocktails.items.map((item) => (
                    <div
                      className="is-flex is-flex-direction-column pb-2"
                      key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        <p className="pl-1 is-size-5">{item.price}</p>
                      </div>
                      <p className="pl-1 is-size-8">{item.description}</p>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>

        <div className="tile box is-ancestor is-justify-content-center has-text-centered">
          <div className="tile is-parent is-10">
            <article className="tile is-child">
              <p className="title">{wineBeer.title}</p>
              <p className="subtitle">{wineBeer.subtitle}</p>
              <div className="content is-flex is-flex-direction-row is-justify-content-space-evenly">
                {wineBeer.subsections &&
                  wineBeer.subsections.map((subsection) => (
                    <div className="is-flex is-flex-direction-column">
                      {subsection.items &&
                        subsection.items.map((item) => (
                          <div key={v4()}>
                            <div className="is-flex is-flex-direction-row is-justify-content-left">
                              <p className="is-size-5 mb-0">{item.name}</p>
                              {item.price ?? (
                                <p className="pl-1 is-size-5">{item.price}</p>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>

        <div className="tile box is-horizontal is-ancestor is-justify-content-center has-text-centered">
          <div className="tile is-parent is-8">
            <article className="tile is-child">
              <p className="title">{naBev.title}</p>
              <div className="content is-flex is-flex-wrap-wrap">
                {naBev.subsections.map((subsection) => (
                  <div className="tile is-flex is-6 is-flex-direction-column">
                    <p className="subtitle">{subsection.title}</p>
                    {subsection.items &&
                      subsection.items.map((item) => (
                        <div key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            {item.price ?? (
                              <p className="pl-1 is-size-5">{item.price}</p>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="tile is-parent is-4">
            <article className="tile is-child">
              <p className="title">{buckets.title}</p>
              <p className="subtitle">{buckets.subtitle}</p>
              <div className="content">
                {buckets.items &&
                  buckets.items.map((item) => (
                    <div key={v4()}>
                      <div className="is-flex is-flex-direction-row is-justify-content-center">
                        <p className="is-size-5 mb-0">{item.name}</p>
                        {item.price ?? (
                          <p className="pl-1 is-size-5">{item.price}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </article>
          </div>
        </div>

        <div className="tile box is-ancestor is-align-items-center is-vertical has-text-centered">
          <div className="tile is-3 is-justify-content-center">
            <h1
              id="bottles"
              className="title">
              {winesBottle.title}
            </h1>
          </div>
          <div className="tile is-flex is-flex-direction-column is-align-items-center">
            {winesBottle.subsections.map((subsection) => (
              <div
                className="tile is-parent"
                key={v4()}>
                <article className="tile is-child">
                  {subsection.title && (
                    <h4 className="title">{subsection.title}</h4>
                  )}
                  <div className="content">
                    {subsection.items &&
                      subsection.items.map((item) => (
                        <div key={v4()}>
                          <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <p className="is-size-5 mb-0">{item.name}</p>
                            {item.price ?? (
                              <p className="pl-1 is-size-5">{item.price}</p>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        {/* <Testimonials testimonials={testimonials} /> */}
        {/* </section> */}
        {/* <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} /> */}
        {/* <section className="section section--gradient"> */}
        {/* <div className="container"> */}
        {/* <div className="section"> */}
        {/* <div className="columns"> */}
        {/* <div className="column is-10 is-offset-1"> */}
        {/* <h2 className="has-text-weight-semibold is-size-2"> */}
        {/* {pricing.heading} */}
        {/* </h2> */}
        {/* <p className="is-size-5">{pricing.description}</p> */}
        {/* <Pricing data={pricing.plans} /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
      </div>
    </div>
  );
};

MenuPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  menu_section: PropTypes.any
};

const MenuPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <MenuPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        menu_sections={frontmatter.main.menu_sections}
        // heading={frontmatter.heading}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
        // main={frontmatter.main}
        // testimonials={frontmatter.testimonials}
        // fullImage={frontmatter.full_image}
        // pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

MenuPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.any,
        menu_sections: PropTypes.array
      })
    })
  })
};

export default MenuPage;

export const pageQuery = graphql`
  query MenuPage {
    markdownRemark(frontmatter: { templateKey: { eq: "menu-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        main {
          menu_sections {
            title
            subtitle
            base_price
            items {
              name
              price
              description
            }
            subsections {
              title
              base_price
              items {
                name
                price
              }
            }
          }
        }
      }
    }
  }
`;