function Appple(weight) {
    this.weight=weight;
    this.decrease= function() {
    }
    this.isEmpty=function() {
        if(this.weight>0){
            return true;
        }
        else return false
    }
    this.getWeight=function() {
        return this.weight;
    }
}
function Human(name,gender,weightHM) {
    this.name=name;
    this.gender=gender;
    this.weightHM=weightHM;
    this.say = ()=> {
        prompt("");
    }
    this.setName = (name)=> {
        return this.name=name;
    }
    this.getName = ()=> {
        return this.name;
    }
    this.setWeight = (weightHM)=> {
        return this.weightHM=weightHM;
    }
    this.getWeight = ()=> {
        return this.weightHM;
    }
    this.eat = (apple) => {
        if(apple.isEmpty()){
            this.weightHM+=1;
            apple.weight-=1;
        }  else alert("Hết Táo");
    }
    this.checkApple = (apple)=> {
        alert("Weight apple is:"+apple.getWeight());
    }
    this.getGender = () =>{
        if(gender==true) {
            alert("Nam");
        } else alert("Nữ");
    }
}
var app = new Appple(10);
var human = new Human("Thái",true,60);

human.eat(app);
console.log(app.getWeight());
console.log(human.getWeight());
