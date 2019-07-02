class Pokemon {
    constructor(name, health, magic, skills){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
        this.magicUsed = magic;
    }
showStatus(){
    console.log(`Health:${this.health}, Magic:${magic} `);
}
attack(magic, damage, name){
let random = Math.floor(Math.random()*this.skills.length[i]);
if (this.magic > skills.magicAmount){
  
}else {
    console.log(`You dont have enough magic to attack`);
}

}

learnAttackSkill(newSkills){
this.skills.push(newSkills);
}
}
class AttackSkill{
 constructor(attackName, attackDamage, magicAmount){
this.attackName = attackName;
this.attackDamage = attackDamage;
this.magicAmount = magicAmount;
 }   
}

let pikachu = new Pokemon("Pikachu", 300, 200)
let thunderAttack = new AttackSkill("thunder attack", 90, 60);
pikachu.learnAttackSkill(thunderAttack);
let quickAttack = new AttackSkill("quick attack", 20, 10);
pikachu.learnAttackSkill(quickAttack);
let tailWhip = new AttackSkill("tail whip", 50, 20);
pikachu.learnAttackSkill(tailWhip);


let bulbasaur = new Pokemon("Bulbasaur", 300, 200);
let vineWhip = new AttackSkill("vine whip", 70, 45);
bulbasaur.learnAttackSkill(vineWhip);
let growl = new AttackSkill("growl", 50, 20);
bulbasaur.learnAttackSkill(growl);
let poisonPowder = new AttackSkill("poison powder", 70, 70);
bulbasaur.learnAttackSkill(poisonPowder);

console.log(pikachu);
console.log(bulbasaur);





