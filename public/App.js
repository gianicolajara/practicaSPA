import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { observerData } from "./helpers/scrollInfinite.js";

export const app = async () => {
  const d = document,
    $root = d.getElementById("root");

  $root.textContent = null;

  $root.appendChild(Header());
  $root.appendChild(Main());
  await Router();
  observerData();
};
