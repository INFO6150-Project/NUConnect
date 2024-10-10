// let url = "level3.html"; <-- following line shows how to get this from url
window.onload = function (){
    let currentItem = document.getElementByClassName("items").find("[href$='" + url + "']");
let path = "home";
$(currentItem.parents("li").get().reverse()).each(function () {
    path += "/" + this.children("a").innerText;
});
document.getElementByClassName("bredcrumb").innerHTML = path;
}

