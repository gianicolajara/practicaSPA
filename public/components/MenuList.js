export const MenuList = () => {
  const $menuList = document.createElement("ul");

  $menuList.classList.add("menu__list");
  $menuList.innerHTML = `
    <li class="menu__item">
      <a href="#/" class="menu__link">Inicio</a>
    </li>
    <li class="menu__item">
      <a href="#/buscar" class="menu__link">Buscar</a>
    </li>
    <li class="menu__item">
      <a href="#/contacto" class="menu__link">Contacto</a>
    </li>
  `;

  return $menuList;
};
