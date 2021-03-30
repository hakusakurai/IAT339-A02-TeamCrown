buttons = document.querySelectorAll(".SortHead");
Array.prototype.forEach.call(buttons, (button, i) => {
    button.addEventListener('click', e => {
        toggleHidden(button);
    });
});

function toggleHidden(button){
    var elements = button.parentNode.querySelectorAll(".SortElement");
    Array.prototype.forEach.call(elements, (e, i) => {
        e.classList.toggle("ShowElement");
    });
}

var showAll = true;

sortTitle = document.querySelector("#filterbutton4");
sortTitle = document.querySelector("#filterbutton3");
sortTitle.addEventListener('click', e=>{
    showAll = !showAll;

    var elements = sortTitle.parentNode.querySelectorAll(".SortElement");
    Array.prototype.forEach.call(elements, (e, i) => {
        e.classList.toggle("ShowElement", showAll);
    });

    elements = sortTitle.parentNode.querySelectorAll(".SortHead");
    Array.prototype.forEach.call(elements, (e, i) => {
        e.classList.toggle("ShowElement", showAll);
    });
})


function openSFNav() {
  document.getElementsByClassName("mSortFilter")[0].style.width = "250px";
}

function closeSFNav() {
  document.getElementsByClassName("mSortFilter")[0].style.width = "0";
}