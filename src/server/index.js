/* eslint-disable */
import React from 'react';
import express from 'express';
import compression from 'compression';
import path from 'path';
import cache from 'cache-control';
import proxy from 'http-proxy-middleware';
import { site } from 'hn-react';
import { main, footer } from './template';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const port = process.env.PORT || parseInt(KYT.SERVER_PORT, 10);
const app = express();
const baseUrl = process.env.CMS_BASE_URL || 'https://redactie.natuurmonumenten.nl';

// Add middleware

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Add caching to the app
app.use(cache({
  '/*.html': 0, // Do not cache the index.html since the js file names change
  '/*.js': 31536000,
  '/*.css': 31536000,
  '/*.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)': 31536000,
}));

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

// Proxy some Drupal files
app.use(proxy([
  '/sitemap.xml',
  '/hn',
  '/neverbounce',
  '/hn-webform-submission',
  '/postcode-api',
  '/salesforce-lookup',
  '/ztickets'
], {
  target: baseUrl,
  changeOrigin: true,
  logLevel: 'silent',
}));

app.get('/robots.txt', async (req, res) => {
  const url = 'https://' + req.get('host');
  res.type('text/plain');
  res.send(`# robots.txt\n\nUser-agent: *\nAllow: *\nSitemap: ${url}/sitemap.xml`);
});

/**
 * We wrap the React middleware inside a wrap function, so async error don't fail silently
 * but are shown on the page.
 *
 * @see https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
 *
 */
let wrap = fn => (...args) => fn(...args).catch(args[2])

// Setup server side routing.

app.get('*', wrap(async (req, res) => {
  res.type('text/html');

  res.write(main({}));

  res.flush();

  res.write(footer({
    manifestJSBundle: clientAssets['manifest.js'],
    mainJSBundle: clientAssets['main.js'],
    vendorJSBundle: clientAssets['vendor.js'],
    mainCSSBundle: clientAssets['main.css'],
    HnSite: JSON.stringify(site.dehydrate()),
  }));

  res.end();
}));

app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line
});
