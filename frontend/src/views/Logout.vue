<template>
    <div class="logout">
        Are you sure you want to logout?
        <button v-on:click="handleLogout">Yes</button>
        <button v-on:click="handleCancel">Cancel</button>
    </div>
</template>
<script>
import { StorageService } from "../storage/service";
import { USER_KEY, TOKEN_KEY } from "../storage/service";
import router from "../router/index";
import { onMounted } from "vue";
export default {
    name: "Logout",
    setup() {
        function handleLogout() {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
            router.push({ name: "Home", params: { reload: true } });
        }
        function handleCancel() {
            router.push("/");
        }
        onMounted(() => {
            if (!StorageService.getToken() || !StorageService.getUsername()) {
                router.push("/");
            }
        });
        return {
            handleLogout,
            handleCancel
        };
    }
};
</script>
