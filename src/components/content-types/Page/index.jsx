import React from 'react';
import PropTypes from 'prop-types';

const Page = () => (
  <section>PAGE!</section>
);

Page.propTypes = {
  page: PropTypes.shape().isRequired,
};

export default Page;

/**
 * TODO: 2. try rendering the page title
 */

/**
 * TODO: 3. render the paragraphs that are in field_content
 * A Drupal paragraph is much like a component. A back-ender defines the fields,
 * afterwards this paragraph can be created by a content manager. These paragraphs are often used to provide
 * content managers with the flexibility to add as much paragraphs as they want, in the exact order as they want.
 * This means, that unlike a normal page - where you know which fields exist - that in React, you don't know which
 * paragraphs are used and in which order. Since this content technique is used a lot at Burst, we created two
 * helper components that accept a (list of) paragraph(s) from the json and a mapper (just like we created during exercise 1) and
 * returns a (list of) paragraph component(s).
 * 1) First, determine if you actually need a paragraph helper component. Ask yourself: 'is the component I need
 *    going to change dynamically?'. This means that for a page.title or for a reference that is always the same type,
 *    you won't need it.
 * 2) If you do need it, determine whether you need the Paragraphs or the Paragraph helper. Needless to say, this depends
 *    on how many paragraphs you are going to render. Is the field in the json an array? Use the Paragraphs, otherwise,
 *    The Paragraph helper is a better fit.
 * 3) Import the Paragraph(s) helper from hn-react
 * 4) Create a mapper (just like we did during exercise 1) specifically for this Paragraphs field. The mapping's can be
 *    found the same way as for the content type. Go to the json, find the paragraph object, check the __hn property.
 *    Your result should be something like paragraph__body. In Drupal the back-ender creates a Paragraph field, and selects
 *    which paragraphs are available. Any missing paragraphs in the mapper, won't throw an error. They just won't be rendered.
 * 5) Render the Paragraph(s) component and pass on the mapper, the json and the page
 */
