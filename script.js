const contents = document.getElementsByClassName("contents");
const tabs = document.getElementsByClassName("tab");
const resetTabs = () =>{
    for(let i = 0;i<=tabs.length-1;i++){
        tabs[i].style.backgroundColor = "rgb(214, 222, 234)";
    }
}
const resetContents = () =>{
    for(let i = 0;i<=tabs.length-1;i++){
        contents[i].style.display = "none";
    }
}
for(let i = 0; i<=tabs.length-1; i++){

    tabs[i].addEventListener("click",function () {
        resetTabs();
        resetContents();
        contents[i].style.display = "block";
        tabs[i].style.backgroundColor = "white";
    });
}