/* eslint-disable prefer-template, max-len */

const getDeferScript = src => (src ? `
  <script defer src="${src}"></script>
` : '');

const getDeferStyle = cssBundle => cssBundle ? `
  <link rel="stylesheet" href="${cssBundle}" media="none" onload="if(media!='all')media='all'" />
  <noscript><link rel="stylesheet" type="text/css" href="${cssBundle}" /></noscript>
` : '';

export const head = vo => `
  <!DOCTYPE html>
  <html lang="nl">
    ${`
      <head>
      </head>
    `}
`;

export const main = vo => `
  <body><section id="root">${vo.root ? vo.root : ''}</section>
`;

export const footer = vo => `
    ${getDeferScript(vo.manifestJSBundle)}
    ${getDeferScript(vo.vendorJSBundle)}
    ${getDeferScript(vo.mainJSBundle)}
    <script>window.HnSite = ${vo.HnSite};</script>
    ${getDeferStyle(vo.mainCSSBundle)}
  </body>
  </html>
`;
