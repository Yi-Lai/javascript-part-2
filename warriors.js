function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.random * 100;
    this.fight = function fight() {
        console.log(this.name + " rushes in the arena with their " + this.weapon);
    };
    this.faceoff = function(opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + " is the winner")
        }
        else {
            console.log(opponent.name + " is the best")
        }
    }
}


var warrior1 = new Warrior("Bob", "M");
var warrior2 = new Warrior("Johnny", "F");
var warrior3 = new Warrior("Chris", "M");
var warrior4 = new Warrior("Steve", "F");
var warrior5 = new Warrior("Jason", "M");

warrior1.fight();
warrior2.fight();
warrior3.fight();
warrior4.fight();
warrior5.fight();

warrior2.faceoff(warrior3);
