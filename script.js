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
        let xs_keys = document.querySelectorAll('.key-xs')
        for (let xs_key of xs_keys) {
            if (!xs_key.classList.contains('key-fn')) {
                if (!xs_key.classList.contains('none-letter'))
                    xs_key.innerText = xs_key.innerText.toLowerCase()
            }
        }
    }
})