let x = document.getElementById("hamb");
function toggle(){
    if (getComputedStyle(x).getPropertyValue("display") === "none"){
       x.style.display = "unset";
       document.getElementById("bars").className="fa-solid fa-xmark";
    }
    else
    {
        x.style.display = "none";
        document.getElementById("bars").className="fa-solid fa-bars";
    }
}