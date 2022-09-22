const deleteBtn = document.getElementById("delete");
const anuleazaBtn = document.getElementById("anuleaza");

deleteBtn.addEventListener("click", () => {
    document.querySelector(".estisigur").setAttribute("style", "display:block;");
    document.querySelector(".post").setAttribute("style", "display:none;");
    anuleazaBtn.addEventListener("click", () => {
        document.querySelector(".estisigur").setAttribute("style", "display:none;");
        document.querySelector(".post").setAttribute("style", "display:block;");
    })
})