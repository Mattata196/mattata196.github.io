function bigger() {
    document.getElementById("text").style.fontSize = "24pt";
    alert("Hello, world!");
}

function fancy() {
    let textField = document.getElementById("text");
    if(document.getElementById("fancy").checked) {
        textField.style.fontWeight = "bold";
        textField.style.color = "blue";
        textField.style.textDecoration = "underline";
        document.getElementById("boring").checked = false;
        alert("Text is fancified!");
    }
}

function boring() {
    let textField = document.getElementById("text");
    if(document.getElementById("boring").checked) {
        textField.style.fontSize = "12";
        textField.style.fontWeight = "normal";
        textField.style.color = "black";
        textField.style.textDecoration = "none";
        document.getElementById("fancy").checked = false;
        alert("Text is now boring.");
    }
}

function moo() {
    let str = document.getElementById("text");
    str.style.textTransform = "uppercase";
    let parts = str.value.split(".");
    str.value = parts.join("-Moo");
}