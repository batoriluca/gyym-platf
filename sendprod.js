document.querySelector("#prodInput").onchange = function() {
    document.querySelector("#file-name").textContent = this.files[0].name;
}