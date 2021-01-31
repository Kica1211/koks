<template>
    <div class="posts-list ">
        <router-link v-for="post in posts" :to="{ path: `/post/${post.id}` }" :key="post.id">
            <div class="main-single-post">
                <div class="title">
                    {{ post.title }}
                    <div class="author">
                        <div>{{ post.author }}</div>
                        <div>{{ post.pub_date }}</div>
                    </div>
                </div>
                <div class="content">
                    {{ post.description }}
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "PostsContent",
    props: {
        posts: {
            type: Array
        }
    }
};
</script>
