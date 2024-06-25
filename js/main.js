// functionality

let left = document.getElementById("left");
let right = document.getElementById("right");
//let list = document.querySelectorAll(".list");
let lists = document.getElementsByClassName("list");
//  make it lists ***
// for loop 
/*
for (list of lists) {
    list.addEventListener("dragstart", function(event) {
        let selected = event.target;
        right.addEventListener("dragover", function(event) {
            event.preventDefault();
        })
        right.addEventListener("drop", function(event) {
            right.appendChild(selected);
            selected = null;
        })
    })
}
*/
for (lists of lists) {
    lists.addEventListener("dragstart", function(event) {
        let selected = event.target;
            right.addEventListener("dragover", function(event) {
                event.preventDefault();
            })
            right.addEventListener("drop", function(event) {
                right.appendChild(selected);
                selected = null;
            })
    })
}













