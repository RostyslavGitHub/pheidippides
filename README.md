# Pheidippides: Email framework

Pheidippides is a framework for HTML emails that introduces JavaScript functionality. <br />
This feature helps in designing complicated email flows.

## Functionality
For a new project, you need to download the repository. <br /><br />
There are several files: <br />

<ul>
<li>HTMLEmail.js is for your markup.</li>
<li>Styles.js is for your global styles.</li>
<li>preprocess.js updates index.html from the input files.</li>
<li>index.html is the clean markup you recive.</li>
</ul>

As you can see, using the .js extension for markup allows you to leverage the advantages of its language. <br />
The possibilities are limited only by your needs. Personally, I use it for reusable templates, changing variables, improving markup using map and filter methods, and so on. <br /> <br />
 Here are good exemple of regular usage of Pheidippides:

```JavaScript
const HTMLEmail = () => {

  const [header] = ['Hello']

  const preheader = `
  <div style="font-size:0px;line-height:1px;mso-line-height-rule:exactly;display:none;max-width:0px;max-height:0px;opacity:0;overflow:hidden;mso-hide:all;">
    ${header}
&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;
</div>`

  const data = [
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Phidippides.jpg/1280px-Phidippides.jpg'},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Phidippides.jpg/1280px-Phidippides.jpg'},
    {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Phidippides.jpg/1280px-Phidippides.jpg'},
  ]

  const columns = data.map(column => `
  <td class="three-columns" style="font-size: 0;">
    <img src="${column.img}" alt="">
  </td>
  `).join('')

   return `
      <body>
        ${preheader}
        <table>
          <tr>
            ${columns}
          </tr>
        </table>
      </body>
   `
};

module.exports = HTMLEmail;

```

## Additional feature
For this feature I started Pheidippides in the first place.<br />
It adds necessary styles and attributes for some html tags:
  - `body: margin: 0;padding: 0;min-width: 100%;`<br />

  - `p: margin: 0;padding: 0;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;`<br />

  - `a: padding: 0;text-decoration: none;color: inherit;font-size: inherit;font-family: inherit;`<br />

  - `img: margin: 0;padding: 0;max-width: 100%;text-decoration: none;-ms-interpolation-mode: bicubic;border: 0;font-size: 0;line-height: 0;`<br />

  - `h1, h2, h3, h4, h5, h6: margin: 0;padding: 0;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;`<br />

  - `.two-columns and .three-columns: display: block;max-width: 100%;`<br />
    - Default styles for multi-column layouts .

