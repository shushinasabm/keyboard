let icon = document.getElementById("icon")
icon.addEventListener('click', function (event) {
    icon.classList.toggle('icons-dark')

    let body = document.querySelector("body")
    body.classList.toggle('body-dark')
})

let shift_keys = document.querySelectorAll('.shift')
for (let shift_key of shift_keys) {
    shift_key.addEventListener('click', function (event) {
        let capslock_keys = document.querySelectorAll('.capsLock')

        for (let capslock of capslock_keys)
            capslock.classList.toggle('capsLock-on')

        let capslock = document.querySelector('.capsLock')
        if (capslock.classList.contains('capsLock-on')) {
            let xs_keys = document.querySelectorAll('.key-xs')
            for (let xs_key of xs_keys) {
                if (!xs_key.classList.contains('key-fn')) {
                    if (xs_key.classList.contains('none-letter'))
                        xs_key.innerText = xs_key.getAttribute('shift-on')

                    if (!xs_key.classList.contains('none-letter'))
                        xs_key.innerText = xs_key.innerText.toUpperCase()
                }
            }
        }

        if (!capslock.classList.contains('capsLock-on')) {
            let xs_keys = document.querySelectorAll('.key-xs')
            for (let xs_key of xs_keys) {
                if (!xs_key.classList.contains('key-fn')) {
                    if (xs_key.classList.contains('none-letter'))
                        xs_key.innerText = xs_key.getAttribute('shift-off')

                    if (!xs_key.classList.contains('none-letter'))
                        xs_key.innerText = xs_key.innerText.toLowerCase()
                }
            }
        }
    })
}

let capslock_key = document.querySelector('.caps-lock')
capslock_key.addEventListener('click', function (event) {
    let capslock = this.querySelector('.capsLock')
    capslock.classList.toggle('capsLock-on')

    if (capslock.classList.contains('capsLock-on')) {
        let xs_keys = document.querySelectorAll('.key-xs')
        for (let xs_key of xs_keys) {
            if (!xs_key.classList.contains('key-fn')) {
                if (!xs_key.classList.contains('none-letter'))
                    xs_key.innerText = xs_key.innerText.toUpperCase()
            }
        }
    }

    if (!capslock.classList.contains('capsLock-on')) {
        let xs_keys = document.getElementsByClassName('key-xs')
        for (let xs_key of xs_keys) {
            if (!xs_key.classList.contains('key-fn')) {
                if (!xs_key.classList.contains('none-letter'))
                    xs_key.innerText = xs_key.innerText.toLowerCase()
            }
        }
    }
})

let keys = document.querySelectorAll('.key')
for (let key of keys) {
    if (!key.classList.contains('key-fn')) {
        key.addEventListener('click', function (even) {
            let detail = document.getElementById('detail')

            if (key.innerText === 'Tab') {
                detail.value += '\u00A0'
                detail.value += '\u00A0'
                detail.value += '\u00A0'
                detail.value += '\u00A0'
            } else if (key.innerText === '&nbsp;')
                detail.value += '\u00A0'
            else
                detail.value += key.innerText
        })
    }
}

let delete_key = document.querySelector('.delete')
delete_key.addEventListener('click', function (event) {
    let detail = document.getElementById('detail')
    let isTab = detail.value.slice(detail.value.length - 4)

    if (isTab === '\u00A0\u00A0\u00A0\u00A0')
        detail.value = detail.value.slice(0, -4)
    else
        detail.value = detail.value.slice(0, -1)
})
let enter_key = document.querySelector('.enter')
enter_key.addEventListener('click',function () {
    let detail = document.getElementById('detail')
    detail.value += '\n'
})

let isHolded = false
let deleteInterval = null

delete_key.onmouseup = function (event) {
    isHolded = false

    clearInterval(deleteInterval)
}

delete_key.onmousedown = function (event) {
    isHolded = true

    deleteInterval = setInterval(function () {
        if (isHolded) {
            let detail = document.getElementById('detail')
            let isTab = detail.value.slice(detail.value.length - 4)

            if (isTab === '\u00A0\u00A0\u00A0\u00A0')
                detail.value = detail.value.slice(0, -4)
            else
                detail.value = detail.value.slice(0, -1)
        }
    }, 100)
}

const changeKeyboardMobile = document.getElementById('change-keyboard-mobile')
changeKeyboardMobile.addEventListener('click', function (event) {
    if (document.body.clientWidth <= 996) {
        let keyBoardMobile = document.getElementsByClassName('keyboard-mobile')[0]
        let keyBoardEmoji = document.getElementsByClassName('keyboard-emoji')[0]

        if (keyBoardMobile.style.display === "none") {
            keyBoardMobile.style.display = "flex";
            keyBoardEmoji.style.display = 'none'
        } else {
            keyBoardMobile.style.display = "none";
            keyBoardEmoji.style.display = 'flex'
            keyBoardEmoji.style.flexDirection = 'column'
        }
    }
})

const changeKeyboardEmoji = document.getElementById('change-keyboard-emoji')
changeKeyboardEmoji.addEventListener('click', function (event) {
    if (document.body.clientWidth <= 996) {
        let keyBoardMobile = document.getElementsByClassName('keyboard-mobile')[0]
        let keyBoardEmoji = document.getElementsByClassName('keyboard-emoji')[0]

        if (keyBoardMobile.style.display === "none") {
            keyBoardMobile.style.display = "flex";
            keyBoardEmoji.style.display = 'none'
            keyBoardMobile.style.flexDirection = 'column'
        } else {
            keyBoardMobile.style.display = "none";
            keyBoardEmoji.style.display = 'flex'
            keyBoardEmoji.style.flexDirection = 'column'
        }
    }
})