function getValue(val){
    document.getElementById("result").value += val;   
}

function solve() {
    let result = document.getElementById("result").value;
    let number = eval(result); //cast to int + do math
    document.getElementById("result").value = number;
}

function clearResult() {
    document.getElementById("result").value = "";
}