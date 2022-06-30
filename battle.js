

const USShip = {

    hull: 20,
    Firepower: 5,
    Accuracy: .7,
    fullhp: true,
attack(target)
 {
    let ranshot = Math.random();
    if (ranshot < this.Accuracy){
        window('You got a hit');
        target.hull=target.hull - this.Firepower;
        console.log('enemy is down {target.hull}');
        if(target.hull <= 0){
            target.fullhp = false;
            console.log('enemy is down')
        }
    }
    else{
        console.log('missed!');
    }
 }
}
const Enemy = {
    hull: Math.random(3 || 6),
    firepower:Math.random(2 || 4),
    Accuracy: Math.random(.6 || .8),

attack (target){
    let ranshot = Math.random()
    if(ranshot < this.Accuracy){
        console.log('you got hit');
        target.hull = target.hull - this.firepower;
        console.log(' you have {target.hull} left');
        if(target.hull <= 0){
            target.fullhp = false;
console.log('Enemy shot you down, GAME OVER')
        }
    }
    else{console.log('attack failed sir')}
}
}
const battle = (USShip,Enemy) => {
    while(USShip.fullhp && Enemy.fullhp) {
        USShip.attack(Enemy);
        if(Enemy.fullhp){
            Enemy.attack(USShip);
        }
    }
}

