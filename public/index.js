import { app } from "./App.js";
import api from "./helpers/wp_api.js";

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", app);
w.addEventListener("hashchange", () => {
  api.page = 1;
  app();
});
