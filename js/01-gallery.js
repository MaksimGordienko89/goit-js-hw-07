import { galleryItems } from "./gallery-items.js";

const createGalleryItem = ({ preview, original, description }) =>
  `<a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width = 100% height = 100%></a>`;
const galleryMarkup = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

let instance;

function onClickImg(e) {
  e.preventDefault();
  (instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" >
`)),
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscClose);
      },
      onClose: (instance) => {
        document.addEventListener("keydown", onEscClose);
      },
    };

  instance.show();

  console.log(e.target.dataset.source);
}

function onEscClose(e) {
  e.preventDefault();
  if (e.key === "Escape") {
    instance.close();
  }
  // return;
}

galleryList.addEventListener("click", onClickImg);
galleryList.addEventListener("keyup", onEscClose);
