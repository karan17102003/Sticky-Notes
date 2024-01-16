let textArea=document.querySelector("#textarea");
let button=document.querySelector("button");
let color=document.querySelector("input");
let btn2=document.querySelectorAll(".btn2");
console.log(btn2)
let rightContainer=document.querySelector(".right");
let colorValue=color.value;
    
let text=textArea.value;
button.addEventListener('click',(e)=>{
    if(textArea.value===""){
        alert("Please enter some text!!");
        return;
    }
     
   
    makeSticky(textArea.value,color.value)
    removeNote();
    textArea.value="";
})
function removeNote(e){
    btn2=document.querySelectorAll(".btn2");
    console.log(btn2);
    btn2.forEach( singleBtn=> {
        singleBtn.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        });
    });

}
function makeSticky(text,co){
    let div=document.createElement("div");
    div.classList="div";
     div.innerHTML=`
          <p>${text}</p>
          <button class="btn2">X</button>`
    div.style.backgroundColor=co;
    rightContainer.appendChild(div);

}
console.log(textArea.value);
// function makeStickNotes(text,color){
// let div=document.createElement("div");
// div.innerHTML=`
// <p>${text}</p>
// <button>X</button>`


// div.style.backgroundColor=color;
// rightContainer.appendChild(div);
// }