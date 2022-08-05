import { galleryItems } from "./gallery-items.js";
// Change code below this line
const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
</a></li>`;
const galleryMarkup = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
