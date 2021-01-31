<template>
    <div id="main-header">
        <div class="left part-of-header">
            <div class="wrap">
                <router-link :to="{ name: 'Home' }"> <div class="header-item header-title">Vue Vlog</div></router-link>
                <router-link :to="{ name: 'Home' }"><div class="header-item">Home</div></router-link>
                <router-link :to="{ name: 'About' }"><div class="header-item">About</div></router-link>
            </div>
        </div>
        <div class="right part-of-header">
            <div class="wrap" v-if="state.username">
                <router-link :to="{ name: 'NewPost' }">
                    <div class="header-item">New Post</div>
                </router-link>
                <router-link :to="{ name: 'Profile' }">
                    <div class="header-item">Profile</div>
                </router-link>
                <router-link :to="{ name: 'Logout' }">
                    <div class="header-item">Logout</div>
                </router-link>
            </div>
            <div class="wrap" v-else>
                <router-link :to="{ name: 'LogIn' }">
                    <div class="header-item">Log in</div>
                </router-link>
                <router-link :to="{ name: 'Register' }"> <div class="header-item">Register</div></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from "vue";
import { StorageService } from "../storage/service";
export default {
    name: "Header",
    setup() {
        const state = reactive({
            username: StorageService.getUsername()
        });
        return {
            state
        };
    }
};
</script>
