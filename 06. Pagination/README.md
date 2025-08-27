<div align="center">

# 06: Pagination

## Machine Coding Series

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Beginner](https://img.shields.io/badge/Level-Beginner-green?style=flat-square)
![DOM](https://img.shields.io/badge/Focus-DOM_Manipulation-blue?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/Type-Vanilla_JavaScript-yellow?style=flat-square)
![Series](https://img.shields.io/badge/Series-Question_6-red?style=flat-square)

**🎯 Beginner-Friendly | Vanilla JavaScript | DOM Manipulation**

</div>

> *Created by: Neeraj | [LinkedIn: neeraj-kumar1904](https://linkedin.com/in/neeraj-kumar1904) 💼 | [X: @_19_neeraj](https://x.com/_19_neeraj) 🐦 | [GitHub: Neeraj05042001](https://github.com/Neeraj05042001) 🐙* |

## 🎯Goal:

> Implement a Button based pagination functionality in vanilla javascript.

Requirements:

- Fetch a list of products and render them on the page.
- The number of products per page should be 10.
- Ensure that the UI reflects the current page, and users can navigate to the previous and next pages.
- Ensure that clicking on a page number button updates the displayed products accordingly.
- Handle edge cases gracefully, such as navigating beyond the available pages.

---

## ✅Implementation👇👇

This project implements a **Pagination system** in vanilla JavaScript.
It fetches products from an API and displays them in a paginated format with **Previous / Next** and **Page Number** buttons.

This problem is commonly asked in **machine coding interviews** to test knowledge of:

- DOM manipulation
- API handling with async/await
- State management (keeping track of current page)
- Rendering UI dynamically

---

## 🚀 Features

- Fetches **100 products** from [DummyJSON API](https://dummyjson.com/products).
- Displays **10 products per page**.
- Supports **Previous**, **Next**, and **Page Number** buttons.
- Highlights the current page number.
- Handles errors gracefully if data fetching fails.

---

## 🖥️ How It Works

1. On page load, the script fetches **100 products**.
2. Products are stored in an array (`products`).
3. Only 10 products are displayed at a time based on the `page` variable.
4. Pagination buttons are generated dynamically:

   - **⬅️ Previous button** (disabled on first page).
   - **➡️ Next button** (disabled on last page).
   - **Page numbers** (click to jump directly).

5. UI is updated every time the page changes.

---

## 🔑 Key Functions

- **`fetchProducts()`** → Fetches data from API.
- **`render()`** → Renders products + pagination buttons.
- **`createPaginationButton(text, clickHandler)`** → Creates pagination buttons.
- **`selectPageHandler(selectedPage)`** → Updates the page state and re-renders.

---

## 🛠️ Tech Stack

- **HTML**
- **CSS**
- **Vanilla JavaScript**

No external frameworks/libraries used.

---

## 📸 Example UI

## 🎯 Interview Pointers

- Be ready to explain **why slice is used** (`products.slice(page * 10 - 10, page * 10)`).
- Justify **state management** with `page` variable.

- Mention possible **enhancements**:

  - Infinite scroll
  - Server-side pagination
  - Search + Pagination together
  - Lazy loading images

---

✅ This project demonstrates **pagination implementation from scratch**—a must-know for frontend interviews.


