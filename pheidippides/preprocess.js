const fs = require('fs');
const cheerio = require('cheerio');
let HTMLEmail = require('./HTMLEmail');
let Styles = require('./Styles');

function replaceHTML(inputHTML) {
  return inputHTML
    .replace(/<preheader>\s*(.*?)\s*<\/preheader>/, '<div style="font-size:0px;line-height:1px;mso-line-height-rule:exactly;display:none;max-width:0px;max-height:0px;opacity:0;overflow:hidden;mso-hide:all;">$1 &nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>')
    .replace(/#nullstyle\s*{\s*(.*?)\s*}/gs, `
    img {
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%;
    }
    table {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-spacing: 0;
      mso-cellspacing: 0;
      mso-padding-alt: 0;
      width: 100%;
    }
    table td {
      padding: 0;
      font-family: sans-serif;
      font-size: inherit;
      vertical-align: top;
    }
    #outlook a, a {
      padding: 0;
      text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    h1, h2, h3, p {
      Margin: 0;
      padding: 0;
      font-size: inherit;
      font-weight: normal;
    }
    $1`)
    .replace(/{#columns}/g, `
      .two-columns{
          display: table-cell !important;
          max-width: 300px !important;
          width: 300px !important;
      }
      .three-columns{
          display: table-cell !important;
          max-width: 200px !important;
          width: 200px !important;
      }`);
}

function preprocessHTML(inputHTML, inputStyles) {
  let modifiedHtml = replaceHTML(inputHTML);
  const $ = cheerio.load(modifiedHtml);

  const styles = {
    'body': {
      'margin': '0',
      'padding': '0',
      'min-width': '100%',
    },
    'p': {
      'margin': '0',
      'padding': '0',
      'color': 'inherit',
      'font-size': 'inherit',
      'font-style': 'inherit',
      'font-weight': 'inherit'
    },
    'a': {
      'padding': '0',
      'text-decoration': 'none',
      'color': 'inherit',
      'font-size': 'inherit'
    },
    'img': {
      'margin': '0',
      'padding': '0',
      'width': '100%',
      'text-decoration': 'none',
      '-ms-interpolation-mode': 'bicubic',
      'height': 'auto',
      'border': '0',
      'line-height': '0',
      'display': 'block'
    },
    'h1, h2, h3, h4, h5, h6': {
      'margin': '0',
      'padding': '0',
      'color': 'inherit',
      'font-size': 'inherit',
      'font-style': 'inherit',
      'font-weight': 'inherit'
    }
  };

  Object.keys(styles).forEach(selector => {
    $(selector).each(function() {
      const $this = $(this);
      const existingStyles = $this.attr('style') || '';
      const mergedStyles = Object.assign({}, styles[selector], cssToObject(existingStyles));
      $this.attr('style', stylesToCss(mergedStyles));
    });
  });

  $('table').attr('border', '0').attr('cellspacing', '0').attr('cellpadding', '0').attr('role', 'presentation');
  $('a').attr('target', '_blank');
  $('img').attr('border', '0');
  $('td.two-columns').css('display', 'block').css('max-width', '100%');

  return $.html();
}

function cssToObject(css) {
  var obj = {};
  css.split(';').forEach(function(property) {
    var keyValue = property.split(':');
    if (keyValue.length === 2) {
      obj[keyValue[0].trim()] = keyValue[1].trim();
    }
  });
  return obj;
}

function stylesToCss(styles) {
  return Object.entries(styles)
    .map(([prop, value]) => `${prop}: ${value}`)
    .join(';');
}

const outputFilePath = 'index.html';

function writeIndexHTML() {
  try {
    delete require.cache[require.resolve('./HTMLEmail')];
    HTMLEmail = require('./HTMLEmail');

    delete require.cache[require.resolve('./Styles')];
    Styles = require('./Styles');

    const inputHTMLData = HTMLEmail();
    const inputStyles = Styles();
    const inputHTML = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <style id="style">${inputStyles}</style>

          </head>
          ${inputHTMLData} 
      </html>
    `;

    const modifiedHTML = preprocessHTML(inputHTML, inputStyles);

    fs.writeFileSync(outputFilePath, modifiedHTML); 
    console.log('File has been written successfully!');
  } catch (error) {
    console.error('An error occurred during HTML preprocessing:', error);
  }
}

writeIndexHTML();

fs.watchFile('./HTMLEmail.js', (curr, prev) => {
  console.log('HTMLEmail.js has changed. Rendering index.html...');
  writeIndexHTML();
});

fs.watchFile('./Styles.js', (curr, prev) => {
  console.log('Styles.js has changed. Rendering index.html...');
  writeIndexHTML();
});

console.log('Watching for changes in HTMLEmail.js. Press Ctrl+C to exit.');
