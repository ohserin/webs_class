//highlight
const highlight = function(){
    hljs.highlightAll()
}

//윈도우 오픈
function openWindow() {
    document.querySelector(".quiz_source").addEventListener("click", () => {
        document.querySelector(".source").classList.add("show");
        document.querySelector(".source .window").classList.add("show");
        document.querySelector(".source").classList.remove("hide");
        document.querySelector(".source .window").classList.remove("hide");
    });
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".source").classList.add("hide");
        document.querySelector(".source .window").classList.add("hide");
        document.querySelector(".source").classList.remove("show");
        document.querySelector(".source .window").classList.remove("show");
    });
    document.querySelector(".minimize").addEventListener("click", () => {
        document.querySelector(".source").classList.add("hide");
        document.querySelector(".source .window").classList.add("hide");
        document.querySelector(".source").classList.remove("show");
        document.querySelector(".source .window").classList.remove("show");
    });
}
openWindow();
    

//tab 메뉴
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".menu-bar > span");
    const tabCont = document.querySelectorAll(".main > div");

    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tabBtn.forEach(el => {
                el.classList.remove("active");
            });
            btn.classList.add("active");

            tabCont.forEach(e => {
                e.style.display = "none";
            })
        tabCont[index].style.display = "block";
        })
    })
}
tabMenu();