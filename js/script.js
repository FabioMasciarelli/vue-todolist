// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            newTask: {
                text:"",
                done: false
            },

            tasks: [
            {
                text:"Recruiting blog post",
                done: false
            },
            {
                text:"Mobile app launch",
                done: false
            },
            {
                text:"Interview John H.",
                done: true
            },
            {
                text:"Summit update to mobile storefronts",
                done: true
            }
        ]
        }
    },
    methods: {
        invert(value) {
            this.tasks[value].done === false ? this.tasks[value].done = true : this.tasks[value].done = false;
            console.log(this.tasks[value].done);
        },

        deleteTasks(value) {
            this.tasks.splice(value, 1);
            console.log(value);
        },

        addTask() {
            if(this.newTask.text !== "") {
                const push = {...this.newTask}
                console.log(push);
                this.tasks.push(push);
                this.newTask.text ="";
            }
        }

    },
}).mount("#app");