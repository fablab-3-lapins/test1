const mini = document.querySelectorAll(".min");
const maxi = document.querySelectorAll(".maxi");

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
};



console.log(random(1, 30));