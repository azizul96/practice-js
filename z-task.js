var friends = ["Alif", "Alif Alamin", "Azizul", "Monirul", "Aminul"]

for(var i=0; i<friends.length; i++){
    var friend = friends[i];
    
    if((friend.length % 2) === 0){
        console.log("Hi Barbie");
    }
    else{
        console.log(friend);
    }
}