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
