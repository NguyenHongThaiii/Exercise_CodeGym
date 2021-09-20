debugger
class Rectangle {
    constructor(x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
  
}
   function createRect(a) {
     a = new Rectangle(a.x,a.y,a.width,a.height);
        c.beginPath();
        c.fillStyle='#fa4b2a';
        c.fillRect(a.x,a.y,a.width,a.height);   
       }
function  moveCar() {
    
    c.clearRect(gameContext.x,gameContext.y,gameContext.width,gameContext.height);
    if(gameContext.y<10) {
        localY=-localY;
    }
    if((gameContext.y+gameContext.width)>500) {
        localY=-localY;
    }
    gameContext.y+=localY;
      createRect(gameContext);
     setInterval(moveCar,10);
   }
   function moveCar2() {
    c.clearRect(gameContext2.x,gameContext2.y,gameContext2.width,gameContext2.height);
    if(gameContext2.x<0||(gameContext2.x+gameContext2.width)>700) {
        localX=-localX;
    }
    gameContext2.x+=localX;
    createRect(gameContext2);
    setInterval(moveCar2,10);
   }
   let localX=1;
   let localY=-1;
var gameContext = new Rectangle(20,20,150,100);
var gameContext2 = new Rectangle(150,20,150,100);
var c = document.getElementById("game").getContext("2d");
moveCar();
moveCar2();

 

     











//     createRect(rect) {
//         rect=document.getElementById("myCanvas").getContext("2d");
//         rect.beginPath();
//         rect.fillStyle='#fa4b2a';
//         rect.fillRect(rect.x,rect.y,rect.width,rect.height);    
//        }
//        moveCarStraight(rect) {
//         var localY=1;
//         rect.clearRect(rect.x,rect.y,rect.width,rect.height);
//         if(rect.y<0) {
//             localY=-localY;
//         }
//         if((rect.y+rect.y2)>600) {
//             localY=-localY;
//         }
//         rect.y+=localY;
//         this.createRect(rect);
//        } 
//        moveCarTurn(rect) {
//         var localX=1;
//         if(rect.x<0) {
//             localX=-localX;
//         }
//         if((rect.x+rect.width)>800){
//             localX=-localX;
//         }
//         x+=localX;
//         this.createRect(rect);
//        }
// }
// var rect = new Rectangle(20,20,150,100);
// setInterval(moveCarStraight(rect),10);
