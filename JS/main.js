let character = document.getElementById("character");
let tree = document.createElement("tree");
let counter = 0;

  
function jump() {
    if (character.classList == "animate"){return}
    character.classList.add("animate");
    setInterval(function(){
        character.classList.remove("animate");
    }, 300);
}       

let checkDead = setInterval( function(){
    let characterTop = parseInt(window.getComputedStyle(characterTop).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    if (treeLeft < 20 && treeLeft > -20 && characterTop >= 130) 
    {

    }else{
        counter++;
        document.getElementById("s")
    }

} , 10);