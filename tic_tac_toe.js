

let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 4, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");  // Corrected here
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  // Corrected here
        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";  // Corrected here
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;  // Corrected here
    msgcontainer.classList.remove("hide");  // Corrected here
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;  // Corrected here
        let pos2val = boxes[pattern[1]].innerText;  // Corrected here
        let pos3val = boxes[pattern[2]].innerText;  // Corrected here

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner!", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
