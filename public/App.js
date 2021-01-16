import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export const app = () => {
  const d = document,
    $root = d.getElementById("root");

  $root.textContent = null;

  $root.appendChild(Header());
  $root.appendChild(Main());
  Router();
};
