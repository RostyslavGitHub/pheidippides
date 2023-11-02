const fs = require('fs');

const inputFilePath = 'input.html';
const outputFilePath = 'index.html';

function preprocessHTML(inputHTML) {
  let modifiedHTML = inputHTML;

  modifiedHTML = modifiedHTML
    .replace('<!DOCTYPE html>', '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">')

    .replace('<html', '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"')

    .replace('<meta charset="UTF-8">', '<meta http-equiv="Content-Type" content="text/html charset=utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE-edge" />')
    
    .replace(/\/\* <nullstyle> \*\/|<!-- <nullstyle> -->|<nullstyle>/g, `
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
      a:hover{
          text-decoration: none;
      }
      h1, h2, h3, p{
        Margin: 0;
        padding: 0;
        font-size: inherit;
        font-weight: normal;
      }
    `)
    
    .replace(/\/\* <adpcolumns> \*\/|<!-- <adpcolumns> -->|<adpcolumns>/g, `
      .two-columns{
          display: table-cell !important;
          max-width: 300px !important;
          width: 300px !important;
      }
      .three-columns{
          display: table-cell !important;
          max-width: 200px !important;
          width: 200px !important;
      }
    `)
    .replace(/class="two-columns">/g, 'class="two-columns" style="display: block; max-width: 100%;">')

    .replace(/class="two-columns" style="(.*?)"/g, 'class="two-columns" style="display: block; max-width: 100%;$1"')

    .replace(/<preheader>(.*?)<\/preheader>/, '<div style="font-size: 0px;color: #000000;line-height: 1px;mso-line-height-rule: exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide: all;">$1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>')

    .replace(/<table/g, '<table border="0" cellspacing="0" cellpadding="0" role="presentation"')

    .replace(/<img/g, '<img border="0"')

    .replace(/<a/g, '<a target="_blank"')

    

    modifiedHTML = modifyElementStyles(modifiedHTML, 'button', '');
   
    modifiedHTML = modifyElementStyles(modifiedHTML, 'body', 'Margin:0;padding:0;min-width:100%;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'p', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h1', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h2', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h3', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h4', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h5', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'h6', 'Margin:0;padding:0;color: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'img', 'width:100%;text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; line-height: 0;display: block;');

    modifiedHTML = modifyElementStyles(modifiedHTML, 'a', 'padding: 0;text-decoration: none;color: inherit; font-size: inherit;')

    modifiedHTML = modifiedHTML.replace(/<button\s+href="(.*?)"\s+style="(.*?)">(.*?)<\/button>/g, '<table border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: auto; height: auto;"><tr><td><a href="$1" target="_blank" style="display: inline-block;padding: 0;text-decoration: none;color: inherit; font-size: inherit;$2">$3</a></td></tr></table>');




  return modifiedHTML;
}

function modifyElementStyles(inputHTML, elementName, newStyles) {
  const regex = new RegExp(`<${elementName}(.*?)>`, 'g');
  const modifiedHTML = inputHTML.replace(regex, (match, elementAttributes) => {
    if (elementAttributes.includes('style=')) {
      const styleMatch = elementAttributes.match(/style="([^"]*)"/);
      let existingStyle = styleMatch ? styleMatch[1] : '';
      const combinedStyle = `style="${newStyles} ${existingStyle}"`;
      return `<${elementName} ${elementAttributes.replace(/style="[^"]*"/, combinedStyle)}>`;
    } else {
      return `<${elementName}${elementAttributes} style="${newStyles}">`;
    }
  });

  return modifiedHTML;
}


function preprocessAndSave(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading input file:', err);
      return;
    }

    const modifiedData = preprocessHTML(data);

    fs.writeFile(outputFilePath, modifiedData, (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log('HTML file preprocessed successfully and saved as output.html');
      }
    });
  });
}

preprocessAndSave(inputFilePath, outputFilePath);

fs.watch(inputFilePath, (eventType, filename) => {
  if (eventType === 'change') {
    console.log('Input file has been modified. Preprocessing and saving...');
    preprocessAndSave(inputFilePath, outputFilePath);
  }
});

console.log('Watching for changes in the input file. Press Ctrl+C to exit.');
