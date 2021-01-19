const user = document.querySelector('#username');
const groups = document.querySelector('.groups');
const title = document.querySelector('.title');
const chat = document.querySelector('.chat');
const send = document.querySelector('#send-button');
const message = document.querySelector('#message');
const idUser = sessionStorage.getItem('id')
const h1Title = document.querySelector('#h1title')
const groupsArray = ['grupo1', 'grupo2', 'grupo3', 'grupo4', 'grupo5', 'grupo6', 'grupo7', 'grupo8','grupo9','grupo10']
const gerarNick = (nick) => {
    return sessionStorage.getItem(nick);
}
user.innerHTML = gerarNick('username')

const gerarGroup = (groupsAdd) => {
    for (const group of groupsAdd) {
        groups.innerHTML += `<button class='group' id='${group}'>${group}</button>`
    }
}
gerarGroup(groupsArray);

document.addEventListener('click',ChoiceGroup = e => {
    const el = e.target;
    //se o target conter alguma classe apagar 
    if (el.classList.contains('group')) {
        h1title.innerHTML = el.id;
        chat.id = el.id
        chat.innerHTML = ''
        gerarMsg(el.id);
    }
})
send.addEventListener('click', sendMsg =_=> {
    if (chat.id) {
        if (idUser) {
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