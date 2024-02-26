const Styles = () => {

  const nullstyle = `
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
  `

    return `      
      ${nullstyle}
      @media screen and (min-width:600px){
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
      }
  `;
  };
  
  module.exports = Styles;