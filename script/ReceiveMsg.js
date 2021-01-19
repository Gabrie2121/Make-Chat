const msgsFriends = [{
    name: `Raissa`,
    id: `01`,
    group: `grupo1`,
    message: `Wasssup Sucker!!`
},{
    name: `Carlos`,
    id: `02`,
    group: `grupo2`,
    message: `Don't be a Dick bro`
}]

const gerarMsg=(idGroup)=>{
    for (const msg of msgsFriends) {
        console.log(idGroup)
        console.log(msg.group)
        if(idGroup == msg.group){
            chat.innerHTML += `<div class='msg'><span id='nick'>${msg.name}</span><br>${msg.message}</div><hr>`
        }
    }
}