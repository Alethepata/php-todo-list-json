const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            list: [],
            newTask:''
        }
    },
    methods: {
        getList() {
            axios.get(this.apiUrl)
            .then(res => {
                this.list = res.data;
            })
        },
        addTask() {

            const data = new FormData();
            data.append('todo', this.newTask);

            axios.post(this.apiUrl, data)
            .then(res => {
                this.list = res.data;
            })
        }
    },
    mounted() {
        this.getList();
    }
}).mount('#app')
