class Game{
    constructor(){

    }

    getState(){
        var gameStateref= database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })

    }

    update(State){
        database.ref("/").update({
            gameState: State
        })
    }

    async start (){
        if (gameState===0){
            player= new Player();
            var playerCountref= await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount= playerCountref.val()
                player.getCount();
            }
            form= new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("car1",cars1)
        car2=createSprite(300,200);
        car2.addImage("car2", cars2);
        car3=createSprite(500,200);
        car3.addImage("car3", cars3);
        car4= createSprite(700,200);
        car4.addImage("car4", cars4);
        cars=[car1,car2,car3,car4]
    }

    play(){
        form.hide();
        Player.getPlayerinfo();
        if (allplayers!== undefined){
            background("grey");
            image (track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index=0
            var x=200;
            var y;
            for (var plr in allplayers){
             index=index+1;
           x=x+200;
           y=displayHeight-allplayers[plr].distance-100;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if (index===player.index){
                if (cars[index-1].y<-3400){
                    gameState=2
                }
                cars[index-1].shapeColor="red";
                camera.position.x= displayWidth/2;
                camera.position.y= cars[index-1].y;
            }
        }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
            player.updateName();
        }

        //if (player.distance>displayHeight*5-100){
          //  gameState=2;
        //}
        drawSprites();
    }

    end(){
      console.log("Game Ended")

    }

}



