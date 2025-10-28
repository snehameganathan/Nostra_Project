document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const checkboxes = document.querySelectorAll(".filter-sidebar input[type='checkbox']");
  const products = document.querySelectorAll(".product");

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const checkedFilters = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.parentElement.textContent.trim().toLowerCase());

    products.forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase();

      const matchesSearch = productName.includes(searchTerm);
      const matchesFilter =
        checkedFilters.length === 0 ||
        checkedFilters.some((filter) => productName.includes(filter));

      if (matchesSearch && matchesFilter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Event listeners
  searchInput.addEventListener("keyup", filterProducts);
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", filterProducts)
  );
});


document.querySelector('a[href="#new-arrivals"]').addEventListener('click', function(e) {
  e.preventDefault();
  const section = document.querySelector('#new-arrivals');
  window.scrollTo({
    top: section.offsetTop - 80,
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#most-wanted"]').addEventListener('click', function(e) {
  e.preventDefault();
  const section = document.querySelector('#most-wanted');
  window.scrollTo({
    top: section.offsetTop - 80,
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.querySelector("nav ul");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
