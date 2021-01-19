const input = document.querySelector('#user-name')
const btn = document.querySelector('#Join')
btn.addEventListener('click', Ativacao =()=> {
    if (!input.value == false) {
        sessionStorage.setItem('username', input.value)
        sessionStorage.setItem('id', Math.random())
        window.location.href = './chat.html'
    } else {
        input.style = 'border:2px solid red'
        alert('Você precisa Digitar um nome')
    }
})

