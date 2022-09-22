const logout = document.getElementById("logout");
const delacc = document.getElementById("delacc");

function logoutBtn() {
    logout.addEventListener("click", () => {
        document.querySelector(".sure").setAttribute("style", "display:block;")
        document.querySelector(".delete-acc").setAttribute("style", "margin-top: 10px;")
        document.querySelector("#logout").setAttribute("style", "border: 2px red solid;color: white;background-color: red;")
        document.querySelector("#delacc").setAttribute("style", "border: 2px #6c5ce7 solid;color: white;background-color: #6c5ce7;")
        logout.innerText = "Da";
        delacc.innerText = "Nu";
        delacc.addEventListener("click", () => {
            document.querySelector(".sure").setAttribute("style", "display:none;")
            document.querySelector(".delete-acc").setAttribute("style", "margin-top: 30px;")
            document.querySelector("#delacc").setAttribute("style", "")
            document.querySelector("#logout").setAttribute("style", "")
            logout.innerText = "Deconectați-vă";
            delacc.innerText = "Șterge contul";
            delaccBtn();
            logoutBtn();
        })
    })
}

function delaccBtn() {
    delacc.addEventListener("click", () => {
        document.querySelector(".sure").setAttribute("style", "display:block;")
        document.querySelector(".delete-acc").setAttribute("style", "margin-top: 10px;")
        document.querySelector("#delacc").setAttribute("style", "border: 2px red solid;color: white;background-color: red;")
        document.querySelector("#logout").setAttribute("style", "border: 2px #6c5ce7 solid;color: white;background-color: #6c5ce7;")
        logout.innerText = "Nu";
        delacc.innerText = "Da";
        logout.addEventListener("click", () => {
            document.querySelector(".sure").setAttribute("style", "display:none;")
            document.querySelector(".delete-acc").setAttribute("style", "margin-top: 30px;")
            document.querySelector("#delacc").setAttribute("style", "")
            document.querySelector("#logout").setAttribute("style", "")
            logout.innerText = "Deconectați-vă";
            delacc.innerText = "Șterge contul";
            delaccBtn();
            logoutBtn();
        })
    })
}

delaccBtn();
logoutBtn();