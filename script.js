const scareware = document.getElementById("scareware")
const phishing = document.getElementById("phishing")
const hid = document.getElementById("hid")
const mim = document.getElementById("mim")

const image = document.getElementById("image")

function displayImage(taskName){
    console.log(taskName);
    image.innerHTML = `<img src="./screenshots/${taskName}.png" alt="">`
}

