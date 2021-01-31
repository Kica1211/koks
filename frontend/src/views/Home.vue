<template>
    <div id="content-wrapper">
        <AddPostForm @refresh-posts="getPosts" />
        <PostsContent :posts="state.posts" />
    </div>
</template>
<script>
import AddPostForm from "../components/main/AddPostForm";
import PostsContent from "../components/main/PostsContent";
import { onMounted, reactive } from "vue";
import router from "../router/index";
import { useStore } from "vuex";
import axios from "axios";
export default {
    name: "Home",
    components: { AddPostForm, PostsContent },
    props: {
        reload: {
            type: Boolean
        }
    },
    setup(props) {
        const state = reactive({
            posts: []
        });
        const store = useStore();
        const API_ADDRESS = store.state.API_ADDRESS;
        function getPosts() {
            axios
                .get(`${API_ADDRESS}/api/posts-list`)
                .then(res => (state.posts = res.data))
                .catch(err => console.log(err));
        }
        onMounted(() => {
            if (props.reload) {
                router.go();
            } else {
                getPosts();
            }
        });
        return {
            state,
            getPosts
        };
    }
};
</script>
