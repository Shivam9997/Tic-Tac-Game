let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let stbtn = document.querySelector("#st-btn");
let msg = document.querySelector(".msg")
let check = document.querySelector("#check");
let moves = 0



let turn = true;//playerX &&playerO

const pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
const ResetGame = () =>{
        turn = true;
        enbled()
        msg.classList.add("hide");
        moves= 0;
       
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
           if(turn){
         box.innerText  = "X"
         box.style.color = "rgb(14 235 9 / 72%)";
         turn = false
         moves++
           }else {    
          box.style.color = "yellow"
             box.innerText = ("0")
            turn = true;
             moves++
           }
              
        
           box.disabled = true;
           checkWinner();
    });
});
const disabled = () => {
    for(let box of boxes ){
        box.disabled= true;
    }
}
const enbled = () => {
    for(let box of boxes ){
        box.disabled=false;
        box.innerText = "";
        moves= 0;
    }
}

const showWinner = (winner) =>{
   
   check.innerText = `Game Over!
    Winner is ${winner}`;
   msg.classList.remove("hide");
   disabled();
}




const checkWinner = (winner) =>{
   for(let win of pattern){
    //  console.log(win) // check 
    //  console.log(
    //      boxes[win[0]].innerText,
    //      boxes[win[1]].innerText, 
    //      boxes[win[2]].innerText
    //     );// check

       let pos1 =  boxes[win[0]].innerText 
       let pos2 =  boxes[win[1]].innerText
       let pos3 =  boxes[win[2]].innerText
       

      if(pos1 !="" && pos2 != ""  && pos3 != ""){
          if(pos1===pos2 && pos2 ===pos3){
            console.log(moves)
            
              
           showWinner(pos1);
           return ;
          }
      }
      if(moves ===9){
                check.innerText="It is a draw Match!"
                 msg.classList.remove("hide");
              }
      
}
};


stbtn.addEventListener("click", ResetGame);
resetbtn.addEventListener("click", ResetGame);
