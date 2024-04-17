// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


const {createApp} = Vue;

createApp({
    data() {
        return {
            userName: null,
            output: null,
        }
    },
    
    methods: {
        printName: function() {
            output = `Ciao ${userName}! Gerry Scotti ti saluta`;
        }
    }
}).mount("#app");