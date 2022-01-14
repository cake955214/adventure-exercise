function Monster(name,hp,attack,shield){ //創造物件
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.shield = shield;
}
function RandomSort(inputArray){ // 隨機排序
    inputArray.sort(()=> Math.random()-0.5);
}
function Attack(poke,boss){ // 戰鬥過程
    console.log(poke.name + "上場");
    while(poke.hp > 0 && boss.hp > 0 ){
        boss.hp = boss.hp - poke.attack;
        console.log("對敵方進行攻擊，敵方所剩血量 " + boss.hp + "，護盾 " + boss.shield)
        if(poke.shield > 0 ){
            poke.shield = poke.shield - boss.attack;
            if(poke.shield < 0 ){
                poke.hp = poke.hp + poke.shield;
                poke.shield = 0;
            }
        console.log("敵方襲擊猛烈，" + poke.name + "所剩血量 " + poke.hp + "，護盾 " + poke.shield);
        } else if(poke.shield == 0 ){
            poke.hp = poke.hp - boss.attack;
            if(poke.hp >0 ){
                console.log("敵方襲擊猛烈，" + poke.name + "所剩血量 " + poke.hp + "，護盾 " + poke.shield);
            } else if(poke.hp <=0 ){
                console.log(poke.name + "戰死");
            } else {
                console.log(boss.name + "戰鬥勝利！")
            }
        }   
    }
}
function win_lose(){
    if(Goblins.hp<=0 && salamander.hp<=0 && wolf.hp<=0){
        console.log("戰鬥失敗！");
    }else if(boss.hp<=0){
        console.log("戰鬥勝利！");
    }
}