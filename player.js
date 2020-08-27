class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.Name=null;

    }
   getCount(){
    var playerCountref= database.ref ("playerCount");
    playerCountref.on("value", (data)=>{
        playerCount=data.val();
    })
   }

   updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
   }

   updateName(){
       var playerIndex= "players/player"+this.index;
       database.ref(playerIndex).set({
           Name: this.Name,
           distance:this.distance
       })
   }

   static getPlayerinfo(){
       var Playerinforef= database.ref("players");
       Playerinforef.on("value", (data)=>{
           allplayers=data.val();
       })
   }
   


}