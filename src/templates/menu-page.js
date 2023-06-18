import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import TableOfContents from '../components/TableOfContents';
import MenuSection from '../components/MenuSection';

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
  const [toc, setToc] = useState([]);
  const heroImage = getImage(image) || image;
  // const fullWidthImage = getImage(fullImage) || fullImage;

  useEffect(() => {
    setToc(menu_sections.map((section) => section.title));
  }, [menu_sections]);

  return (
    <div className="content">
      <FullWidthImage
        img={heroImage}
        title={title}
      />
      <TableOfContents items={toc}></TableOfContents>
      <div
        className="container section"
        style={{ zIndex: -1 }}>
        <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-evenly">
          {menu_sections &&
            menu_sections.map((section) => (
              <div
                key={section.title}
                className={`tile is-ancestor is-justify-content-center ${
                  section.width === '50%' ? 'is-6' : 'is-12'
                }`}>
                <MenuSection {...section} />
              </div>
            ))}
        </div>
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
            width
            orientation
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
