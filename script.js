let shift_keys = document.querySelectorAll('.shift')
let icon = document.querySelector(".icons")
let body = document.querySelector("body")
let keys = document.querySelectorAll('.key')
let detail = document.querySelector('#detail')
let text = detail.innerText

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
        let xs_keys = document.querySelectorAll('.key-xs')
        for (let xs_key of xs_keys) {
            if (!xs_key.classList.contains('key-fn')) {
                if (!xs_key.classList.contains('none-letter'))
                    xs_key.innerText = xs_key.innerText.toLowerCase()
            }
        }
    }
})
icon.addEventListener('click', function (event) {
    icon.classList.toggle('icons-dark')
    body.classList.toggle('body-dark')


})

for (const textElement of keys) {
    textElement.addEventListener('click', function (event) {
        switch (event.target.innerText) {
            case "Enter":
                text += "\n"
                detail.innerHTML = text
                break
            case "Delete":
                let lastFive = text.substring(text.length-5)
                let tab =text.substring(text.length-24)
                console.log(tab)
                if (tab === "&nbsp;&nbsp;&nbsp;&nbsp;"){
                    text = text.slice(0, -24)
                }
                else if (lastFive==='&nbsp'){
                    text = text.slice(0, -5)
                }else {
                    text = text.slice(0, -1)
                }
                detail.innerHTML = text
                break
            case 'Tab':
                text+='&nbsp;'
                text+='&nbsp;'
                text+='&nbsp;'
                text+='&nbsp;'

                detail.innerHTML=text
                break
            case 'Space':
                text+=' '
                detail.innerHTML=text
                break

            default :
                text += event.target.innerText
                detail.innerHTML = text

        }


    })
}
