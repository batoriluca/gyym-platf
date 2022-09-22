const aboutGrowBtn = document.getElementById("aboutbuttongrow");
const aboutGrowxBtn = document.getElementById("aboutbuttongrowx");

aboutGrowBtn.addEventListener("click", () => {
    document.querySelector("#aboutbuttongrow").setAttribute("style", "display:none;")
    document.querySelector("#aboutbuttongrowx").setAttribute("style", "display:block;")
    document.querySelector(".about-card p").setAttribute("style", "display:block;")
})

aboutGrowxBtn.addEventListener("click", () => {

    document.querySelector("#aboutbuttongrow").setAttribute("style", "display:block;")
    document.querySelector("#aboutbuttongrowx").setAttribute("style", "display:none;")
    document.querySelector(".about-card p").setAttribute("style", "display:none;")
})

const faqGrowBtn = document.getElementById("faqbuttongrow");
const faqGrowxBtn = document.getElementById("faqbuttongrowx");
const faqP = document.querySelectorAll(".faq-card p");
const faqH = document.querySelectorAll(".faq-card h2");

faqGrowBtn.addEventListener("click", () => {
    document.querySelector("#faqbuttongrow").setAttribute("style", "display:none;")
    document.querySelector("#faqbuttongrowx").setAttribute("style", "display:block;")

    faqP.forEach(faq => {
        faq.setAttribute("style", "display:block;")
    });
    faqH.forEach(faqq => {
        faqq.setAttribute("style", "display:block;")
    })
})

faqGrowxBtn.addEventListener("click", () => {
    document.querySelector("#faqbuttongrow").setAttribute("style", "display:block;")
    document.querySelector("#faqbuttongrowx").setAttribute("style", "display:none;")
    faqP.forEach(faq => {
        faq.setAttribute("style", "display:none;")
    });
    faqH.forEach(faqq => {
        faqq.setAttribute("style", "display:none;")
    })
})