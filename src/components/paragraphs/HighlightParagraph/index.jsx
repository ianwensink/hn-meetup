import React from 'react';
import PropTypes from 'prop-types';

const HighlightParagraphComponent = () => {
  return (
    <div></div>
  );
};

HighlightParagraphComponent.propTypes = {
  paragraph: PropTypes.shape().isRequired,
};

export default HighlightParagraphComponent;

/**
 * TODO: 4. Get an entity reference
 *
 * Print the name of the entity that is referenced in above component
 *
 * In the HN structure everything is tied together by UUID's. Every single thing in Drupal has such a unique ID's.
 * To prevent duplicate data from being sent, HN replaces all entity data with a reference to it. This means that when
 * a field actually references to another page, the page itself is not in the field. The field only contains a UUID
 * reference to the other page. The other page is sitting in the root of the json.
 *
 * To smoothen the use of references, the HN Site object has a helper method. This is a synchronous function that simply
 * receives a UUID, and returns the corresponding entity in the root of the json.
 *
 * To populate these UUID's by the actual reference, you should use the `site.getData()` method. This `site` object can
 * be imported from HN everywhere, and then used in your components.
 *
 * Something to keep in mind, is that these UUID's come in different forms. This sounds complicated, but merely means
 * you have to keep checking the json structure whenever working with a reference. There are three common use cases:
 * 1) A normal Drupal reference, this means that a property contains an object with a few properties, including the
 *    `target_uuid` property. This is the UUID you need.
 * 2) A UUID is directly present in a property, so without the extra object. This is often the case when the references
 *    were customly added by a back-ender.
 * 3) You receive an array of UUID's. Often used on overview pages and such like.
 *
 * Please keep in mind:
 * 1) The getData method is synchronous. You can it in higher order functions like .find(), .map(), .filter() directly
 * 2) The return value can always be null. Throwing in an invalid UUID, or a UUID of a reference that doesn't exist
 *    won't throw an error, but will return null.
 * 3) In Drupal, when an entity is deleted, the references aren't. This doesn't seem like YOUR problem, but it actually is.
 *    Whenever you use the site.getData method, bare in mind a few best practises:
 *    3a) Always check whether the field is not null, before using field.target_uuid
 *    3b) Always check the result of the getData, it can be null
 *    3c) When working with an array of references ([{target_uuid:},{target_uuid:})] always do a
 *        .filter(ref => ref.target_uuid) before using it.
 *    3d) When grabbing the first out of an array of references, don't do site.getData(field[0].target_uuid), but use
 *        field.find(ref => site.getData(ref.target_uuid)) instead.
 */
