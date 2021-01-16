import { app } from "./App.js";

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", app);
w.addEventListener("hashchange", app);
