class Form {
    constructor(){
        this.input = createInput()
        this.input.position(displayWidth/2,displayHeight/2)
        this.button= createButton("Start")
        this.button.position(displayWidth/2,displayHeight/2+100);
        this.greeting= createElement("h3")
        this.greeting.position(displayWidth/2,displayHeight/2); 
        this.reset=createButton("Reset")
        this.reset.position(displayWidth-100,50)

    }

    display(){
        var title= createElement("h1")
        title.html("Car Racing Game")
        title.position(displayWidth/2-100,100);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value()
            playerCount+=1
            player.updateCount(playerCount) 
            player.index = playerCount;
            player.update();
            this.greeting.html("Hi "+ player.name )
        })

        this.reset.mousePressed( 
            function(){
                game.updateState(0);
                player.updateCount(0);
                player.updatePlayersAtEnd(0);
                db.ref("players").remove();
                window.location.reload();
            }

        )
 }
}