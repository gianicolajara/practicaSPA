import { PostCard } from "../components/PostCard.js";
import { SeachCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

let observer;

const scrollInfinite = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { hash } = location,
        $main = document.querySelector("main"),
        $fragment = document.createDocumentFragment();

      let Component, url;

      if (observer) observer.disconnect();
      api.page++;

      if (!hash || hash === "#/") {
        Component = PostCard;
        url = `${api.POST_EMBED}&page=${api.page}`;
      } else if (hash.includes("#/buscar")) {
        Component = SeachCard;
        url = `${api.SEARCH}&page=${api.page}`;
      }

      document.querySelector(".loader").style.display = "block";

      ajax({
        url,
        successCb: (items) => {
          items.forEach((item) => $fragment.appendChild(Component(item)));
          $main.appendChild($fragment);
          observerData();
        },
      });
    }
  });
};

export const observerData = () => {
  const { hash } = location,
    $main = document.querySelector("main");

  let lastChildrenMain;
  if (!hash || hash === "#/" || hash.includes("#/buscar=")) {
    lastChildrenMain = $main.children[api.PER_PAGE * api.page - 1];
  } else {
    return false;
  }

  if (lastChildrenMain) {
    const options = {
      threshold: 0.5,
    };
    observer = new IntersectionObserver(scrollInfinite, options);
    observer.observe(lastChildrenMain);
  }
};
