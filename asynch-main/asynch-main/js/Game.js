class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){
            gameState=data.val()
        })
    }

    update(state){
        database.ref("/").update({
        gameState:state
       })

    }
    
    async start(){
        if(gameState===0){
            player=new Player();
            var playercountref=await database.ref("playerCount").once("value")
            if(playercountref.exists()){
                playerCount=playercountref.val()
                player.getCount();

            }
            form=new Form();
            form.display();

        }
    }

    play(){
        form.hide()
        text("game start",120,100)
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            var dp=130
            for(var plr in allPlayers){
                dp=dp+20
                text(allPlayers[plr].name+ ":"+ allPlayers[plr].distance,120,dp)
            }
            
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update()
        }
    }
}