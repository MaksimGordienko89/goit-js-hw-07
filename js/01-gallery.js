import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  galleryList: document.querySelector("ul.gallery"),
  lightbox: document.querySelector(".lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
};

const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.dataset.source = original;
  img.src = preview;
  img.alt = description;

  parent.appendChild(img);
};

const createLink = (item, parent) => {
  const { original } = item;
  const a = document.createElement("a");

  a.classList.add("gallery__link");
  a.href = original;

  createImage(item, a);

  parent.appendChild(a);
};

const createItem = (item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  createLink(item, li);

  return li;
};

const renderListItems = (arr) => {
  const items = arr.map((item) => createItem(item));

  refs.galleryList.append(...items);
};

renderListItems(images);

function onClickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightbox.querySelector(".lightbox__image").src = e.target.src;
    refs.lightbox.querySelector(".lightbox__image").alt = e.target.alt;
  }
}

function onCloseHandler(e) {
  if (e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
    refs.lightbox.classList.remove("is-open");
  }
}

refs.galleryList.addEventListener("click", onClickHandler);
refs.btn.addEventListener("click", onCloseHandler);
console.log(galleryItems);
// "use strict";
// import images from "./gallery-items.js";

// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   image: document.createElement("img"),
//   lightbox: document.querySelector(".lightbox"),
//   btn: document.querySelector('[data-action="close-lightbox"]'),
//   modal: document.querySelector(".lightbox__content"),
//   lightbox__image: document.querySelector(".lightbox__image"),
// };

// const createGalleryItem = ({ preview, original, description }) =>
//   `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href=${original}
// >
//   <img
//     class="gallery__image"
//     src=${preview}
//     data-source=${original}
//     alt=${description}
//   />
// </a>
// </li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + galleryItems(item),
//   ""
// );
// refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
// refs.image.classList.add("gallery__image");

// refs.gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   if (e.target.nodeName === "IMG") {
//     refs.lightbox.classList.add("is-open");
//     refs.lightbox__image.src = e.target.getAttribute("data-source");
//     refs.lightbox__image.alt = e.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function onClickHandlerClose(e) {
//   e.preventDefault();
//   refs.lightbox.classList.remove("is-open");
//   refs.lightbox__image.src = "";
//   refs.lightbox__image.alt = "";
//   window.removeEventListener("keyup", clickKey);
// }

// function closeLightbox(event) {
//   if (event.target === event.currentTarget) {
//     onClickHandlerClose();
//   }
// }

// function clickKey(event) {
//   if (event.code === "Escape") {
//     onClickHandlerClose();
//   }
// }
