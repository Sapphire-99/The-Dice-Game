
var current_rotation = 0;
var p1;
var p2;

function enter(){
    document.querySelector("h1").innerHTML="Start Game !";
    document.querySelector(".rolling-dice").style.display="block";
    document.querySelector(".main_dice").style.display="none";
    document.querySelector(".btn1").style.display="none";
    document.querySelector(".btn2").style.display="block";
    p1= prompt("Enter First Player Name");
    p2=prompt("Enter Second Player Name");
    document.querySelector(".Player1").innerHTML=p1;
    document.querySelector(".Player2").innerHTML=p2;

}


function rolling(){
        var random1= Math.floor(Math.random() *6)+1;
        var first_img = "dice"+ random1 + ".png";
        var random2 = Math.floor(Math.random() *6)+1;
        var second_img = "dice"+ random2 + ".png";
    
        
        document.querySelectorAll("img")[1].setAttribute("src","images/"+first_img);
    
        document.querySelectorAll("img")[2].setAttribute("src","images/"+second_img);
        
        document.querySelector("h1").innerHTML="Rolling Dice";
        current_rotation += 360;
        document.querySelector("#sample1").style.transform = 'rotate(' + current_rotation + 'deg)';
        document.querySelector("#sample1").style.transition = 'transform 2s';
        document.querySelector("#sample2").style.transform = 'rotate(' + current_rotation + 'deg)';
        document.querySelector("#sample2").style.transition = 'transform 2s';
        setTimeout(function(){
            if(random1>random2){
                document.querySelector("h1").innerHTML="🚩 " + p1+ " wins!";
            }
            else if(random1===random2){
                document.querySelector("h1").innerHTML="Match Draw !!";
            }
            else{
                document.querySelector("h1").innerHTML=p2+" wins!🚩";
                }
            
        }, 1500);
        
        
        
    
}


