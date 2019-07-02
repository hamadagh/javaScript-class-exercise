function Pokemon (name, health, magic){
    
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];


        this.learnAttackSkill= function (attack) {
            this.skills.push(attack);
            console.log(this.skills);
        }
        this.showStatus = function (){
            console.log(`status: name: ${this.name}, health: ${this.health}, magic: ${this.magic}`);
        }
    }
    this.attack = function (attackIndex, enemy){
        if(this.magic < this.skills[attackIndex].magic) {
            console.log(`Ǹot enough magic, cannot attack, Too bad !!`);
            return;
        }else if(this.skills[attackIndex].damage > enemy.health) {
            console.log(`${this.name} just launched ${this.skilss[attackIndex]} successfully. ${enemy.name}`);
        }
    }

function AttackSkill(attack, damage, magic){
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }


    let pikachu = new Pokemon("pikachu", 30, 50);
    let lightning = new AttackSkill("lightning", 10, 10);

    pikachu.learnAttackSkill(lightning);