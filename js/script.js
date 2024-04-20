// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            newTask: {
                text: "",
                done: false
            },

            tasks: [
                {
                    text: "Recruiting blog post",
                    done: false
                },
                {
                    text: "Mobile app launch",
                    done: false
                },
                {
                    text: "Interview John H.",
                    done: true
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true
                }
            ]
        }
    },
    created() {
        const localTask = localStorage.getItem("tasks");
        //se localTask non è null
        if (localTask !== null) {
            this.tasks = JSON.parse(localTask);
        } else {
            this.tasks = [];
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
            //salvo tutto l'array di oggetti in una variabile trasformando tutto in una stringa
            const jsonTask = JSON.stringify(this.tasks);
            //abbiamo passato la variabile nel local storage
            localStorage.setItem("tasks", jsonTask);
            console.log(jsonTask);
        },

        addTask() {
            if (this.newTask.text !== "") {
                const push = { ...this.newTask }
                console.log(push);
                this.tasks.push(push);
                this.newTask.text = "";
                //salvo tutto l'array di oggetti in una variabile trasformando tutto in una stringa
                const jsonTask = JSON.stringify(this.tasks);
                //abbiamo passato la variabile nel local storage
                localStorage.setItem("tasks", jsonTask);
                console.log(jsonTask);
            }
        }

    },
}).mount("#app");