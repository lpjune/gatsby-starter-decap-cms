import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import MenuSection from "../components/MenuSection";
import { v4 } from "uuid";


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
  console.log(menu_sections)

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {/* {heading} */}
                </h3>
                {/* <p>{description}</p> */}
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="tile is-ancestor">
                  {menu_sections.map((section) => (
                    <div className="tile is-parent" key={v4()}>
                        <MenuSection title={section.title} items={section.items} subsections={section.subsections} />
                    </div>
                  ))}
                </div>
                {/* <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} /> */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {/* {pricing.heading} */}
                </h2>
                {/* <p className="is-size-5">{pricing.description}</p> */}
                {/* <Pricing data={pricing.plans} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
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
        menu_sections: PropTypes.any
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
