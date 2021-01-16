export const SearchForm = () => {
  const $searchForm = document.createElement("form"),
    $searchInput = document.createElement("input");
  $searchForm.classList.add("search-form");
  $searchInput.type = "search";
  $searchInput.name = "search";
  $searchInput.placeholder = "Ingrese su busqueda";

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!e.target.matches(".search-form")) return false;

    location.hash = `#/buscar=${e.target.search.value.replace(
      /[\?\<\&\>\=]/gi,
      ""
    )}`;
  });

  $searchForm.appendChild($searchInput);
  return $searchForm;
};
