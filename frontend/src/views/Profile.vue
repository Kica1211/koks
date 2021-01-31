<template>
    <div>
        profile
    </div>
</template>
<script>
import { StorageService } from "../storage/service";
import { onMounted } from "vue";
import router from "../router/index";
export default {
    name: "Profile",
    setup() {
        onMounted(() => {
            if (!StorageService.getToken() || !StorageService.getUsername()) {
                router.push("/");
            }
        });
    }
};
</script>
