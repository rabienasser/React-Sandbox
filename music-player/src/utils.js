import { v4 as uuidv4 } from "uuid";
function chillHop() {
   return [
      {
         name: "Beaver Creek",
         cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
         artist: "Aso, Middle School, Aviino",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
         color: ["#205950", "#2ab3bf"],
         id: uuidv4(),
         active: true,
      },
      {
         name: "Aqueduct",
         cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
         artist: "Leavv",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9921",
         color: ["#332346", "#E5CBCB"],
         id: uuidv4(),
         active: false,
      },
      {
         name: "Magenta Forever",
         cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
         artist: "Aviino",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=10458",
         color: ["#F278B6", "#266F78"],
         id: uuidv4(),
         active: false,
      },
      {
         name: "On The Moon",
         cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
         artist: "SwuM",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=15237",
         color: ["#313A36", "#AC6C2F"],
         id: uuidv4(),
         active: false,
      },
      {
         name: "Reflection",
         cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
         artist: "Swørn",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
         color: ["#CD607D", "#c94043"],
         id: uuidv4(),
         active: false,
      },
      {
         name: "Little Spirit",
         cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
         artist: "Delayde",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=8547",
         color: ["#49489B", "#F0AAE1"],
         id: uuidv4(),
         active: false,
      },
      //ADD MORE HERE
   ];
}

export default chillHop;
