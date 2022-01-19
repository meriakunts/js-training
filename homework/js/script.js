function addListItem() {
    let input = document.getElementById("inputValue");
    let value = input.value;
    if (value !== "") {
        let ul = document.getElementById("toDoList");
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = value;
        input.value = "";
        let span = document.createElement("span");
        li.appendChild(span);
        span.classList.add("removeBtn");
        span.innerHTML = "x";
        span.onclick = function () {
            ul.removeChild(this.parentElement);
        };
        li.onclick = function () {
            if (this.classList.contains("checkedItem")) {
                this.classList.remove("checkedItem")
            }
            else {
                this.classList.add("checkedItem");
            }
        };
    }
}

function enterPressed() {
    if (event.keyCode == 13) {
        addListItem();
    }
}
