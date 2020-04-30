window.addEventListener(
    "keydown",
    function (event) {
        let str = event.key + " ";
        let el = document.createElement("span");
        el.innerHTML = str;

        document.getElementById("show").appendChild(el);
    },
    true
);
