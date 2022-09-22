const accOf = document.getElementById("accept");
const refOf = document.getElementById("refuz");
const accNo = document.getElementById("accn");
const refNo = document.getElementById("refn");

accOf.addEventListener("click", () => {
    document.querySelector(".acc").setAttribute("style", "display:block;");
    document.querySelector("#accept").setAttribute("style", "display:none;");
    document.querySelector("#refuz").setAttribute("style", "display:none;");
    accNo.addEventListener("click", () => {
        document.querySelector(".acc").setAttribute("style", "display:none;");
        document.querySelector("#accept").setAttribute("style", "display:initial;");
        document.querySelector("#refuz").setAttribute("style", "display:initial;");
    })
})

refOf.addEventListener("click", () => {
    document.querySelector(".ref").setAttribute("style", "display:block;");
    document.querySelector("#accept").setAttribute("style", "display:none;");
    document.querySelector("#refuz").setAttribute("style", "display:none;");
    refNo.addEventListener("click", () => {
        document.querySelector(".ref").setAttribute("style", "display:none;");
        document.querySelector("#accept").setAttribute("style", "display:initial;");
        document.querySelector("#refuz").setAttribute("style", "display:initial;");
    })
})