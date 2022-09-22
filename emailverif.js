var inputBox = document.getElementById("emailV");

var invalidChars = [
    "-",
    "+",
    "e",
];

inputBox.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBox.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});