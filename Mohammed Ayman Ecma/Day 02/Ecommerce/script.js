const checkboxList = document.querySelector(".checkbox-list");
const productsList = document.querySelector(".products");
const applyBtn = document.querySelector(".apply-btn");
const page = document.querySelector(".page");
const loaderPage = document.querySelector(".loader-page");
const searchInput = document.querySelector(".search-input");
let originalProducts;
let displayedProducts;
function hideLoader() {
  page.style.display = "grid";
  loaderPage.classList.toggle("hidden");
}
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    originalProducts = await res.json();
    const categories = getUniqueEnteries(originalProducts);
    categories.forEach((category) => {
      renderCategories(category);
    });
    displayedProducts = originalProducts;
    renderProducts(displayedProducts);
    hideLoader();
  } catch (error) {
    productsList.innerHTML = `<h1 class='error'>Something went wrong fetching your data Error: ${error}</h1>`;
    hideLoader();
  }
}
getProducts();

function getUniqueEnteries(obj) {
  const enteries = obj.map((element) => {
    return element.category;
  });

  const uniqueEnteriesObj = new Set(enteries);
  const uniqueEnteries = [...uniqueEnteriesObj];
  return uniqueEnteries;
}

function renderCategories(categoryName) {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const box = document.createElement("span");
  label.classList.add("cb");
  label.appendChild(checkbox);
  label.appendChild(box);
  checkboxList.append(label);
  // add text AFTER the box
  label.appendChild(document.createTextNode(categoryName));
  checkbox.setAttribute("value", categoryName);
  box.classList.add("box");
}
function renderProducts(products) {
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <div class="product-card">
        <div class="image-box">
        <img
        class="product-img"
        src=${product.image}
        alt="Fjallraven backpack"
        />
        </div>

        <div class="product-meta">${product.category}</div>

        <h3 class="product-title">
        ${product.title}
        </h3>

        <p class="product-desc">
       ${product.description}
        </p>

        <div class="product-bottom">
        <div class="price">$${product.price}</div>

        <div class="rating">
        ★ ${product.rating.rate}
        <span class="count">(${product.rating.count})</span>
        </div>
        </div>
        </div>`;
    if (index === 0) {
      productsList.replaceChildren(productCard);
    } else {
      productsList.appendChild(productCard);
    }
  });
}
applyBtn.addEventListener("click", function () {
  //Handle Sorting
  selectedRadio = document.querySelector('input[type="radio"]:checked').value;
  let sortedProducts;
  if (selectedRadio === "asc") {
    sortedProducts = [...originalProducts].sort((a, b) => a.price - b.price);
  }
  if (selectedRadio === "desc") {
    sortedProducts = [...originalProducts].sort((a, b) => b.price - a.price);
  }
  if (selectedRadio === "none") {
    sortedProducts = originalProducts;
  }

  //handle filtering by category
  const checkedNodes = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  const checkedArray = [...checkedNodes];
  // Array.from()
  const checkedValues = checkedArray.map((node) => {
    return node.value;
  });
  let filteredProducts;
  if (checkedArray.length === 0) {
    filteredProducts = sortedProducts;
  } else {
    filteredProducts = sortedProducts.filter((item) =>
      checkedValues.includes(item.category),
    );
  }
  displayedProducts = filteredProducts;
  renderProducts(displayedProducts);
});
searchInput.addEventListener("input", function (e) {
  const input = e.target.value;
  const searched = displayedProducts.filter((product) => {
    return product.title.includes(input) || product.description.includes(input);
  });
  renderProducts(searched);
  if (input === "") renderProducts(displayedProducts);
  if (searched.length === 0) {
    const notFound = document.createElement("p");
    notFound.textContent = "No results found";
    productsList.replaceChildren(notFound);
  }
});
//Debouncing [Search]
