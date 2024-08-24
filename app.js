let boxes=document.querySelectorAll(".box");
let newbtb=document.querySelector("#new");
let msgcontain=document.querySelector(".msg-contain");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#reset");
let draw=document.querySelector(".draw");

let turn0=true;
let count=0;


const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

const restgame=()=>{
    turn0=true;
    count=0;
    enableboxes();

    msgcontain.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            // player 0 will play
            box.innerText="O";
            
            turn0=false;
        }
        else{
            box.innerText="X";
           
            turn0=true;
        }
        box.disable=true;
        count++;

       if(checkWinner()){
        return;                    // no need to check further.

       }

       if(count===9){
        gamedraw();
       }

    });
});

const gamedraw=()=>{
    msg.innerText="This Game Is Draw!";
    msgcontain.classList.remove("hide");
    disableboxes();
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congrulation The Winner is ${winner}`;
   msgcontain.classList.remove("hide");
   disableboxes();
   

}

const checkWinner=()=>{
    for(let pattern of winner){
        let posval1=boxes[pattern[0]].innerText
        let posval2=boxes[pattern[1]].innerText
        let posval3=boxes[pattern[2]].innerText

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                console.log("Winner",posval1);
                showWinner(posval1);
                return true;
            }
        }
    }
};

newbtb.addEventListener("click",restgame);
resetbtn.addEventListener("click",restgame);
