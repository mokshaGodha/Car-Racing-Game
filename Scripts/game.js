class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=db.ref("gameState");
        gameStateRef.on("value", function(data){
        gameState = data.val()
        })
    }

    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
           player=new Player();
           player.getCount();
           form=new Form();
           form.display();
        }
            car1=createSprite(displayWidth/2-300,100)
            car2=createSprite(displayWidth/2-100,100)
            car3=createSprite(displayWidth/2+100,100)
            car4=createSprite(displayWidth/2+300,100)
            cars=[car1,car2,car3,car4]
            car1.addImage("carI", Icar1 )
            car2.addImage("carI", Icar2 )
            car3.addImage("carI", Icar3 )
            car4.addImage("carI", Icar4 )
    }

    play() {
        form.greeting.hide();
        Player.getPlayerInfo();
        player.getPlayerAtEnd();
        
        var yPos = 200;
        var index=0;
        if(allPlayers !== undefined) {
            background(groundI);
            image(trackI, 0,-displayHeight*4, displayWidth,displayHeight*5)
            for(var plr in allPlayers) {
                yPos=displayHeight-50-allPlayers[plr].distance;
                cars[index].y=yPos;

                if(plr === "player" + player.index) {
                    fill("red");
                    ellipse(cars[index].x, cars[index].y, 80,80)
                    camera.position.y = cars[index].y
                 }
                 index += 1;
            }
            if(keyDown(UP_ARROW)){
                player.distance += 20;
                player.update();
            }
            if(player.distance>=4220){
                gameState=2;
                player.rank = playersAtEnd+1;
                player.updatePlayersAtEnd(player.rank);
                player.update();
            }

        }
        drawSprites()


    } 

    end(){
        if (textWritten===0){
            textWritten=1;
        fill("white");
        textSize(40);
        text("GAME OVER!!", displayWidth/2-50,displayHeight-player.distance-50);
        text("Congrats! your rank:"+ player.rank, displayWidth/2-50,displayHeight-player.distance-100 );
    }
   
    if(playersAtEnd===4 && (leaderboard===0)){
        leaderboard=1
        var yPosition=0;
        for(var plr in allPlayers ){
           text(allPlayers[plr].name +":"+ allPlayers[plr].rank,displayWidth/2-50, displayHeight-player.distance+200+yPosition );
           yPosition+=50;
       } 
    }
    
    }
}