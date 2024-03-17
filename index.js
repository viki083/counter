let counter = 0

function increase() {
    counter++
    document.getElementById("count").textContent = counter
}

function save() {
    document.getElementById("entries").textContent += counter+"-"
    document.getElementById("green").style.backgroundColor = "black"
    counter = 0
    document.getElementById("count").textContent = counter
}