const count = document.getElementById("count-el");

const button = document.getElementById("increment-btn");
button.addEventListener("click",()=>{
    count.innerText++;
})

const save = document.getElementById("save-btn");

const p = document.getElementById("prev_entries");



save.addEventListener("click",()=>{
    let str = " " + count.textContent + " - ";    //We use Text context because innerText struuggles with reading hiden elements . There :

    p.innerText += str ;

    count.innerText = 0 ;

})





