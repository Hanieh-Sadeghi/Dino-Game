let character = document.getElementById("character");
let tree = document.getElementById("tree");
let counter = 0;
  
function jump() {
    if (character.classList.contains("animate")) { return; }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}
       

let checkDead = setInterval( function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    
    if (treeLeft < 20 && treeLeft > -20 && characterTop >= 130) {
        tree.style.animation = "none"
        alert("Game Over. Score : " + Math.floor(counter/100));
        counter = 0;
        tree.style.animation = "tree 1s infinite";


    }else{
        counter++;
        document.getElementById("scorespan").innerHTML =  Math.floor(counter/100);        
    }

} , 10);