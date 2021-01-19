const msgsFriends = [{
    name: `Raissa`,
    id: `01`,
    group: `grupo1`,
    message: `Wasssup Sucker!!`
},{
    name: `Carlos`,
    id: `02`,
    group: `grupo1`,
    message: `Don't be a Dick bro`
},{
    name: `Nancy`,
    id: `03`,
    group: `grupo1`,
    message: `Suck me dude`
},{
    name: `Josafa`,
    id: `04`,
    group: `grupo1`,
    message: `HAHAHA`
},{
    name: `Carlos`,
    id: `11`,
    group: `grupo2`,
    message: `Don't be a Dick bro`
},{
    name: `Nancy`,
    id: `12`,
    group: `grupo3`,
    message: `Suck me dude`
},{
    name: `Josafa`,
    id: `13`,
    group: `grupo4`,
    message: `HAHAHA`
},{
    name: `Maria`,
    id: `05`,
    group: `grupo5`,
    message: `so, just kidding me`
},{
    name: `Luiz`,
    id: `06`,
    group: `grupo6`,
    message: `this can'not working`
},{
    name: `Lorena`,
    id: `07`,
    group: `grupo7`,
    message: `I want destruct this`
},{
    name: `Joker`,
    id: `08`,
    group: `grupo8`,
    message: `HAHAHAA!!`
},{
    name: `IronMan`,
    id: `09`,
    group: `grupo9`,
    message: `I'am the iron man`
},{
    name: `Luizino`,
    id: `10`,
    group: `grupo10`,
    message: `helo babie`
}]

const gerarMsg=(idGroup)=>{
    for (const msg of msgsFriends) {
        console.log(idGroup)
        console.log(msg.group)
        if(idGroup == msg.group){
            chat.innerHTML += `<div class='msg'><span id=${msg.id==idUser?'nick':'nick-receive'}>${msg.name}</span><br>${msg.message}</div><hr>`
        }
    }
}