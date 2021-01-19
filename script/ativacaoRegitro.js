const input = document.querySelector('#user-name')
const btn = document.querySelector('#Join')
btn.addEventListener('click', () => {
    if(!input.value == false){
        window.location.href = './chat.html'
        sessionStorage.setItem('username',input.value)
        sessionStorage.setItem('id', Math.random())
    }else{
        input.style = 'border:2px solid red'
        alert('Você precisa Digitar um nome')
    }
})
