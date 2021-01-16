export const SeachCard = (props) => {
  const { title, _embedded } = props;

  const $postCard = document.createElement("div"),
    dateLocale = new Date(_embedded.self[0].date).toLocaleString();
  $postCard.classList.add("card");

  $postCard.innerHTML = `
  <div class="card__body">
      <h1 class="card__title">${title}</h1>
      <p class="card__description">
          <time class="card__time" dataset="${_embedded.self[0].date}">${dateLocale}</time>
          <a href="#/${_embedded.self[0].slug}">Ver mas</a>
      </p>
  </div>`;

  return $postCard;
};
