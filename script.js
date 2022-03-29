const icon = document.getElementById("icon");
const bodyTag = document.getElementsByTagName("body")[0];
const keyDark = document.getElementsByTagName("span")
const detailTag = document.getElementById("detail")
let text = ""

console.log(icon)

function changeKeyColor() {
    if (bodyTag.classList.item(0) === "body-light") {
        for (const key of keyDark) {
            key.classList.replace("key", "key-dark")
        }
    } else {
        for (const key of keyDark) {
            key.classList.replace("key-dark", "key")
        }
    }
}

function changeBodyColor() {

    if (bodyTag.classList.item(0) === 'body-light') {
        bodyTag.classList.replace("body-light", "body-dark")
        icon.style.color = "white"
    } else {
        bodyTag.classList.replace("body-dark", "body-light")
        icon.style.color = "black"
    }
}

function clickEvent() {
    changeKeyColor()
    changeBodyColor()
}

icon.addEventListener("click", clickEvent);
for (const key of keyDark) {
    key.addEventListener("click", typeEvent)
}

console.log(keyDark)

function typeEvent(event) {
    if (event.target.innerText === "Delete") {
        text = text.slice(0, -1)

    } else if (event.target.innerText === "Enter") {
        text += "\n"

    } else if (event.target.innerText === "Tab") {
        text += "&nbsp;"
        text += "&nbsp;"
        text += "&nbsp;"
        text += "&nbsp;"

    } else {
        text += event.target.innerText
    }
    detailTag.innerHTML = text
}