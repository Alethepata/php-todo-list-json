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
            this.list += this.newTask;
        }
    },
    mounted() {
        this.getList();
    }
}).mount('#app')
