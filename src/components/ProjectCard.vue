<script>

import { store } from '@/store';
import { RouterLink } from 'vue-router';

export default {
    name: "ProjectCard",
    props: {
        title: String,
        type: String,
        description: String,
        technologies: Array,
        image: String,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>

    <!-- <RouterLink :to="{ name: 'showProject', params: { slug: slug } }" class="card-title text-warning"> -->
        <div class="card h-100" style="width: 16rem;">

            <img class="card-img-top" :src="`${store.apiUrl}/storage/${image}`" alt="title">

            <div class="card-body">

                <RouterLink :to="{name: 'single-project', params:{slug: slug}}" class="card-title text-warning">{{ title }}</RouterLink>

                <h2>{{ title }}</h2>

                <h6 class="text-secondary">{{ type }}</h6>

                <p class="card-text">{{ description }}</p>

                <div v-if="technologies && technologies.length">

                    <hr class="my-4">

                    <h5>Technologies:</h5>
                    <ul>
                        <li v-for="(tech, index) in technologies" :key="tech.id">
                            {{ tech.name }}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    <!-- </RouterLink> -->
</template>

<style scoped></style>