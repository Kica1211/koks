<template>
    <div id="input-wrapper">
        <div class="message" v-if="props.message">
            {{ props.message }}
        </div>
        <h2>Log In</h2>
        <div v-if="state.badLogin">We cannot find your login in our database</div>
        <form class="log-in-form" @submit.prevent="submitLogin">
            <div class="input-username"><label for="username">Username</label> <input type="text" v-model="state.username" /></div>
            <div class="input-password"><label for="password">Password</label> <input type="password" v-model="state.password" /></div>
            <button>Go</button>
        </form>
    </div>
</template>
<script>
import { reactive } from "vue";
import { USER_KEY, TOKEN_KEY } from "../storage/service";
import axios from "axios";
import router from "../router/index";
export default {
    name: "LogIn",
    props: {
        message: {
            type: String
        }
    },
    setup(props) {
        const state = reactive({
            username: "",
            password: "",
            badLogin: ""
        });
        function submitLogin() {
            axios
                .post("http://127.0.0.1:8000/auth/", {
                    username: state.username,
                    password: state.password
                })
                .then(resp => {
                    localStorage.setItem(TOKEN_KEY, resp.data.token);
                    localStorage.setItem(USER_KEY, state.username);
                    router.push({ name: "Home", params: { reload: true } });
                })
                .catch(() => {
                    state.badLogin = true;
                    localStorage.removeItem("user-token");
                });
        }
        return {
            state,
            submitLogin,
            props
        };
    }
};
</script>
