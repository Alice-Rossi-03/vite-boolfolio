<script>

import { store } from '@/store';
import axios from 'axios';

export default {
    name: "ShowSingleProject",
    data() {
        return {
            store,
            project: []
        }
    },
    methods: {
        getSingleProject() {
            axios
                .get(`${store.apiUrl}/api/test/${this.$route.params.slug}`)
                .then(response => {
                    if (response.data.success) {
                        this.project = response.data.project
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }
}
</script>

<template>

    <div class="container py-3">

        <h1 class="mt-2 fw-bold">{{ project?.title }}</h1>
        <h3 class="mt-2">{{ project?.type ? project?.type.name : '' }}</h3>

        <div class="d-flex gap-3">

            <figure class="img-fluid" v-show="project.cover">
                <img :src="`${store.apiUrl}/storage/${project.cover}`" alt="project?.title">
            </figure>

            <div class="my-3">

                <p>{{ project?.description }}</p>

                <div v-show="project.technologies && project.technologies.length">
                    <h4>Technologies:</h4>
                    <ul>
                        <li v-for="(tech, index) in project.technologies" :key="tech.id">{{ tech.name }}</li>
                    </ul>
                </div>


            </div>

        </div>

    </div>

</template>

<style scoped></style>