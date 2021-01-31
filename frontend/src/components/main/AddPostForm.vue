<template>
    <div class="add-post-form" v-if="state.username">
        <div class="title-add-post">
            Add new post !
        </div>
        <div class="input-field"><input maxlength="30" type="text" v-model="state.title" /></div>
        <div class="text-area-button"><textarea maxlength="3000" class="area-content" v-model="state.content"></textarea> <button class="add-post-button" v-on:click="handleAddPost">Add</button></div>
    </div>
</template>
<script>
import { reactive } from "vue";
import { StorageService } from "../../storage/service";
import axios from "axios";
export default {
    name: "AddPostForm",
    setup(props, ctx) {
        const state = reactive({
            username: StorageService.getUsername(),
            title: "",
            content: ""
        });
        function handleAddPost() {
            const postData = {
                title: state.title,
                description: state.content,
                pub_date: "2021-03-15T00:00:53+01:00",
                author: state.username
            };
            let axiosConfig = {
                headers: {
                    Authorization: "Token " + StorageService.getToken()
                }
            };
            axios
                .post(`http://127.0.0.1:8000/api/post-create/`, postData, axiosConfig)
                .then(() => {
                    ctx.emit("refresh-posts");
                    state.title = "";
                    state.content = "";
                })
                .catch(err => {
                    console.log(err);
                });
        }
        return {
            state,
            handleAddPost
        };
    }
};
</script>
