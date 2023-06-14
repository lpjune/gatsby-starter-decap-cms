import React from 'react';
import PropTypes from 'prop-types';
import { MenuPageTemplate } from '../../templates/menu-page';

const MenuPagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  // const entryTestimonials = entry.getIn(['data', 'testimonials'])
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  const entryMenuSections = entry.getIn(['data', 'main', 'menu_sections']);
  const menuSections = entryMenuSections ? entryMenuSections.toJS() : [];

  return (
    <MenuPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      menu_sections={menuSections}
      // description: entry.getIn(['data', 'main', 'description']),
      // image1: {
      //   image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
      //   alt: entry.getIn(['data', 'main', 'image1', 'alt']),
      // },
      // image2: {
      //   image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
      //   alt: entry.getIn(['data', 'main', 'image2', 'alt']),
      // },
      // image3: {
      //   image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
      //   alt: entry.getIn(['data', 'main', 'image3', 'alt']),
      // },
      // }}
      // fullImage={getAsset(entry.getIn(['data', 'full_image']))}
      // testimonials={testimonials}
      // pricing={{
      //   heading: entry.getIn(['data', 'pricing', 'heading']),
      //   description: entry.getIn(['data', 'pricing', 'description']),
      //   plans: pricingPlans,
      // }}
    />
  );
};

MenuPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default MenuPagePreview;
