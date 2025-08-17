const accordianData = [
  {
    title: "Section 1",
    description: "Content for section 1",
  },
  {
    title: "Section 2",
    description: "Content for section 2",
  },
  {
    title: "Section 3",
    description: "Content for section 3",
  },
  {
    title: "Section 4",
    description: "Content for section 4",
  },
  {
    title: "Section 5",
    description: "Content for section 5",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const accordianContainer = document.querySelector("#accordian");
  accordianData.forEach((section, index) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordian-item");

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordian-header");
    sectionHeader.textContent = section.title;

    const sectionContent = document.createElement("div");
    sectionContent.classList.add("accordian-content");
    sectionContent.innerHTML = `<p>${section.description}</p>`;

    sectionItem.append(sectionHeader, sectionContent);
    accordianContainer.appendChild(sectionItem);
    if (index === 0) {
      sectionItem.classList.add("active");
      sectionContent.style.display = "block";
    }
  });

  accordianContainer.addEventListener("click", (event) => {
    const header = event.target.closest(".accordian-header");
    if (!header) return;

    const sectionItem = header.parentNode;
    console.log(sectionItem);
    const content = sectionItem.querySelector(".accordian-content");
    console.log(content);
    const isActive = sectionItem.classList.contains("active");
    console.log(isActive);

    document.querySelectorAll(".accordian-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordian-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
