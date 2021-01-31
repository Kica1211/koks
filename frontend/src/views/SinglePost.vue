<template>
    <div>
        {{ state.post }}
        <button class="delete" v-on:click="deletePost" v-if="state.username === state.post.author">
            Delete post
        </button>
    </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
import router from "../router/index";
import { StorageService } from "../storage/service";
export default {
    name: "SinglePost",
    setup() {
        const state = reactive({
            post: [],
            username: StorageService.getUsername()
        });
        const store = useStore();
        const route = useRoute();
        const postId = route.params["postId"];
        const API_ADDRESS = store.state.API_ADDRESS;
        function deletePost() {
            let axiosConfig = {
                headers: {
                    Authorization: "Token " + StorageService.getToken()
                }
            };
            axios
                .delete(`${API_ADDRESS}/api/post-delete/${postId}`, axiosConfig)
                .then(() => {
                    router.push("/");
                })
                .catch(err => console.log(err));
        }
        function getSinglePost() {
            axios
                .get(`${API_ADDRESS}/api/post-detail/${postId}`)
                .then(res => (state.post = res.data))
                .catch(err => console.log(err));
        }
        onMounted(() => {
            getSinglePost();
        });
        return {
            state,
            deletePost
        };
    }
};
</script>
