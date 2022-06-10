let x = document.getElementById("hamb");

function toggle(){
    if (getComputedStyle(x).getPropertyValue("right") === "-200px"){
       x.classList.add("hamb_apear");
       document.getElementById("bars").className="fa-solid fa-xmark";
    }
    else
    {
        x.classList.remove("hamb_apear")
        document.getElementById("bars").className="fa-solid fa-bars";
    }
}
