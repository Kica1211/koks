<template>
    <div id="register-wrapper">
        <h2>Register</h2>
        <div v-if="state.error">
            Please enter valid data
        </div>
        <form class="register-form" @submit.prevent="addUserSubmit">
            <div class="input-username">
                <label for="username">Username</label> <input id="username" type="text" v-model="state.username" />
                <div v-if="state.error">
                    Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                </div>
            </div>
            <div class="input-email">
                <label for="email">Email</label> <input id="email" type="email" v-model="state.email" />
                <div v-if="state.error">
                    Email error
                </div>
            </div>
            <div class="input-password">
                <label for="password">Password</label> <input id="password" type="password" v-model="state.password" />
                <div v-if="state.error">
                    Your password must be at least 8 characters long
                </div>
            </div>
            <button>Go</button>
        </form>
        <button class="elo" v-on:click="test">eluwina</button>
    </div>
</template>
<script>
import router from "../router/index";
import axios from "axios";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
    name: "Register",
    setup() {
        const state = reactive({
            username: "",
            password: "",
            email: ""
        });
        const store = useStore();
        function test() {
            router.push({ name: "LogIn", params: { message: "Now you can log in" } });
        }
        function addUserSubmit() {
            if (state.username.length > 4 && state.password.length > 7) {
                axios
                    .post(`${store.state.API_ADDRESS}/api/user-create/`, {
                        username: state.username,
                        email: state.email,
                        password: state.password
                    })
                    .then(res => {
                        console.log(res);
                        router.push({ name: "LogIn", params: { message: "Now you can log in" } });
                    })
                    .catch(err => {
                        console.log(err);
                        state.error = true;
                    });
            } else {
                console.log(12);
                state.error = true;
            }
        }

        return {
            state,
            addUserSubmit,
            test
        };
    }
};
</script>
