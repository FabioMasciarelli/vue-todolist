// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            todo: [
            {
                text:"Recruiting blog post",
                done: false,
            },
            {
                text:"Mobile app launch",
                done: false,
            },
            {
                text:"Interview John H.",
                done: false,
            },
            {
                text:"Summit update to mobile storefronts",
                done: false,
            },
        ],
        }
    },
    methods: {
        invert(value) {
            value === true ? value = false : value = true;
        }
    },
}).mount("#app");