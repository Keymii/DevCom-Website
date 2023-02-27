import imgDev from '../../assets/avatars/DevDesai.jpg'
import imgShruti from '../../assets/avatars/Shruti Singh - Shruti.jpg'
import imgPalash from '../../assets/avatars/Palash Mittal.jpg'
import imgHarsh from '../../assets/avatars/Harsh Jha.png'
import imgAdithya from '../../assets/avatars/Adithya Krishna K.jpg'
import imgAshwin from '../../assets/avatars/Ashwin Ram.jpg'
import imgAyush from '../../assets/avatars/ayush kapoor.jpg'
import img8 from '../../assets/avatars/DevDesai.jpg'
import img9 from '../../assets/avatars/DevDesai.jpg'
import img10 from '../../assets/avatars/DevDesai.jpg'
import img11 from '../../assets/avatars/DevDesai.jpg'
import img12 from '../../assets/avatars/DevDesai.jpg'
import img13 from '../../assets/avatars/DevDesai.jpg'
import img14 from '../../assets/avatars/DevDesai.jpg'
import img15 from '../../assets/avatars/DevDesai.jpg'

// async function jsonChecker(){
//   const response_ocs = await fetch('http://localhost:7000/OCs');
//   const ocs = await response_ocs.json();
//   const response_pls = await fetch('http://localhost:7000/PLs');
//   const pls = await response_pls.json();
//   return [ocs, pls];
// }
var db;
export default  db = {
  "OCs":[
      {
          "id":1,
          "name": "Dev Moxaj Desai",
          "img":imgDev,
          "fb": "https://m.facebook.com/dev.desai.77920?ref=bookmarks",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":2,
          "name": "Shruti Singh",
          "img": imgShruti,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      }
  ],
  "PL1":[
      {
          "id":3,
          "name": "Palash Mittal",
          "img": imgPalash,
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
      {
          "id":4,
          "name": "harsh Jha",
          "img": imgHarsh,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":5,
          "name": "Adithya Krishna",
          "img": imgAdithya,
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      },
    ],
    "PL2":[
      {
          "id":6,
          "name": "Ashwin Ramchandran",
          "img": imgAshwin,
          "fb": "",
          "insta": "",
          "linkedIn": ""
                  
      },
      {
          "id":7,
          "name": "Ayush Kapoor",
          "img": imgAyush,
          "fb": "",
          "insta": "",
          "linkedIn": "" 
      }
  ]
}