class Remote {
    constructor(tv) {
        this.tv=tv;
        
    }
    changeChannel(channel) {
        this.tv.changeChannel(channel);
    }
    changeVolume(volume) {
        this.tv.changeChannel(volume);
    }
    turnOn_Off() {
        this.tv.turnOn_Off();
    }
}
class Tv {
    constructor(channelCurrent,volumeCurrent,status) {
        this.channelCurrent=channelCurrent;
        this.volumeCurrent=volumeCurrent;
        this.status=status;
    }
    changeChannel(channel) {
     if(this.status) {
    this.channelCurrent=channel;
    alert(this.channelCurrent);     
}
    }
    changeVolume(volume) {
        if(this.status){
            this.volumeCurrent+=volume;
        alert(this.volumeCurrent);
        }
    }
    turnOn_Off() {
        this.status=!this.status;
        if(this.status==true) {
            alert("Turning On");
        } else alert("Turning Off");
    }
}

let tv= new Tv("News",15,true);
let remote = new Remote(tv);
remote.changeChannel("CN");
remote.changeVolume(10);
remote.turnOn_Off();

