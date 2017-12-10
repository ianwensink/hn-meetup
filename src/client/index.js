/* eslint-disable global-require */
import { site } from 'hn-react';

site.initialize({ url: `${window.location.protocol}//${window.location.host}` });
site.hydrate(window.HnSite);
window.site = site;

require('../index');
