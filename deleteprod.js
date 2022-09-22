const deleteBtn = document.getElementById("deleteprod");
const anuleazaBtn = document.getElementById("nu");

deleteBtn.addEventListener("click", () => {
    document.querySelector(".estisigur").setAttribute("style", "display:flex;");
    document.querySelector("#deleteprod").setAttribute("style", "display:none;");
    anuleazaBtn.addEventListener("click", () => {
        document.querySelector(".estisigur").setAttribute("style", "display:none;");
        document.querySelector("#deleteprod").setAttribute("style", "display:block;");
    })
})