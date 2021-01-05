class Form{
constructor(){
    this.input=createInput("name")
    this.button=createButton("play")
    this.greeting=createElement("h1")

}
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
    var title=createElement("h1")
    title.html("car racing game")
    title.position(430,80)

    
    
   this. input.position(420,250)
   this. button.position(480,300)

   this. button.mousePressed(()=>{
       this. input.hide();
       this. button.hide();
        player. name=this.input.value();
        playerCount++;
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
       this. greeting.html("hello "+player.name)
       this. greeting.position(470,160)


    })

    
}
}