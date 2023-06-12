import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import { v4 } from "uuid";
import TableOfContents from "../components/TableOfContents";
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
  const snacks = menu_sections.find(x => x.title === 'Snacks');

  const frenchFries = menu_sections.find(x => x.title === 'French Fries');
  const ffSeasoning = frenchFries.subsections.find(x => x.title === 'Seasoning')
  const ffSauce = frenchFries.subsections.find(x => x.title === 'Sauce')
  const ffProtein = frenchFries.subsections.find(x => x.title === 'Protein')

  const salads = menu_sections.find(x => x.title === 'Salads');
  const sProtein = salads.subsections.find(x => x.title === 'Salad Proteins');

  const sandwiches = menu_sections.find(x => x.title === 'Sandwiches');
  const sides = sandwiches.subsections.find(x => x.title === 'Sides');

  const pizzas = menu_sections.find(x => x.title === 'Pizzas');

  const byop = menu_sections.find(x => x.title === 'BYOP');

  const tocItems = [
    {
      "url": "#snacks",
      "title": "Snacks"
    },
    {
      "url": "#french-fries",
      "title": "French Fries"
    }
  ]

  console.log(menu_sections)

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      {/* <section className="section"> */}
      <TableOfContents items={tocItems}></TableOfContents>
        <div className="container section">
            <div className="tile is-ancestor is-justify-content-center">
              <div className="tile is-parent is-justify-content-center">
                <article className="tile is-child box is-4 has-text-centered">
                  <h1 id="snacks" className="title">{snacks.title}</h1>
                  <div className="content">
                  {snacks.items && snacks.items.map((item) => (
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
            <div className="tile is-ancestor is-align-items-center is-vertical has-text-centered">
              <div className="tile box is-3 is-justify-content-center is-vertical">
                <h1 id="french-fries" className="title">{frenchFries.title}</h1>
                <p className="subtitle">{frenchFries.base_price}</p>
              </div>
              <div className="tile is-10 is-justify-content-center">
              <div className="tile is-parent is-4">
                <article className="tile is-child box">
                  <p className="title">{ffSeasoning.title}</p>
                  <div className="content">
                  {ffSeasoning.items && ffSeasoning.items.map((item) => (
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
              <div className="tile is-parent is-4">
                <article className="tile is-child box">
                  <p className="title">{ffSauce.title}</p>
                  <div className="content">
                  {ffSauce.items && ffSauce.items.map((item) => (
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
              <div className="tile is-parent is-4">
                <article className="tile is-child box">
                  <p className="title">{ffProtein.title}</p>
                  <div className="content">
                  {ffProtein.items && ffProtein.items.map((item) => (
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

            <div className="tile is-ancestor ">
              <div className="tile is-vertical ">
                <div className="tile is-justify-content-center has-text-centered">
                  <div className="tile is-parent is-3">
                    <article className="tile is-child box">
                      <h1 id="salads-and-sandwiches" className="title">{salads.title}</h1>
                      <div className="content">
                      {salads.items && salads.items.map((item) => (
                          <div className="is-flex is-flex-direction-column pb-2" key={v4()}>
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
                  <div className="tile is-parent is-vertical is-3">
                    <div className="tile is-child">
                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title">{sProtein.title}</p>
                          <div className="content">
                          {sProtein.items && sProtein.items.map((item) => (
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
                        <article className="tile is-child box">
                          <p className="title">{sides.title}</p>
                          <div className="content">
                          {sides.items && sides.items.map((item) => (
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
                  <div className="tile is-parent is-3">
                    <article className="tile is-child box">
                      <p className="title">{sandwiches.title}</p>
                      <div className="content">
                      {sandwiches.items && sandwiches.items.map((item) => (
                          <div className="is-flex is-flex-direction-column pb-2" key={v4()}>
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

            <div className="tile is-ancestor is-justify-content-center has-text-centered">
              <div className="tile is-parent is-10">
                  <article className="tile is-child box">
                    <p className="title">{pizzas.title}</p>
                    <div className="content">
                    {pizzas.items && pizzas.items.map((item) => (
                        <div className="is-flex is-flex-direction-column pb-2" key={v4()}>
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

            <div className="tile is-ancestor is-align-items-center is-vertical has-text-centered">
              <p className="title tile box is-3 is-justify-content-center">BYOP</p>
              <div className="tile is-9 is-justify-content-center">
              <div className="tile is-parent is-3">
                <article className="tile is-child box">
                  <p className="title">Sauce</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Cheese</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Meats</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Veggies</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
              </div>
            </div>

            <div className="tile is-ancestor is-justify-content-center has-text-centered">
              <div className="tile is-parent is-7">
                <article className="tile is-child box">
                  <p className="title">Kids Stuff</p>
                  <p className="subtitle">With an image</p>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-3">
                <article className="tile is-child box">
                  <p className="title">Garlic Knots</p>
                  <p className="subtitle">Top box</p>
                </article>
                <article className="tile is-child box">
                  <p className="title">Something Sweet</p>
                  <p className="subtitle">Bottom box</p>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor is-justify-content-center has-text-centered">
              <div className="tile is-parent is-10">
                  <article className="tile is-child box">
                    <p className="title">Cocktails</p>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                  </article>
              </div>
            </div>

            <div className="tile is-ancestor is-justify-content-center has-text-centered">
              <div className="tile is-parent is-10">
                  <article className="tile is-child box">
                    <p className="title">Wine & Beer</p>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                  </article>
              </div>
            </div>

            <div className="tile is-ancestor is-justify-content-center has-text-centered">
              <div className="tile is-parent is-9">
                  <article className="tile is-child box">
                    <p className="title">N/A Beverages</p>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                  </article>
              </div>
            </div>

            <div className="tile is-ancestor is-align-items-center is-vertical has-text-centered">
              <p className="title tile box is-3 is-justify-content-center">Wines by the Bottle</p>
              <div className="tile is-justify-content-center">
              <div className="tile is-parent is-2">
                <article className="tile is-child box">
                  <p className="title">Bubbles</p>
                  <p className="subtitle">What is up?</p>
                </article>
              </div>
              <div className="tile is-parent is-2">
                <article className="tile is-child box">
                  <p className="title">White</p>
                  <p className="subtitle">Bar</p>
                </article>
              </div>
              <div className="tile is-parent is-2">
                <article className="tile is-child box">
                  <p className="title">Red</p>
                  <p className="subtitle">With some content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
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
      }),
    }),
  }),
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
              price2
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
