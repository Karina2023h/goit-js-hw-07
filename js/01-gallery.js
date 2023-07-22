import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsGalleryCreat = createGalleryItems(galleryItems);

gallery.addEventListener("click", handleClick);
gallery.insertAdjacentHTML("beforeend", itemsGalleryCreat);

function createGalleryItems(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: (instance) => {
    document.addEventListener("keydown", logMessage);
  },
  onClose: (instance) => {
    document.removeEventListener("keydown", logMessage);
  },
});

function handleClick(a) {
  a.preventDefault();
  const datasetSource = a.target.dataset.source;
  instance.element(a).querySelector("img").src = datasetSource;
  instance.show();
}

function logMessage(a) {
  if (a.code === "Escape");
  instance.close();
}
