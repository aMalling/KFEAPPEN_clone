import { defineStore } from "pinia";

export const useloggedInStore = defineStore("loggedIn", {
  state: () => ({
    userId: localStorage.getItem("userId")
      ? JSON.parse(localStorage.getItem("userId")!)
      : false,
    teamPref: "B" /* datatableinstance.value.Team */,
  }),
});
