class Player {
    constructor() {
        this.name = "";
        this.distance = 0;
        this.index = 0;
        this.rank=0;
    }

    getCount() {
        var playerCountRef=db.ref("playerCount");
        playerCountRef.on("value", function(data){
        playerCount = data.val()
        })
    }

    updateCount(count){
    db.ref("/").update({
        playerCount:count
    })
    }

    getPlayerAtEnd(){
        var playersAtEndRef=db.ref("PlayersAtEnd");
        playersAtEndRef.on("value", function(data){
            playersAtEnd = data.val()
        })
    }

    updatePlayersAtEnd(number){
        db.ref("/").update({
            PlayersAtEnd:number
        })
    }

    update() {
        var node = db.ref("players/player" + this.index);
        node.set({
            name : this.name,
            distance : this.distance,
            rank : this.rank
        });

    }
    static getPlayerInfo(){
        var playersRef=db.ref("players")
        playersRef.on("value", function(data){
            allPlayers=data.val();
        })
    }
}