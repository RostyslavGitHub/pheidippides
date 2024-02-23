const Styles = () => {

    return `
      #nullstyle{}
      
      body {
          margin: 0;
          padding: 0
        }
    
        a[x-apple-data-detectors=true] {
          color: inherit !important;
          text-decoration: none !important
        }
    
        .bottom {
          box-sizing: content-box !important
        }

      @media screen and (min-width:600px) {
        .header_btn {
          max-width: 100% !important;
          padding-top: 14px !important;
          padding-bottom: 14px !important;
        }
  
        .p-6-2 {
          padding: 14px 9px !important
        }
  
        .w-120 {
          min-width: 135px !important;
          max-width: none !important;
          width: auto !important;
        }
  
        .footer-conteiner {
          display: table !important;
          max-width: 520px !important;
          width: 90% !important
        }
  
        .footer-line {
          max-width: 520px !important;
          padding-top: 10px !important;
        }
  
        .h1 {
          font-size: 40px !important;
          line-height: 1.175 !important;
        }
  
        .p0_40 {
          padding-left: 40px !important;
          padding-right: 40px !important;
          max-width: 100% !important;
        }
  
        .top {
          display: table-cell !important;
          width: 320px !important;
          border-bottom-left-radius: 15px !important;
          border-top-left-radius: 15px !important;
          border-top-right-radius: 0 !important;
          text-align: left !important;
          vertical-align: middle !important;
        }
  
        .bottom {
          display: table-cell !important;
          width: 180px !important;
          border-bottom-left-radius: 0 !important;
          border-top-right-radius: 15px !important;
          box-sizing: content-box !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          vertical-align: middle !important;
        }
  
        .game_item {
          text-align: left !important;
        }
  
        .game_item_img {
          padding-bottom: 0 !important;
          display: table-cell !important;
          vertical-align: top !important;
          width: 250px !important;
        }
  
        .game_item_text {
          padding-bottom: 0 !important;
          display: table-cell !important;
          vertical-align: top !important;
          padding-left: 20px !important;
          text-align: left !important;
        }
      }

    `;
  };
  
  module.exports = Styles;