import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import LogIn from "../views/LogIn";
import Register from "../views/Register";
import About from "../views/About";
import Profile from "../views/Profile";
import NewPost from "../views/NewPost";
import Logout from "../views/Logout";
import SinglePost from "../views/SinglePost";

const routes = [
    { path: "/", name: "Home", component: Home, props: true },
    { path: "/LogIn", name: "LogIn", component: LogIn, props: true },
    { path: "/Register", name: "Register", component: Register },
    { path: "/About", name: "About", component: About },
    { path: "/Profile", name: "Profile", component: Profile },
    { path: "/NewPost", name: "NewPost", component: NewPost },
    { path: "/Logout", name: "Logout", component: Logout },
    { path: "/post/:postId", name: "SinglePost", component: SinglePost }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const DEFAULT_PAGE_NAME = "pls django";
document.title = DEFAULT_PAGE_NAME;
router.beforeEach((to, from, next) => {
    let title = (to.matched[0].meta && to.matched[0].meta.title) || DEFAULT_PAGE_NAME;
    document.title = title;
    next();
});
export default router;
