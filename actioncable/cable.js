window.App = {}

function openSocket() {
    window.App.cable = ActionCable.createConsumer("http://45.233.50.124:3000/cable")
    window.App.cable = window.App.cable.subscriptions.create({channel: 'ChatChannel', room:1, name: guid()}, {
        connected: function () {
            console.log("connected", this.identifier)
            sendAnnounce()
        },
        disconnected: function () {
            console.log("disconnected", this.identifier)
        },
        rejected: function () {
            console.log("rejected")
        },
        received: function (data) {
            console.log(data)
        },
        speak: function(message, name){
          console.log('Speaked')  
          this.perform('speak', { message: message, name: name })
        },
        announce: function(name){
            this.perform('announce', { name: name })
        }


    });
}

function sendAnnounce(){
    window.App.cable.announce('EDER','animes')
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
function enviar(){
        window.App.cable.speak('HELLO', "EDER")
     
}