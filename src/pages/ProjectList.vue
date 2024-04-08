<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue'; 
import {store} from '../store'; 

export default {
    components:{
        ProjectCard
    },
    name: 'ProjectList',
    data() {
        return {
            projectsArray: [],
            currentPage: '',
            lastPage: '',
            store
        }
    },
    methods: {
        getProjects(apiProjectPage) {

            axios
                .get(`${store.apiUrl}/api/test`, {
                    params: {
                        page: apiProjectPage
                    }
                })
                .then(response => {
                    console.log(response.data.projects.data);

                    this.projectsArray = response.data.projects.data;
                    this.currentPage = response.data.projects.current_page;
                    this.lastPage = response.data.projects.last_page;
                })
        }
    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<template>

    <div class="container pt-4 d-flex justify-content-center">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class=" currentPage === 1 ? 'disabled': '' ">
                    <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
                </li>
                <li class="page-item" v-for=" (item, index) in lastPage " :key="index">
                    <button class="page-link" @click="getProjects(item)">{{ item }}</button>
                </li>
                <li class="page-item" :class=" currentPage === lastPage ? 'disabled': '' ">
                    <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                </li>
            </ul>
        </nav>
    </div>

    <div class="pt-4 container d-flex flex-wrap justify-content-center gap-4">

        <ProjectCard v-for="(item, index) in projectsArray" :key="item.id" :propsElement="item"/>

    </div>
</template>

<style scoped></style>
