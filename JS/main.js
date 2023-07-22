let tree = document.getElementById("tree");

const treeTypes = ["Icon/cactus.png", "Icon/cactus(1).png", "Icon/c2.png"];
let treeContainer = document.getElementById("trees-container");

for (let i = 0; i < 2; i++) {
    const treeElement = document.createElement("img");
    const treeType = treeTypes[Math.floor(Math.random() * treeTypes.length)];
    treeElement.setAttribute("src", treeType);
    treeElement.setAttribute("alt", "Tree " + (i + 1));
    treeElement.style.width = "40px";
    treeElement.style.height = "45px";
    treeElement.style.margin = "0 5px";

    treeContainer.appendChild(treeElement);
}


let character = document.getElementById("character");
let counter = 0;

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        jump();
    }
});

function jump() {
    if (character.classList.contains("animate")) { return; }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let trees = document.querySelectorAll("#trees-container img"); 
    for (let i = 0; i < trees.length; i++) {
        let treeLeft = parseInt(window.getComputedStyle(trees[i]).getPropertyValue("left"));
        if (treeLeft < 20 && treeLeft > -30 && characterTop >= 130) {
            trees[i].style.animation = "none";
            alert("Game Over. Score : " + Math.floor(counter / 100));
            counter = 0;
            trees[i].style.animation = "block 1s infinite linear";
        } else {
            counter++;
            document.getElementById("scorespan").innerHTML = Math.floor(counter / 100);
        }
    }
}, 10);
