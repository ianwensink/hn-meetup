/**
 * TODO: 1. add the correct mapping for the content page
 * Steps to find a mapping:
 * 1) Visit the json for the page (/hn?path=your-path-here)
 * 2) Search for a value you inserted in Drupal, i.e. the page title
 * 3) Find the __hn property on the object from step 2
 * 4) The entity type + __ + entity bundle will form the mapping for your component.
 *    Example: __hn.entity.type='node' & __hn.entity.bundle='content' means the mapping is node__content
 * 5) Add the mapping (node__content) as a key below, and have the corresponding component as its value
 * 6) Tip: if you want to implement bundle splitting (i.e. have a js files per content type), check the cheat sheet for this
 */

export default {

};
