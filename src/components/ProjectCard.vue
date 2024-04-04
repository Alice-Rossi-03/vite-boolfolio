<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        type: String,
        description: String,
        technologies: Array,
    }
}
</script>

<template>

    <div class="card h-100" style="width: 16rem;">
        <div class="card-body">
            <h2 class="card-title text-light">{{ title }}</h2>
            
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


</template>

<style scoped>

</style>