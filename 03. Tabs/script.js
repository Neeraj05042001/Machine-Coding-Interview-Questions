document.addEventListener("DOMContentLoaded", () => {
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");

  const showTab = document.getElementById("showTab");
  const showTabHeading = document.getElementById("showTabHeading");
  const tabDescription = document.getElementById("tabDescription");

  tab1.addEventListener("click", () => {
    showTabHeading.textContent = "Tab 1";
    tabDescription.textContent = "This is a content for Tab 1";
    tab1.classList.add("tab-clicked");
    tab2.classList.remove("tab-clicked");
    tab3.classList.remove("tab-clicked");
  });
  tab2.addEventListener("click", () => {
    showTabHeading.textContent = "Tab 2";
    tabDescription.textContent = "This is a content for Tab 2";
    tab2.classList.add("tab-clicked");
    tab1.classList.remove("tab-clicked");
    tab3.classList.remove("tab-clicked");
  });
  tab3.addEventListener("click", () => {
    showTabHeading.textContent = "Tab 3";
    tabDescription.textContent = "This is a content for Tab 3";
    tab3.classList.add("tab-clicked");
    tab1.classList.remove("tab-clicked");
    tab2.classList.remove("tab-clicked");
  });
});
console.log("hello");

