var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseover", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseout", function() {
        this.classList.toggle("disable");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}