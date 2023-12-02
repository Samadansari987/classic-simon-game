let gameSeq=[];
let userSeq=[];
let started=false;

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("started");
        started=true;
    }
    else{
        reset(); // code is in last line
    }
    levelUp();
});

let level=0;
let h2=document.querySelector("h2");


let btns=["yellow","red","blue","purple"];

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",function(){
        let btn=this
        /* console.log(this) */
        btnFlash(btn);
        userColor=btn.getAttribute("id")
        /* console.log(userColor)  *////will get the id of pressed btn which we have mentioned them by there own btn color 
        userSeq.push(userColor)
        checkAns(userSeq.length-1);//cause we are checking the last button
    })
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){ /////not clear try to understand
            setTimeout(levelUp,1000); //called level up fuction
        }
    }
    else{
        h2.innerHTML=`game over !!!, your score is --<b>${level}</b> press any key`;
        let abc=document.querySelector("body");
        abc.style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
    }
}
let highestScore=0;

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    if(level>highestScore){
        highestScore=level;
    }
    document.querySelector(".highestScore").innerHTML=`<b>your highest score is -->${highestScore} </b>!!`

    //random no.
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq);
    btnFlash(randBtn);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}
