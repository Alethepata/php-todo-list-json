const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            list:[]
        }
    },
    methods: {
        getList() {
            axios.get(this.apiUrl)
            .then(res => {
                this.list = res.data
            })
        }
    },
    mounted() {
        this.getList()
    }
}).mount('#app')
