import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsGalleryCreat = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemsGalleryCreat);

function createGalleryItems(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: "true",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});

console.log(galleryItems);
