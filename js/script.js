function showMenu() {
    var menuobj = document.getElementById("menu");
    if(menuobj.style.display == "none" || menuobj.style.display == "") {
        menuobj.style.display = "block";
    }
    else {
        menuobj.style.display = "none";
    }
}