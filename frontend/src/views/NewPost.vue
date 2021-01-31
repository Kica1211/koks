<template>
    <div>
        neWpOST
    </div>
</template>
<script>
import { StorageService } from "../storage/service";
import { onMounted } from "vue";
import router from "../router/index";
export default {
    name: "NewPost",
    setup() {
        onMounted(() => {
            if (!StorageService.getToken() || !StorageService.getUsername()) {
                router.push("/");
            }
        });
    }
};
</script>
