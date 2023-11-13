import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { useloggedInStore } from "./stores/loggedInStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
  {
    path: "/protokoller",
    name: "Protokoller",
    component: () => import("./views/Protokoller.vue"),
  },
  {
    path: "/PatientOversigt",
    name: "PatientOversigt",
    component: () => import("./views/PatientOversigt.vue"),
  },
  {
    path: "/InklusionsStatistik",
    name: "InklusionsStatistik",
    component: () => import("./views/InklusionsStatistik.vue"),
  },
  {
    path: "/KfeNr/:id",
    name: "KFE_Nr",
    component: () => import("./views/KfeNrDetalje.vue"),
  },
  {
    path: "/Profil/:id",
    name: "UserPage",
    component: () => import("./views/UserPage.vue"),
  },
  {
    path: "/AlleBehandlinger",
    name: "AlleBehandlinger",
    component: () => import("./views/AlleBehandlinger.vue"),
  },
  {
    path: "/PatientOprettelse",
    name: "PatientOprettelse",
    component: () => import("./views/PatientOprettelse.vue"),
  },
  {
    path: "/ProtokolOpret",
    name: "ProtokolOpret",
    component: () => import("./views/ProtokolOpret.vue"),
  },
  {
    path: "/EKKOpret",
    name: "EKKOpret",
    component: () => import("./views/EKKOpret.vue"),
  },
  {
    path: "/StandardbehandlingOpret",
    name: "StandardbehandlingOpret",
    component: () => import("./views/StandardbehandlingOpret.vue"),
  },
  {
    path: "/EKK",
    name: "EKK",
    component: () => import("./views/EKK.vue"),
  },
  {
    path: "/Standardbehandling",
    name: "Standardbehandling",
    component: () => import("./views/Standardbehandling.vue"),
  },
  {
    path: "/:notFound",
    name: "NotFound",
    component: () => import("./views/NotFound.vue"),
  },
  {
    path: "/AdminPage",
    name: "AdminPage",
    component: () => import("./views/AdminPage.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

const userId_temp: string = "userId";

// refactor this with jwt token i think the the auch is going to be yes or no from API
router.beforeEach((to, from) => {
  // redirect to login page if not logged in and trying to access a restricted page

  const auth = useloggedInStore();

  if (
    // TODO: make sure the user is authenticated this should be a binary from API but we still need userid ad accestype from API/DB
    // fix the local storage somehow? what do we need it for? i think it was because the Authorization pinia was not always working
    (auth.userId == 16 ||
      auth.userId == 17 ||
      auth.userId == 15 ||
      localStorage.getItem(userId_temp) == "15" ||
      localStorage.getItem(userId_temp) == "17" ||
      localStorage.getItem(userId_temp) == "16") &&
    // Avoid an infinite redirect
    to.name !== "Login"
  ) {
    // redirect the user to the login page
    return true;
  } else if (to.name !== "Login") {
    alert("Login påkrævet for at bruge siden");
    return "/Login";
  }
});

export default router;
