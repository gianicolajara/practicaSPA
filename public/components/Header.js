import { Title } from "./Title.js";
import { Menu } from "./menu.js";
import { SearchForm } from "./SearchForm.js";

export const Header = () => {
  const $header = document.createElement("header");
  $header.appendChild(Title());
  $header.appendChild(Menu());
  $header.appendChild(SearchForm());
  return $header;
};
