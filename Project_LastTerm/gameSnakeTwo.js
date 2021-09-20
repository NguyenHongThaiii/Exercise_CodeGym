class Game {
    constructor() {
        this.canvas =null;
        this.context=null;
        this.init();
    }
    init() {
        this.canvas=document.createElement('canvas');
        this.context= this.canvas.getContext('2d');
        this.canvas.width =400;
        this.canvas.height=400;
        document.body.appendChild(this.canvas);
    }
}
var game = new Game();
