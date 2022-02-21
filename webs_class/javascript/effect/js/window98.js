//highlight
hljs.highlightAll();

//modal
const modal = function () {
    //버튼을 클릭하면 modal창을 보이게 해주세요.
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show")
        //닫기버튼 눌렀을 때 hide를 지워 지속적으로 버튼 사용가능하게
        document.querySelector("#modal").classList.remove("hide")
    })
    // document.querySelector(".modal-close").addEventListener("click", () => {
    //     document.querySelector("#modal").classList.add("hide")
    // })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide")
    })
}
modal()
       
    const tabMenu = function () {
        const viewBtn = document.querySelectorAll(".menu-bar > span")
        const viewCont = document.querySelectorAll(".view-cont > div")
    
        viewBtn.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                // 모든 클래스 클릭하지 않은건 active 삭제
                for (let i of viewBtn) {
                    i.classList.remove("active")
                }
                //내가 클릭한건 active 추가
                btn.classList.add("active")
    
                //모든 컨텐츠 박스 안보이게
                viewCont.forEach(el => {
                    el.style.display = "none";
                })
                viewCont[index].style.display = "block"
    
                //내가 클릭한 콘텐츠 박스를 보이게
    
            })
        })
    }
    tabMenu()
