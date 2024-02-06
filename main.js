
let close = document.querySelector(".close");
let overlay = document.querySelector('.overlay');
let sidebar = document.querySelector('.sidebar');
let click = document.querySelector(".click");


click.onclick = function () {
    sidebar.classList.add("sideBarShowClose");

    overlay.style.display = "block";
}





close.onclick = function () {
    sidebar.classList.remove("sideBarShowClose");
    
    

    overlay.style.display = "none";

};

