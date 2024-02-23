const HTMLEmail = () => {

   const [button1, header1, image, text1,  gameLink1, gameImg1, gameTitle1, gameText1, gameLink2, gameImg2, gameTitle2, gameText2, gameLink3, gameImg3, gameTitle3, gameText3] = ['Играть', 
   '[FULL_NAME:%name%, н| Н]овинки уже ждут Вас на SuperGra!', 
   'https://thiscrm.co/upload/images/796b114c79345ead73323fbb69363e2a.png', 
   'Начинайте неделю с ярких впечатлений от&nbsp;новых игр:',
   'game/amatic/hot-fruits-wheel-3u/real',
   'https://thiscrm.co/upload/images/superGra/games_icons/Big%20Bass%20Floats%20my%20Boat%20%D0%B2%D1%96%D0%B4%20Pragmatic.png',
   'Hot Fruits Wheel',
   'В слоте от&nbsp;Amatic складывайте слово Bonus и переходите в бонусную игру, где количество FS и множитель определяет Bonus Wheel.',
   'game/amatic/hot-fruits-wheel-3u/real',
   'https://thiscrm.co/upload/images/superGra/games_icons/Big%20Bass%20Floats%20my%20Boat%20%D0%B2%D1%96%D0%B4%20Pragmatic.png',
   'Hot Fruits Wheel',
   'В слоте от&nbsp;Amatic складывайте слово Bonus и переходите в бонусную игру, где количество FS и множитель определяет Bonus Wheel.',
   'game/amatic/hot-fruits-wheel-3u/real',
   'https://thiscrm.co/upload/images/superGra/games_icons/Big%20Bass%20Floats%20my%20Boat%20%D0%B2%D1%96%D0%B4%20Pragmatic.png',
   'Hot Fruits Wheel',
   'В слоте от&nbsp;Amatic складывайте слово Bonus и переходите в бонусную игру, где количество FS и множитель определяет Bonus Wheel.',
   ];

   const promoHeader = `
   <div style="margin: 0 auto;min-width:300px;max-width:600px;width:100%;text-align:center;background-color:#002246;">
      <div style="max-width:520px;width:90%;margin:0 auto;padding-bottom:20px;padding-top: 20px;">
      <div style="display:table;width:100%;">
      <div style="display:table-cell;vertical-align:middle;text-align:left;padding-right:10px;"><a href="https://direct.supergra.email/Tg8x6F?project=sprgra&amp;sub_id_1=[TOKEN]&amp;utm_source=newsletter&amp;utm_campaign=[CAMPAIGN_UID]&amp;utm_medium=email&amp;utm_term=logo"><img align="middle" alt="" src="https://thiscrm.co/upload/images/superGra/default/logotype.png" style="text-decoration:none;border:0px none;display:block; max-width:155px; width:100%;" /></a></div>
      
      <div style="display:table-cell;vertical-align:middle;text-align:right;">
      <div class="w-120" style="display:inline-block;min-width: 120px;max-width: 120px;width: 120px; "><a class="p-6-2" href="https://direct.supergra.email/Tg8x6F?project=sprgra&amp;sub_id_1=[TOKEN]&amp;utm_source=newsletter&amp;utm_campaign=[CAMPAIGN_UID]&amp;utm_medium=email&amp;utm_term=logo" style="display:inline-block;padding:6px 10px;border:6px solid #DA2E71;border-radius:8px;font-family:'Roboto',Arial;font-weight:700;font-size:18px;line-height:1.1;text-align:center;color:#FFFFFF;text-decoration:none;box-sizing: border-box;">Играть с нами</a></div>
      </div>
      </div>
      </div>
      </div>
      
   `

   return `
      <body style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#FFFFFF;">
         <div itemscope="" itemtype="http://schema.org/Organization">
           <meta itemprop="logo" content="https://thiscrm.co/upload/images/superGra/NewSupergra.gif">
         </div>
         <div itemscope="" itemtype="http://schema.org/DiscountOffer">
           <meta itemprop="description" content="${button1}">
         </div>
         <div itemscope="" itemtype="http://schema.org/PromotionCard">
           <meta itemprop="image" content="https://thiscrm.co/upload/images/848e84bdc421b7de3b72c2d456f4d5a2.png">
         </div>
         <preheader>${header1}</preheader>
         <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;vertical-align:top;min-width:320px;border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#FFFFFF;width:100%;" valign="top" width="100%">
           <tbody>
             <tr>
               <td align="center">
                 <div style="width:100%;background-color:#002246;max-width: 600px;">
                   ${promoHeader}
                   <div style="padding-top:20px;padding-bottom:40px;background-color: #624BFF;">
                     <div class="p0_40" style="padding-bottom:15px;padding-left: 20px;padding-right: 20px;">
                       <h1 style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 28px; line-height: 1.175;color: #000000;font-weight: 700;text-align:center;" class="h1">${header1}</h1>
                     </div>
                     <div class="p0_40" style="padding-left:20px;padding-right:20px;">
                       <div style="padding-bottom: 25px;">
                         <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 14px; line-height: 1.285;color: #000000;font-weight: 500;text-align:center;">${text1}</p>
                       </div>
                       <div style="padding-bottom: 20px;" class="game_item">
                         <div class="game_item_img">
                           <a href="https://[CURRENT_DOMAIN]/auth-token?token=[TOKEN]&redirect_url=/${gameLink1}" target="_blank">
                             <img src="${gameImg1}" alt="" width="242" style="max-width: 100%;border: 4px solid #DA2E71; border-radius: 10px;text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; line-height: 0;display: block;">
                           </a>
                         </div>
                         <div class="game_item_text" style="max-width: 280px;">
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 28px; line-height: 1.18;color: #000000;font-weight: 700;padding-bottom: 10px;padding-top: 5px;">${gameTitle1}</p>
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 14px; line-height: 1.285;color: #000000;font-weight: 500;">${gameText1}</p>
                         </div>
                       </div>
                       <div style="padding-bottom: 20px;" class="game_item">
                         <div class="game_item_img">
                           <a href="https://[CURRENT_DOMAIN]/auth-token?token=[TOKEN]&redirect_url=/${gameLink2}" target="_blank">
                             <img src="${gameImg2}" alt="" width="242" style="max-width: 100%;border: 4px solid #DA2E71; border-radius: 10px;text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; line-height: 0;display: block;">
                           </a>
                         </div>
                         <div class="game_item_text" style="max-width: 280px;">
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 28px; line-height: 1.18;color: #000000;font-weight: 700;padding-bottom: 10px;padding-top: 5px;">${gameTitle2}</p>
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 14px; line-height: 1.285;color: #000000;font-weight: 500;">${gameText2}</p>
                         </div>
                       </div>
                       <div style="padding-bottom: 20px;" class="game_item">
                         <div class="game_item_img">
                           <a href="https://[CURRENT_DOMAIN]/auth-token?token=[TOKEN]&redirect_url=/${gameLink3}" target="_blank">
                             <img src="${gameImg3}" alt="" width="242" style="max-width: 100%;border: 4px solid #DA2E71; border-radius: 10px;text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; line-height: 0;display: block;">
                           </a>
                         </div>
                         <div class="game_item_text" style="max-width: 280px;">
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 28px; line-height: 1.18;color: #000000;font-weight: 700;padding-bottom: 10px;padding-top: 5px;">${gameTitle3}</p>
                           <p style="font-family: 'Roboto',Arial, sans-serif;margin:0;word-break: break-word;font-size: 14px; line-height: 1.285;color: #000000;font-weight: 500;">${gameText3}</p>
                         </div>
                       </div>
                       <div style="padding-top: 20px;">
                         <a href="https://[CURRENT_DOMAIN]/auth-token?token=[TOKEN]&redirect_url=/games/new_games" target="_blank" style="font-family:'Roboto', Arial, sans-serif;display:inline-block;padding-top: 14px;padding-right: 14px;padding-bottom: 14px;padding-left: 14px;min-width:120px;border:6px solid #DA2E71;border-radius:8px;font-weight:500;font-size:18px;line-height:1;text-align: center;color:#FFFFFF;text-decoration:none;">${button1}</a>
                       </div>
                     </div>
                   </div>
                   
                 </div>
               </td>
             </tr>
           </tbody>
         </table>
       </body>
   `
  };
  
  module.exports = HTMLEmail;
  
