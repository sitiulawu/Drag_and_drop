let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// Add event listener for dragstart on parent element
for (let list of lists) {
  list.addEventListener("dragstart", dragStart);
}

// Prevent default behavior on dragover event
rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Handle drop event for rightBox
rightBox.addEventListener("drop", function (e) {
  let selected = document.getElementById("selected");
  rightBox.appendChild(selected);
  selected.removeAttribute("id");
});

// Prevent default behavior on dragover event
leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Handle drop event for leftBox
leftBox.addEventListener("drop", function (e) {
  let selected = document.getElementById("selected");
  leftBox.appendChild(selected);
  selected.removeAttribute("id");
});

// Drag start event handler
function dragStart(e) {
  let selected = e.target;
  selected.setAttribute("id", "selected");

  // Add event listener for dragend on selected element
  selected.addEventListener("dragend", function () {
    selected.removeAttribute("id");
  });
}
// let lists = document.getElementsByClassName("list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");

// for(list of lists) {
//     list.addEventListener("dragstart", function(e){
//         let selected = e.target;

//         rightBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });

//         rightBox.addEventListener("drop", function(e){
//             rightBox.appendChild(selected);
//             selected = null;
//         });


//         leftBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });

//         leftBox.addEventListener("drop", function(e){
//             leftBox.appendChild(selected);
//             selected = null;
//         });
//     })
// }
