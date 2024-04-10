<script>
import { store } from '@/store';
import axios from 'axios';

export default {
    name: 'ContactForm',
    data(){
        return{
            store,
            name: '', 
            email: '',
            message: '',
            success: false, 
            errors:{}
        }
    },
    methods: {
        sendContact(){

            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            this.errors = {}

            axios
            .post(`${this.store.apiUrl}/api/contacts`, data)
            .then(response => {
                this.success = response.data.success

                if (this.success) {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                } else {
                    this.errors = response.data.errors
                }

            })
        }
    },
    mounted() {
        
    },
}
</script>

<template>
    <div class="container pt-5">

        <div v-if="success" class="alert alert-success text-center">Subscribed!</div>

        <h1>Subscribe To Our Newsletter!</h1>
        <form @submit.prevent="sendContact()">
            <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" class="form-control" :class="errors && errors.name ? 'is-invalid' : '' " name="name" v-model="name">
                <div class="mt-2 alert alert-danger" v-for="(error, index) in errors && errors.name ? errors.name : []" :key="`message-errors-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" id="email" class="form-control" :class="errors && errors.email ? 'is-invalid' : '' " name="email" v-model="email">
                <div class="mt-2 alert alert-danger" v-for="(error, index) in errors && errors.email ? errors.email : []" :key="`message-errors-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea id="message" class="form-control" :class="errors && errors.message ? 'is-invalid' : '' " name="message" v-model="message" rows="5"></textarea>
                <div class="mt-2 alert alert-danger" v-for="(error, index) in errors && errors.message ? errors.message : []" :key="`message-errors-${index}`">
                    {{ error }}
                </div>
            </div>
            <button class="btn btn-success" type="submit">Subscribe</button>
        </form>
    </div>
</template>



<style>
</style>