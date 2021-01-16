import { MenuList } from "./MenuList.js";

export const Menu = () => {
  const $menu = document.createElement("nav");
  $menu.appendChild(MenuList());
  $menu.classList.add("menu");
  return $menu;
};
