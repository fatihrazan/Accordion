//membuat FaQ
const btnOne = document.getElementById("qOne");
const arrow1 = document.getElementById("arrow1");
const ansOne = document.getElementById("ansOne");

const btnTwo = document.getElementById("qTwo");
const arrow2 = document.getElementById("arrow2");
const ansTwo = document.getElementById("ansTwo");

const btnThree = document.getElementById("qThree");
const arrow3 = document.getElementById("arrow3");
const ansThree = document.getElementById("ansThree");

const btnFour = document.getElementById("qFour");
const arrow4 = document.getElementById("arrow4");
const ansFour = document.getElementById("ansFour");

function click(arrow, ans){
    arrow.classList.toggle("active");
    ans.classList.toggle("hidden");
}

btnOne.addEventListener("click", () => click(arrow1,ansOne))
btnTwo.addEventListener("click", () => click(arrow2,ansTwo))
btnThree.addEventListener("click", () => click(arrow3,ansThree))
btnFour.addEventListener("click", () => click(arrow4,ansFour))



