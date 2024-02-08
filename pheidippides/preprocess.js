const fs = require('fs');
const cheerio = require('cheerio');

const inputFilePath = 'input.html';
const outputFilePath = 'index.html';

function replaceHTML(inputHTML) {
  return inputHTML
    .replace(/<preheader>(.*?)<\/preheader>/, '<div style="font-size:0px;line-height:1px;mso-line-height-rule:exactly;display:none;max-width:0px;max-height:0px;opacity:0;overflow:hidden;mso-hide:all;">$1 &nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>');
}

function preprocessHTML(inputHTML) {
  let modifiedHtml = replaceHTML(inputHTML);
  const $ = cheerio.load(modifiedHtml);

  // <html>
  $('html').attr('xmlns:v', 'urn:schemas-microsoft-com:vml');
  $('html').attr('xmlns:o', 'urn:schemas-microsoft-com:office:office');

  // <head>
  const head = $('head');

  head.prepend('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
  head.prepend('<meta http-equiv="X-UA-Compatible" content="IE=edge">');

  // <body>
  $('body').each(function() {
    const $this = $(this);
    const existingStyles = $this.attr('style') || '';
    const newStyles = {
        'margin': '0',
        'padding': '0',
        'min-width': '100%'
    };
    const mergedStyles = mergeStyles(newStyles, cssToObject(existingStyles));
    $this.attr('style', stylesToCss(mergedStyles));
  });

  // <table>
  $('table').attr('border', '0').attr('cellspacing', '0').attr('cellpadding', '0').attr('role', 'presentation');

  // <p>
  $('p').each(function() {
    const $this = $(this);
    const existingStyles = $this.attr('style') || '';
    const newStyles = {
        'margin': '0',
        'padding': '0',
        'color': 'inherit',
        'font-size': 'inherit',
        'font-style': 'inherit',
        'font-weight': 'inherit'
    };
    const mergedStyles = mergeStyles(newStyles, cssToObject(existingStyles));
    $this.attr('style', stylesToCss(mergedStyles));
  });

  // <a>
  $('a').each(function() {
    const $this = $(this);
    const existingStyles = $this.attr('style') || '';
    const newStyles = {
        'padding': '0',
        'text-decoration': 'none',
        'color': 'inherit',
        'font-size': 'inherit'
    };
    const mergedStyles = mergeStyles(newStyles, cssToObject(existingStyles));
    $this.attr('style', stylesToCss(mergedStyles)).attr('target', '_blank');
  });

  // <img>
  $('img').each(function() {
    const $this = $(this);
    const existingStyles = $this.attr('style') || '';
    const newStyles = {
        'margin': '0',
        'padding': '0',
        'width': '100%',
        'text-decoration': 'none',
        '-ms-interpolation-mode': 'bicubic',
        'height': 'auto',
        'border': '0',
        'line-height': '0',
        'display': 'block'
    };
    const mergedStyles = mergeStyles(newStyles, cssToObject(existingStyles));
    $this.attr('style', stylesToCss(mergedStyles)).attr('border', '0');
  });

  // <h1-6>
  $('h1, h2, h3, h4, h5, h6').each(function() {
    const $this = $(this);
    const existingStyles = $this.attr('style') || '';
    const newStyles = {
        'margin': '0',
        'padding': '0',
        'color': 'inherit',
        'font-size': 'inherit',
        'font-style': 'inherit',
        'font-weight': 'inherit'
    };
    const mergedStyles = mergeStyles(newStyles, cssToObject(existingStyles));
    $this.attr('style', stylesToCss(mergedStyles));
  });

  return $.html();
}

function mergeStyles(newStyles, existingStyles) {
  return Object.assign({}, newStyles, existingStyles);
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



function replaceDoctype(inputHTML) {
  return inputHTML.replace(
      /<!DOCTYPE html[^>]*>/i, 
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
  );
}

function preprocessAndSave(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, 'utf-8', (err, data) => {
      if (err) {
          console.error('Error reading input file:', err);
          return;
      }
      
      let modifiedData = preprocessHTML(data); 
      modifiedData = replaceDoctype(modifiedData); 

      fs.writeFile(outputFilePath, modifiedData, (err) => {
          if (err) {
              console.error('Error writing output file:', err);
          }
      });
  });
}

preprocessAndSave(inputFilePath, outputFilePath);

console.log('Watching for changes in the input file. Press Ctrl+C to exit.');
fs.watch(inputFilePath, (eventType, filename) => {
  if (eventType === 'change') {
    preprocessAndSave(inputFilePath, outputFilePath);
  }
});
