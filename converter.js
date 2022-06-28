let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
let kgRef = document.getElementById("kg");
let stRef = document.getElementById("st");
let startRef = document.getElementById("start");
let curRef = document.getElementById("current");
let percent = document.getElementById("percent")
let button = document.getElementById("calc")

let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
    stRef.value = (lb / 14).toFixed(2);
}

let convertFromOz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
    stRef.value = (oz / 224).toFixed(2);
}

let convertFromKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
    stRef.value = (kg / 6.350).toFixed(2);
}

let convertFromSt = () => {
    let st = stRef.value;
    kgRef.value = (st * 6.350).toFixed(2);
    lbRef.value = (st * 14).toFixed(2);
    ozRef.value = (st * 224).toFixed(2);
}

let calcPercent = () => {
    let starting = startRef.value;
    let current = curRef.value;
    let lost = (starting - current).toFixed(2);
    if(starting == null || current == null){
        alert("Starting weight and current weight must be filled in. Please check and try again.")
    }else{
        percent.innerText = Math.round((lost / starting) * 100) + '%';
    }
}

lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
kgRef.addEventListener("input", convertFromKg);
stRef.addEventListener("input", convertFromSt);
button.addEventListener("click", calcPercent);
window.addEventListener("load", convertFromLb)