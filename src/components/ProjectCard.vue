<script>

import { store } from '@/store';
import { RouterLink } from 'vue-router';

export default {
    name: "ProjectCard",
    props: [
        'propsElement'
    ],
    data() {
        return {
            store
        }
    }

}
</script>

<template>

    <!-- <RouterLink :to="{ name: 'showProject', params: { slug: slug } }" class="card-title text-warning"> -->
        <div class="card h-100">

            <img class="card-img-top" :src="`${store.apiUrl}/storage/${propsElement.cover}`" alt="title">

            <div class="card-body">

                <h2><RouterLink :to="{name: 'single-project', params:{slug: propsElement.slug}}" class="card-title text-warning">{{ propsElement.title }}</RouterLink></h2>

                <!-- <h2>{{ propsElement.title }}</h2> -->

                <h6 class="text-secondary">{{ propsElement.type.name }}</h6>

                <p class="card-text">{{ propsElement.description }}</p>

                <div v-if="propsElement.technologies && propsElement.technologies.length">

                    <hr class="my-4">

                    <h5>Technologies:</h5>
                    <ul>
                        <li v-for="(tech, index) in propsElement.technologies" :key="tech.id">
                            {{ tech.name }}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    <!-- </RouterLink> -->
</template>

<style scoped>
.card{
    width: 16rem;
}

</style>