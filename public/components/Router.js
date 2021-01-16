import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";
import { ajax } from "../helpers/ajax.js";
import { Post } from "./Post.js";
import { Loader } from "./Loader.js";
import { SeachCard } from "./SearchCard.js";

export const Router = async () => {
  const d = document,
    w = window,
    { hash } = location,
    $main = document.querySelector("main");

  $main.appendChild(Loader());
  const $loader = document.querySelector(".loader");

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POST_EMBED,
      successCb: (posts) => {
        const $fragment = document.createDocumentFragment();
        posts.forEach((post) => {
          $fragment.appendChild(PostCard(post));
        });
        $main.appendChild($fragment);
      },
    });
  } else if (hash.includes("#/buscar")) {
    const query = location.hash.replace(/[\/\#]/gi, ""),
      urlParams = new URLSearchParams(query),
      dataBusqueda = urlParams.get("buscar"),
      $fragment = document.createDocumentFragment();

    if (dataBusqueda.length > 0) {
      await ajax({
        url: `${api.SEARCH}${dataBusqueda}`,
        successCb: (querys) => {
          if (querys.length === 0) $main.innerHTML = "<p>Not Found 404</p>";
          querys.forEach((query) => {
            $fragment.appendChild(SeachCard(query));
          });
          $main.appendChild($fragment);
        },
      });
    } else {
      $main.innerHTML = "<p>You need put anything in the input search</p>";
    }
  } else if (hash === "#/contacto") {
    $main.textContent = "Contacto";
  } else {
    await ajax({
      url: `${api.POST_SLUG}${hash.slice(2)}`,
      successCb: (post) => {
        $main.innerHTML = Post(post[0]);
      },
    });
  }
  $loader.style.display = "none";
};
