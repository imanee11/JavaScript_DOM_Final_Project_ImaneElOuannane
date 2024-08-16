let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")


starters.addEventListener("click",()=>{
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #ce1212";
    let a = document.querySelector(".content-p2")
    a.textContent = "Starters"
})
breakfast.addEventListener("click",()=>{
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #ce1212";

    let a = document.querySelector(".content-p2")
    a.textContent = "Breakfast"
})
lunch.addEventListener("click",()=>{
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #ce1212";

    let a = document.querySelector(".content-p2")
    a.textContent = "Dinner"
})
dinner.addEventListener("click",()=>{
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #ce1212";

    let a = document.querySelector(".content-p2")
    a.textContent = "Lunch"
})