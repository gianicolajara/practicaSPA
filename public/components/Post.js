export const Post = (props) => {
  console.log(props);
  const { _embedded, date, title, content, slug } = props,
    dateLocale = new Date(date).toLocaleString();

  return `<section class="post">
            <img src="${
              _embedded["wp:featuredmedia"]
                ? _embedded["wp:featuredmedia"][0].source_url
                : "../assets/img/logo.png"
            }" alt="${slug}" class="post__img">
            <h1 class="post__title title">${title.rendered}</h1>
            <time datetime="${date}">${dateLocale}</time>
            <p class="post__description">${content.rendered}</p>
          </section>`;
};
