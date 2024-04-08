<script>

import { store } from '@/store';
import axios from 'axios';

export default {
    name: "ShowSingleProject",
    data(){
        return{
            store,
            project: []
        }
    },
    methods:{
        getSingleProject(){
            axios
            .get(`${store.apiUrl}/api/test/${this.$route.params.slug}`)
            .then(response => {
                if(response.data.success){
                    this.project = response.data.project
                } else{
                    this.$router.push({name: 'not-found'})
                }
            })
        }
    },
    mounted(){
        this.getSingleProject()
    }
}
</script>

<template>

    <h1>ciao dal singolo project</h1>

</template>

<style scoped>

</style>