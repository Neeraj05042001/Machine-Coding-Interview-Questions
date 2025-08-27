document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const heading = document.getElementById("heading");
  let products = [];
  let page = 1;
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      if (!response.ok) throw new Error("Data not fetched");
      const data = await response.json();
      if (data && data.products) {
        products = data.products;
        render();
      }
      console.log(data);
    } catch (err) {
      console.error("Error Fetching products:", err);
    }
  };

  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((products) => {
        const productElement = document.createElement("div");
        productElement.classList.add("products_single");
        productElement.innerHTML = `
            <img src=${products.thumbnail} alt=${products.title}/>
            <span>${products.title}</span>
            `;

        productsContainer.appendChild(productElement);
      });

      if (page > 1) {
        const prevButton = createPaginationButton("⬅️", () => {
          selectPageHandler(page - 1);
        });
        pagination.appendChild(prevButton);
      }
      //display number button
      for (let i = 0; i <= products.length / 10; i++) {
        const button = createPaginationButton(i + 1, () => {
          selectPageHandler(i + 1), page === i + 1;
        });
        pagination.appendChild(button);
      }
      if (page < products.length / 10) {
        const nextButton = createPaginationButton("➡️", () => {
          selectPageHandler(page + 1);
        });
        pagination.appendChild(nextButton);
      }
    }
    app.innerHTML = "";
    app.appendChild(productsContainer);
    app.appendChild(pagination);
    heading.textContent =`Page No:${page}`;
  };

  const createPaginationButton = (text, clickHandler, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);

    if (isSelected) {
      button.style.backgroundColor = "red";
      //   button.classList.add("pagination_selected");
    }
    return button;
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage != page
    ) {
      page = selectedPage;
      render();
    }
  };

  fetchProducts();
});
