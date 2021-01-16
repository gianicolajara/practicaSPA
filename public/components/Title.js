import api from "../helpers/wp_api.js";

export const Title = () => {
  const $title = document.createElement("h1"),
    $link = document.createElement("a");
  $link.textContent = api.WEBSITE;
  $link.href = api.DOMAIN;
  $link.rel = "noopener noreferrer";
  $link.target = "_blank";
  $title.appendChild($link);
  return $title;
};
