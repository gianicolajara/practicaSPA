export const PostCard = (props) => {
  const { _embedded, date, slug, title, excerpt } = props,
    dateLocale = new Date(date).toLocaleString();
  const $postCard = document.createElement("div");
  $postCard.classList.add("card");

  $postCard.innerHTML = `
        <div class="card__head">
            <img src="${
              _embedded["wp:featuredmedia"]
                ? _embedded["wp:featuredmedia"][0].source_url
                : "./public/assets/img/logo.png"
            }" class="card__img">
        </div>
        <div class="card__body">
            <h1 class="card__title">${title.rendered}</h1>
            ${excerpt.rendered}
            <p class="card__description">
                <time class="card__time" dataset="${date}">${dateLocale}</time>
                <a href="#/${slug}">Ver mas</a>
            </p>
        </div>`;

  return $postCard;
};
