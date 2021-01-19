const user = document.querySelector('#username');
const groups = document.querySelector('.groups');
const title = document.querySelector('.title');
const chat = document.querySelector('.chat');
const send = document.querySelector('#send-button');
const message = document.querySelector('#message');
const idUser = sessionStorage.getItem('id')
const h1Title = document.querySelector('#h1title');
const server = fetch('http://45.233.50.124:3000/rooms').then((response =>response.json())).then(result =>{
    for (const resu of result) {
        groups.innerHTML += `<button class='group' id='${resu.id}'>${resu.name}</button>`
    }
}) 
const groupsArray = server
const gerarNick = (nick) => {
    return sessionStorage.getItem(nick);
}
user.innerHTML = gerarNick('username')



document.addEventListener('click',ChoiceGroup = e => {
    const el = e.target;
    //se o target conter alguma classe apagar 
    if (el.classList.contains('group')) {
        h1title.innerHTML = el.innerHTML;
        chat.id = el.id
        chat.innerHTML = ''
        gerarMsg(el.id);
    }
})
send.addEventListener('click', sendMsg =_=> {
    if (chat.id) {
        
        if (idUser) {
            console.log('entrei')
            if(message.value != ''){
                chat.innerHTML += `<div class='msg'><span id='nick'>${gerarNick('username')}</span><br>${message.value}</div><hr>`
                message.value = '' 
            }
        }
        
    } else {
        alert('Selecione um grupo')
    }
})
message.addEventListener('keypress', e => {
    
    if (e.charCode === 13) {
        sendMsg()
    }
})