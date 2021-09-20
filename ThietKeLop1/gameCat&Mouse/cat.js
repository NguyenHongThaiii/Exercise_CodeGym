class Rat {
constructor(name,weight,speed,status){
    this.name=name;
    this.weight=weight;
    this.speed=speed;
    this.status=status;
}
    getSpeak() {
        alert("Chit Chit");
    }
}
class Cat {
    constructor(name,weight,speech) {
        this.name=name;
        this.weight=weight;
        this.speech=speech;
    }
    getSpeak() {
        alert("Meow Meow");
    }
    cactchRat(rat) {
        return this.speech>rat.speed;
}
    eatRat(rat) {
      if(rat.status==true) {
          if(this.cactchRat(rat)){
              this.weight++;
              rat.weight--;
          alert("eating rat");
          }  else alert("rat is fast i can't catch him");
      }  else alert("rat dead & can't eating");
    }
}

var rat = new Rat("mickey",0.5,10,true);

var cat = new Cat("Tom",5,5);

cat.eatRat(rat);