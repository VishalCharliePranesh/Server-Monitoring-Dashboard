function loadStats(){

fetch('/stats')
.then(response => response.json())
.then(data => {

document.getElementById("cpu").innerHTML =
data.cpu + "%";

document.getElementById("memory").innerHTML =
data.memory + "%";

document.getElementById("disk").innerHTML =
data.disk + "%";

});

}

setInterval(loadStats,3000);
loadStats();