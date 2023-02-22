import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divElement = document.querySelector('div.gallery');

function createGalleryItems(itemsArr) {
    itemsArr.forEach(obj => {
        divElement.innerHTML += `
        <a class="gallery__link" href="${obj.original}" data-lightbox="lbox">
          <img
            class="gallery__image"
            src="${obj.preview}"
            data-source="${obj.original}"
            alt="${obj.description}"
          />
        </a>`
    });
};

function selectImage(evt) {
    evt.preventDefault();
};

createGalleryItems(galleryItems);

divElement.addEventListener('click', selectImage);

$('.gallery a').simpleLightbox({ /* options */ });