const openSidebar = document.querySelector(".sidebar-menu-logo");
const closeSidebar = document.querySelector(".sidebar-close-logo");
const sidebar = document.querySelector(".sidebar");
/*
openSidebar.addEventListener("click",() => {
    if(closeSidebar.className === "sidebar"){
        closeSidebar.classList.remove("sidebar");
    }
    else{
        openSidebar.classList.add("sidebar");
    }

})
*/
openSidebar.addEventListener("click",()=>{
    sidebar.style.display = "flex";
});
closeSidebar.addEventListener("click",()=>{
    sidebar.style.display = "none";
});
