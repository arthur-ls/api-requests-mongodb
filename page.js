btnAddValue = document.getElementsByClassName("addValue")

function AddLi(str) {
    if (str === '') {
        alert("You must right something!");
    } else {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(str))
        li.className = "eventList"
        document.getElementById("events").appendChild(li);

        var span = document.createElement("SPAN");
        span.appendChild(document.createTextNode("\u2717"));
        span.className = "close"
        li.appendChild(span)

        var list = document.querySelectorAll(".eventList");
        for (i = 0; i < list.length; i++) {
            list[i].querySelector("SPAN").addEventListener("click", function() {
               this.closest(".eventList").remove();
            });
        }
    }
}