let start = document.getElementById("start");
let end = document.getElementById("end");
function validbus(){
    if (start.value =="") {
        alert("Please enter start city")
    }
    if (end.value =="") {
        alert("Please enter end City")
    }
    if(start.value != "" && end.value != "") {
        window.location.href="./list.html"
    }
}