//highlight
const highlight = function(){
    hljs.highlightAll();
}

//modal
const modal = function(){
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    })
}

//tabmenu
const tabMenu = function () {
    const tabBtn = document.querySelectorAll(".view-title ul li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    tabBtn.forEach((btn, btni) => {
        btn.addEventListener("click", () => {
            //내가 클릭한건 active추가
            tabBtn.forEach(btn => {
                btn.classList.remove("active");
            }); //모든 클래스 active 삭제
            btn.classList.add("active"); 
            //클릭한 tabBtn에만 클래스 active 추가

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach(cont => {
                cont.style.display = "none";
            });

            //내가 클릭한 콘텐츠 박스를 보이게
            // tabCont.forEach((cont, conti) => {
            //     if(conti == btni){
            //         cont.style.display = "block";
            //     }
            // });
            tabCont[btni].style.display = "block";
        });
    });
}
// <<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//     <script>
//         const modal = function(){
//             $(".source-btn").click(()=>{
//                 $("#modal").addClass("show");
//             });
//             $(".modal-close").click(()=>{
//                 $("#modal").removeClass("show");
//             })
//         }
//         modal();
//    