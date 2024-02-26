const fs = require('fs');
const cheerio = require('cheerio');
let HTMLEmail = require('./HTMLEmail');
let Styles = require('./Styles');

function preprocessHTML(inputHTML) {
  let modifiedHtml = inputHTML;
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
      'font-family': 'inherit',
      'font-size': 'inherit',
      'font-style': 'inherit',
      'font-weight': 'inherit'
    },
    'a': {
      'padding': '0',
      'text-decoration': 'none',
      'color': 'inherit',
      'font-size': 'inherit',
      'font-family': 'inherit'
    },
    'img': {
      'margin': '0',
      'padding': '0',
      'max-width': '100%',
      'text-decoration': 'none',
      '-ms-interpolation-mode': 'bicubic',
      'border': '0',
      'font-size': '0',
      'line-height': '0',
    },
    'h1, h2, h3, h4, h5, h6': {
      'margin': '0',
      'padding': '0',
      'color': 'inherit',
      'font-family': 'inherit',
      'font-size': 'inherit',
      'font-style': 'inherit',
      'font-weight': 'inherit'
    },
    '.two-columns': {
      'display': 'block',
      'max-width': '100%'
    },
    '.three-columns': {
      'display': 'block',
      'max-width': '100%'
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

  const defaultAttributes = {
    'table': {
      'border': '0',
      'cellspacing': '0',
      'cellpadding': '0',
      'role': 'presentation'
    },
    'a': {
      'target': '_blank'
    },
    'img': {
      'border': '0'
    }
  };

  Object.keys(defaultAttributes).forEach(selector => {
    $(selector).each(function() {
      const $this = $(this);
      const existingAttributes = $this.attr();
      const newAttributes = defaultAttributes[selector];

      // Check if each attribute in newAttributes exists in the element
      // If not, add it
      Object.keys(newAttributes).forEach(attr => {
        if (!(attr in existingAttributes)) {
          $this.attr(attr, newAttributes[attr]);
        }
      });
    });
  });

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

    const modifiedHTML = preprocessHTML(inputHTML);

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

console.log('Watching for changes in HTMLEmail.js and Styles.js. Press Ctrl+C to exit.');
