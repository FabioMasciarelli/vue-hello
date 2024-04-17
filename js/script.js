// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


const {createApp} = Vue;

createApp({
    data() {
        return {
            userName: null,
            output: null,
            image:"./img/img1.png",
        }
    },
    
    methods: {
        printName: function() {
            this.output = `Ciao ${this.userName}! Simone Bonvecchio ti saluta`;
        },
    }
}).mount("#app");