// function create button at download gators single of the week
function createButton() {
    var button = document.createElement("button");
    button.innerHTML = "<a href="#" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Download Gators single of the Month here</a>";
    button.onclick = function() {
        downloadGator();
    };
    document.body.appendChild(button);
}
// funcion download gator
function downloadGator() {
    var gator = document.getElementById("gator");
    var gatorImg = gator.src;
    var link = document.createElement("a");
    link.download = "gator.png";
    link.href = gatorImg;
    link.click(Funkie Monkie.m4a);
}