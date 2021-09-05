let per = document.querySelector(".caracter");
let easy = document.querySelector("#one")
let hard = document.querySelector("#two")
let vHard = document.querySelector("#three")
let tRying = document.querySelector("#try");
let scr = document.querySelector("#src");
let hScore = document.querySelector(".hScore");
let nameA = document.querySelector(".name");

let Scr = 0;
let tryi = 0;


let spredd = 2000;

const valid = () => {
    setTimeout(() => {
        per.style.display = "block"
    }, 2000)
}

easy.addEventListener("click", () => {
    spredd = 2000;
    fun();
    valid();
    easy.classList.add("active");
    hard.classList.remove("active");
    vHard.classList.remove("active");
})
hard.addEventListener("click", () => {
    spredd = 1500;
    fun();
    valid();
    hard.classList.add("active");
    easy.classList.remove("active");
    vHard.classList.remove("active");
})
vHard.addEventListener("click", () => {
    spredd = 800;
    fun();
    per.style.display = "block"
    vHard.classList.add("active");
    hard.classList.remove("active");
    easy.classList.remove("active");
})

const fun = () => {
    setInterval(() => {
        let left = Math.round(Math.random() * 100);
        let top = Math.round(Math.random() * 100);

        per.style.left = left + "%";
        per.style.top = top + "vh";

        tryi++;
        tRying.innerHTML = tryi;

        per.style.display = "block";

    }, spredd)
}
window.addEventListener("click", (e) => {
    if (e.target.classList == "caracter") {
        Scr++;
        scr.innerHTML = Scr;
        let x = Scr;
        const LocalStroege = () => {
            localStorage.setItem('score', JSON.stringify(x))
        }
        LocalStroege();
        if (hScore.innerHTML < x) {
            getItem();
            LocalStroege();
        }
    }
})

const getItem = () => {
    const item = JSON.parse(localStorage.getItem('score'));
    hScore.innerHTML = `${item}`;
}

window.addEventListener("load", () => {
    getItem();
    let z = prompt("Inter Your Name !").toUpperCase();
    nameA.innerHTML = z;
})

per.addEventListener("click", () => {
    per.style.display = "none";
})
