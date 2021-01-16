export const Loader = () => {
  const $loader = document.createElement("img");
  $loader.src = "public/assets/loaders/circles.svg";
  $loader.alt = "loader";
  $loader.classList.add("loader");
  return $loader;
};
