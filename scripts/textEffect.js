// An array of letters in the English Alpabhet for the hacker effect
const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let head = document.querySelector("h1");
head.addEventListener("mouseover",() => {effect(head);});
window.addEventListener("load",() => {effect(head);});

function effect(text){
    let original = text.innerText;
    let clone = "";
    let len = original.length;
    let key = len;

    const interval = setInterval(() => {
        for (let y = 0; y<key; y++)
            clone = clone + alpha[Math.floor(Math.random() * len)];
        console.log(clone);

        if (key > 0)
            text.innerText = original.substring(0, (len-key)) + clone;
        else if (key === 0)
            text.innerText = original.substring(0, (len-key));

        if (key === 0){
            key = len;
            clearInterval(interval);
        }
            
        console.log(key);
        clone = "";
        key--;

    }, 50);
}

// Replicating the effect for the text of the themes
let $text = document.querySelectorAll(".text");
let $contain = document.querySelectorAll(".subContain");
for (let x = 0; x<$contain.length; x++){
    $contain[x].addEventListener("mouseover",() => {effect($text[x]);});
    window.addEventListener("load",() => {effect($text[x]);});
}