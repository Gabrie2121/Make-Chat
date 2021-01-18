const user = document.querySelector('#username');
const groups = document.querySelector('.groups');
const title = document.querySelector('.title');
const chat = document.querySelector('.chat')
const groupsArray = ['grupo1', 'grupo2', 'grupo3', 'grupo4', 'grupo5', 'grupo6', 'grupo7', 'grupo8',]
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

document.addEventListener('click', e => {
    const el = e.target;
    //se o target conter alguma classe apagar 
    if (el.classList.contains('group')) {
        title.innerHTML = el.id;
        
    }
})
